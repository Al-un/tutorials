name = "John"
age = 23

if name == "John" and age == 23:
    print('pouet')
elif name == 'John':
    print('pouet John only')
else:
    print('plouf')

if name in ['Bob', 'John']:
    print('plop')

x = [1, 2, 3]
y = [1, 2, 3]
z = x
print(x == y)
print(x is y)
print(x is z)

if not False:
    print('hehe')