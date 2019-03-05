class MyClass:
    variable = ''

    def __init__(self, var="pouet"):
        self.variable = var

    def function(self):
        print("Pouet from MyClass: %s" % self.variable)

myObj = MyClass()
myObj.function()
print(myObj.variable)

anotherObj = MyClass("plop")
anotherObj.function()