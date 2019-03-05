import unittest

myname = "Roman"
yourname = "Sasha"


def some(name):
    print(name)
    print("another line")
    print("one more line")

# class TestMethods(unittest.TestCase):
#     def test_some(self):
#         self.assertEqual("Roman", "Roman")


# if __name__ == '__main__':
#     unittest.main()


def myfunction(one, two, three):
    print "Print It", one, two, three
    print '{one} is here for {you}'.format(one="Me", you="YouAnd")


myfunction('it', 'is', 'me')
print('huh')
