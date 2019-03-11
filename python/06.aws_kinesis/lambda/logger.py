# Lambda code
import json
import psycopg2
import base64
import time

CONN_STRING = "user='pouet' password='PlopPlop12' host='learn-aws-kinesis.cm7tssjh5ymm.eu-west-3.redshift.amazonaws.com' port='5439' dbname='dev'"

def lambda_handler(event, context):

    # Connect to DB
    # https://wiki.postgresql.org/wiki/Using_psycopg2_with_PostgreSQL

    conn = psycopg2.connect(CONN_STRING)
    cursor = conn.cursor()
    sql_temp = "INSERT INTO votes (ip, choice_id) VALUES (%s, %s)"

    # pseudo wait 5 seconds
    time.sleep(2)

    # Decrypt payload
    # https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis-create-package.html#with-kinesis-example-deployment-pkg-python
    for record in event['Records']:
        # Kinesis data is base64 encoded so decode here
        print(record["kinesis"]["data"])
        payload = base64.b64decode(record["kinesis"]["data"])
        
        vote_log = json.loads(payload)
        print(vote_log)
        cursor.execute(sql_temp, (vote_log['ip'], vote_log['choice_id']))

    conn.commit()
    cursor.close()
    conn.close()
