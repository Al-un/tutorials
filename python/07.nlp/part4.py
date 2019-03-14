from nltk.stem import PorterStemmer, SnowballStemmer, WordNetLemmatizer

stemmer = PorterStemmer()
print(stemmer.stem('working'))

print(SnowballStemmer.languages)

french_stemmer = SnowballStemmer('french')
print(french_stemmer.stem('prédéterminé'))
print(french_stemmer.stem('Aléatoirement'))
print(french_stemmer.stem('Progressivement'))

print(stemmer.stem('increases'))
lemmatizer = WordNetLemmatizer()
print(lemmatizer.lemmatize('increases'))
print(lemmatizer.lemmatize('playing', pos='v'))
print(lemmatizer.lemmatize('playing', pos='n'))
print(lemmatizer.lemmatize('playing', pos='a'))
print(lemmatizer.lemmatize('playing', pos='r'))

print(stemmer.stem('stones'))
print(stemmer.stem('speaking'))
print(stemmer.stem('bedroom'))
print(stemmer.stem('jokes'))
print(stemmer.stem('lisa'))
print(stemmer.stem('purple'))
print('----------------------')
print(lemmatizer.lemmatize('stones'))
print(lemmatizer.lemmatize('speaking'))
print(lemmatizer.lemmatize('bedroom'))
print(lemmatizer.lemmatize('jokes'))
print(lemmatizer.lemmatize('lisa'))
print(lemmatizer.lemmatize('purple'))
