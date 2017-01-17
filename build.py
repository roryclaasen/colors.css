import urllib.request
import yaml
import os

prefix = "gh"
background = "-bg"
color = ""

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

if not os.path.exists('dist'):
    os.makedirs('dist')

with open('dist/colors.min.css', 'w') as f:
    for key, value in colors.items():
        f.write("." + prefix + background + "-" + key.replace(" ", "-").lower() + "{background-color:" + value + "!important;}")
        f.write("." + prefix + color + "-" + key.replace(" ", "-").lower() + "{color:" + value + "!important;}")

with open('dist/colors.less', 'w') as f:
    for key, value in colors.items():
        f.write("@" + prefix + "-" + key.replace(" ", "-").lower() + ": " + value + ";\n")

with open('dist/colors.scss', 'w') as f:
    for key, value in colors.items():
        f.write("$" + prefix + "-" + key.replace(" ", "-").lower() + ": " + value + ";\n")


template = "# colors.css"
with open('readmetemplate.md', 'r') as f:
    template = f.read()

with open('README.md', 'w') as f:
    f.write(template)
    f.write('\n## Colors\n')
    color_strings = ('![color](http://www.placehold.it/150/%s/ffffff&text=%s)' % (v[1:].lower(), k) for k, v in colors.items())
    f.write('\n'.join(sorted(color_strings)))
