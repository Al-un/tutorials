from nltk.tokenize import sent_tokenize, word_tokenize

mytext = "Hello Mr. Adam, how are you? I hope everything is going well. Today is a good day, see you dude"
mytextFr = "Bonjour M. Adam, comment allez-vous? J'espère que tout va bien. Aujourd'hui est un bon jour"

print('----------')
print(sent_tokenize(mytext))
print('----------')
print(word_tokenize(mytext))
print('----------')
print(sent_tokenize(mytextFr))
print('----------')