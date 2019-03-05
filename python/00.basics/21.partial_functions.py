from functools import partial


def multiply(x, y):
    return x*y


dbl = partial(multiply, 2)
print(dbl(4))


def concat(a, b):
    return a+" "+b


pouet = partial(concat, "pouet")
print(pouet('plop'))


def func(u, v, w, x):
    return u*4 + v*3 + w*2 + x
# Enter your code here to create and print with your partial function


pouet = partial(func, 5, 5, 5)
print(pouet(15))
