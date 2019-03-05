dict = {
    "country": ["Brazil", "Russia", "India", "China", "South Africa"],
    "capital": ["Brasilia", "Moscow", "New Delhi", "Beijing", "Pretoria"],
    "area": [8.516, 17.10, 3.286, 9.597, 1.221],
    "population": [200.4, 143.5, 1252, 1357, 52.98]
}

import pandas as pd
brics = pd.DataFrame(dict)
# print(brics)

brics.index = ['BR', 'RU', 'IN', 'CH', 'SA']
print(brics)

cars = pd.read_csv('cars.csv', index_col=0)
print('print cars')
print(cars)
print('print cars[cars_per_cap]')
print(cars['cars_per_cap'])
print('print cars[[cars_per_cap]]')
print(cars[['cars_per_cap']])
print('print cars[[cars_per_cap, country]]')
print(cars[['cars_per_cap', 'country']])
print('print cars[1:3]')
print(cars[1:3])
print('print cars.iloc[2]')
print(cars.iloc[2])
print('print cars.loc[[\'AUS\', \'EG\']]')
print(cars.loc[['AUS', 'EG']])