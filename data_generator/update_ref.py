import requests
from load_data import load
from search import *

site = 'http://localhost/api/employees/'

data = load()

for person in requests.get(site).json()["results"]:
	person["refers_to"] = [find_person_url_by_email(search_by_data_id(search_by_email(person["email"])[3])[2])] 
	person["photo"] = None

	id = person["url"].split('/')[-2]

	print(requests.put(site + id + '/', data=person).json())