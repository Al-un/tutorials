def pouet(one, two, *therest):
    print("one: %s" % one)
    print("two: %s" % two)
    print("therest: %s" % list(therest))


pouet("pouet", "plop")
pouet("pouet", "plop", "prout", "bwarf")

# edit the functions prototype and implementation


def foo(a, b, c, *options):
    return len(options)


def bar(a, b, c, **options):
    return options.get('magicnumber') == 7


# test code
if foo(1, 2, 3, 4) == 1:
    print("Good.")
if foo(1, 2, 3, 4, 5) == 2:
    print("Better.")
if bar(1, 2, 3, magicnumber=6) == False:
    print("Great.")
if bar(1, 2, 3, magicnumber=7) == True:
    print("Awesome!")
