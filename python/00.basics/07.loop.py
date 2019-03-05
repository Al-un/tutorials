for prime in [2, 3, 5, 7]:
    print('prime number: %d' % prime)

for x in range(5):
    print("Range(5) x: %d" % x)
for x in range(3, 6):
    print("Range(3, 6) x: %d" % x)
for x in range(3, 8, 3):
    print("Range(3, 8, 3) x: %d" % x)

count = 0
while count < 5:
    print('while count:%d' % count)
    count += 1

count = 0
while True:
    print('count %d' % count)
    count += 1
    if count >= 5:
        break

for x in range(3, 7):
    if x % 2 == 0:
        continue
    print("x: %d" % x)

    # Prints out 0,1,2,3,4 and then it prints "count value reached 5"

count = 0
while(count < 5):
    print(count)
    count += 1
else:
    print("count value reached %d" % (count))

# Prints out 1,2,3,4
for i in range(1, 10):
    if(i % 5 == 0):
        break
    print(i)
else:
    print("this is not printed because for loop is terminated because of break but not due to fail in condition")
