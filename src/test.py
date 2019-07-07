class Person:
    JUMP = 100

    def __init__(self):
        self.jumping = Person.JUMP


p = Person()
print p.jumping
