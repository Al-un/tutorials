# import module
# print(pouet.add(4, 2))
# pouet = pouet.Pouet('hehe')
# pouet.print()

from todos import model
from module import add, Pouet

print(add(4, 2))
pouet = Pouet('hehe')
pouet.print()

newTodo = model.Todo('Pouet')
newTodo.print()

newTodo = model.Todo()
newTodo.print()
