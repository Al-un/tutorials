phonebook = {
    'bob': 654987321
}
phonebook['John'] = 123456789
phonebook['Jack'] = 456789123
phonebook['Jill'] = 789456123
print(phonebook)

for name, number in phonebook.items():
    print('Phone for %s is %d' % (name, number))

del phonebook['Jack']

for name, number in phonebook.items():
    print('Phone for %s is %d' % (name, number))