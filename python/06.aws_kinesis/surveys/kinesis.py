import boto3
from django.conf import settings
import json

kinesis_stream = 'learn-aws-kinesis'
kinesis_client = boto3.client('kinesis',
                              region_name='ap-northeast-1',
                              aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                              aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY)


def put_vote_to_stream(request, choice):
    ip = request.META.get('REMOTE_ADDR')
    payload = {
        'ip': ip,
        'choice_id': choice.id
    }
    payload_json = json.dumps(payload)

    output = kinesis_client.put_record(
        StreamName=kinesis_stream, Data=payload_json, PartitionKey='vote')
    print(output)
