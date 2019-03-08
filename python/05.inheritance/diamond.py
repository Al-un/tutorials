class Sleeper:
    def sleep(self):
        pass

class Animal(Sleeper):
    legs_count = 0

    def __init__(self, legs_count):
        self.init_legs_count(legs_count)

    def sleep(self):
        print("zzzZZZzzz")

    def init_legs_count(self, legs_count):
        self.legs_count = legs_count
        print("initialising legs count %d" % legs_count)

class Flyer(Sleeper):

    def __init__(self):
        pass

    def sleep(self):
        print('cannot sleep while flying')

class Bird(Flyer, Animal):
    def __init__(self):
        self.init_legs_count(2)


animal = Animal(4)
print("Animal legs: %d" % animal.legs_count)
animal.sleep()

birdy = Bird()
birdy.sleep()