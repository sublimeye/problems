import itertools

models = ['Toyota', "Mazda"]
colors = ['White', "Red"]
sizes = [1, 2, 3, 4]

print "option 1"
products = [[model, color, size]
            for model in models for color in colors for size in sizes]
print(products)

print "option 2"
for e in itertools.product(models, colors, sizes):
    print(e)
