import shutil
import requests

site = 'http://localhost/api/employees/'
file = open("Employees.csv")

def push(id, name, email, refers_to_id, project_name, position_name, skills):
	thispersondoesnotexist = 'https://thispersondoesnotexist.com/image'

	response = requests.get(thispersondoesnotexist, stream=True)
	with open('img.png', 'wb') as out_file:
	    shutil.copyfileobj(response.raw, out_file)
	del response

	with open('img.png', 'rb') as image:
		print(requests.post(site, files={'photo': image}, data={'name': name, 'email' : email, 'skills' : skills}).json())



data = []
for line in file.readlines():
	id, name, email, refers_to_id, project_name, position_name, _ = line.split("\"")[0].split(",")
	skills = line.split("\"")[1]
	data.append((id, name, email, refers_to_id, project_name, position_name, skills))


for (id, name, email, refers_to_id, project_name, position_name, skills) in data:
	push(id, name, email, refers_to_id, project_name, position_name, skills)


