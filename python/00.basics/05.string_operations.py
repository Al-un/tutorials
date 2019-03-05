astring = "Hello world!"

print(len(astring))

print(astring.index("o"))
print(astring.index("o", 5))
print(astring.index("or"))
try:
    print(astring.index("aze"))
except:
    print('aze not found')


print(astring.count("l"))

print(astring[3:7])
print(astring[3:7:2])
print(astring[::-1])

print(astring.upper())
print(astring.lower())

print(astring.startswith('Hello'))
print(astring.startswith('hello'))
print(astring.endswith('aze'))

print(astring.split(' '))
