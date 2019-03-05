print(set("My name is Eric and Eric is my name".split()))

a = set(["Jake", "John", "Eric"])
print(a)
b = set(["John", "Jill"])
print(b)

print(a.intersection(b))
print(b.intersection(a))
print(a.union(b))
print(a.symmetric_difference(b))
print(b.symmetric_difference(a))
print(a.difference(b))
print(b.difference(a))