from nltk.corpus import wordnet

syn = wordnet.synsets('pain')

print(syn[0].definition())
print(syn[0].examples())

print(wordnet.synsets('NLP')[0].definition())
print(wordnet.synsets('Python')[0].definition())

synonyms = []
for syn in wordnet.synsets('Computer'):
    for lemma in syn.lemmas():
        synonyms.append(lemma.name())

print(synonyms)

antonyms = []
for syn in wordnet.synsets("small"):
    for l in syn.lemmas():
        if l.antonyms():
            antonyms.append(l.antonyms()[0].name())

print(antonyms)