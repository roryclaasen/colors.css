import urllib.request
import yaml
import os

prefix = ".gh-"
background = "bc"
color = "c"

replace_names = {
    'C++': 'cpp',
    'Objective-C++': 'Objective-Cpp',
    'C#': 'C Sharp',
    'F#': 'F Sharp',
}

urllib.request.urlretrieve("https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml", "languages.yml")

with open("languages.yml") as f:
    colors = yaml.load(f)
os.remove('languages.yml')

colors = dict((replace_names.get(name, name), color['color']) for name, color in colors.items() if 'color' in color)

f =  open('colors.css', 'w')
for key, value in colors.items():
    f.write(prefix + background + "-" + key.replace(" ", "-") + " { background-color:" + value + "; }\n")
    f.write(prefix + color + "-" + key.replace(" ", "-") + " { color:" + value + "; }\n")
f.close()
