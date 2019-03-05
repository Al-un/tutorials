import types
import random


def lottery():
    # random 1-40 until 6
    for i in range(6):
        yield random.randint(1, 40)

    yield random.randint(1, 15)


for rand_num in lottery():
    print('and the winner number is ... %d!' % rand_num)

# fill in this function


def fib():
    a, b = 1, 1
    while 1:
        yield a
        a, b = b, a+b


# testing code
if type(fib()) == types.GeneratorType:
    print("Good, The fib function is a generator.")

    counter = 0
    for n in fib():
        print(n)
        counter += 1
        if counter == 10:
            break
