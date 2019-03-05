def transmit_to_space(message):
    "This is the enclosing function"
    def data_transmitter():
        "The nested function"
        print(message)

    data_transmitter()


print(transmit_to_space("Test message"))


def print_msg(number):
    def printer():
        "Here we are using the nonlocal keyword"
        nonlocal number
        number = 3
        print(number)
    printer()
    print(number)


print_msg(9)
