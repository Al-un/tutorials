# 2 arrays
import numpy as np
height = [1.87, 1.82, 1.91]
weight = [81.65, 92.25, 92.98]

# import numpy as np

np_height = np.array(height)
np_weight = np.array(weight)

print(type(height))
print(type(weight))
print(type(np_height))
print(type(np_weight))

bmi = np_weight / np_height**2
print(bmi) 
print(bmi[bmi > 25])