import calendar

class Todo:

    text = ''
    deadline = calendar.datetime.datetime.now()

    def __init__(self, text= 'Some todo text'):
        self.text = text

    def print(self):
        print(self.deadline.strftime("%x %X") + " - " + self.text)