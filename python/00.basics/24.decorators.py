# def repeater(old_function):
#     # See learnpython.org/page/Multiple%20Function%20Arguments for how *args and **kwds works
#     def new_function(*args, **kwds):
#         old_function(*args, **kwds)  # we run the old function
#         old_function(*args, **kwds)  # we do it twice
#     # we have to return the new_function, or it wouldn't reassign it to the value
#     return new_function

# def double_out(old_function):
#     def new_function(*args, **kwds):
#         return 2 * old_function(*args, **kwds) # modify the return value
#     return new_function

# def double_Ii(old_function):
#     def new_function(arg): # only works if the old function has one argument
#         return old_function(arg * 2) # modify the argument passed
#     return new_function

# @double_out
# def multiply(num1, num2):
#     return num1 * num2


# print(multiply(2, 3))

def type_check(correct_type):
    # put code here
    def type_check_generator(old_function):
        def new_function(arg):
            if type(arg) == correct_type:
                return old_function(arg)
            else:
                print('Bad Type')
        return new_function
    return type_check_generator


@type_check(int)
def times2(num):
    return num*2


print(times2(2))
times2('Not A Number')


@type_check(str)
def first_letter(word):
    return word[0]


print(first_letter('Hello World'))
first_letter(['Not', 'A', 'String'])
