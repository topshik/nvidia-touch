import shutil
import requests
from load_data import load

site = 'http://localhost/api/employees/'

data = load()

def push(id, name, email, refers_to_id, project_name, position_name, skills):
	thispersondoesnotexist = 'https://thispersondoesnotexist.com/image'

	response = requests.get(thispersondoesnotexist, stream=True)
	with open('img.png', 'wb') as out_file:
	    shutil.copyfileobj(response.raw, out_file)
	del response

	with open('img.png', 'rb') as image:
		print(requests.post(site, files={'photo': image}, data={'name': name, 'email' : email, 'skills' : skills}).json())



print(data)

# for (id, name, email, refers_to_id, project_name, position_name, skills) in data:
# 	push(id, name, email, refers_to_id, project_name, position_name, skills)


