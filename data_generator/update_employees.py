import requests
from load_data import load, update_photo
from search import *

site = 'http://localhost/api/employees/'

data = load()

for person in requests.get(site).json()["results"]:
	person["refers_to"] = [find_person_url_by_email(search_by_data_id(search_by_email(person["email"])[3])[2])] 

	person["projects"] = [find_project_url_by_name(search_by_data_id(search_by_email(person["email"])[3])[4])]

	update_photo()

	id = person["url"].split('/')[-2]
	with open('img.png', 'rb') as image:
		print(requests.put(site + id + '/', files={'photo': image}, data=person).json())