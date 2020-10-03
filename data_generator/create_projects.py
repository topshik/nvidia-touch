import requests
import lorem
import random

from load_data import load, load_urls
from search import *


site = 'http://localhost/api/projects/'

data = load()
websites = load_urls()

project_names = list(set(list(zip(*data))[4]))

def st(integer):
	return lorem.text()[:integer]

print(random.choice(websites))

for name in project_names:
	print(requests.post(site, data={'name': name, 'description' : lorem.paragraph()[:1000], 'link' : "http://www." + random.choice(websites), 'open_positions': lorem.sentence()[:200]}).json())