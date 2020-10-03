import shutil
import requests
from load_data import load, update_photo

site = 'http://localhost/api/employees/'

data = load()

def push(id, name, email, refers_to_id, project_name, position_name, skills):
	update_photo()

	with open('img.png', 'rb') as image:
		print(requests.post(site, files={'photo': image}, data={'name': name, 'email' : email, 'skills' : skills}).json())



print(data)

# for (id, name, email, refers_to_id, project_name, position_name, skills) in data:
# 	push(id, name, email, refers_to_id, project_name, position_name, skills)


