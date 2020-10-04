import shutil
import requests

def load():
	with open("Employees.csv") as file:
		data = []
		for line in file.readlines():
			id, name, email, refers_to_id, project_name, position_name, _ = line.split("\"")[0].split(",")
			skills = line.split("\"")[1]
			data.append((id, name, email, refers_to_id, project_name, position_name, skills))
	return data


def load_urls():
	with open("data_generator/websites.txt") as file:
		return file.readlines()

def update_photo():
	thispersondoesnotexist = 'https://thispersondoesnotexist.com/image'

	response = requests.get(thispersondoesnotexist, stream=True)
	with open('img.png', 'wb') as out_file:
	    shutil.copyfileobj(response.raw, out_file)
	del response
