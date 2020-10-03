from load_data import load
import requests

site = 'http://localhost/api/employees/'
site_project = 'http://localhost/api/projects/'

data = load()

def search_by_email(email_in):
	for (id, name, email, refers_to_id, project_name, position_name, skills) in data:
		if email_in == email:
			return (id, name, email, refers_to_id, project_name, position_name, skills)

def search_by_data_id(data_id):
	for (id, name, email, refers_to_id, project_name, position_name, skills) in data:
		if data_id == id:
			return (id, name, email, refers_to_id, project_name, position_name, skills)

def find_person_url_by_email(email_in):
	for person in requests.get(site).json()["results"]:
		if person["email"] == email_in:
			return person["url"]

def find_project_url_by_name(name_in):
	for person in requests.get(site_project).json()["results"]:
		if person["name"] == name_in:
			return person["url"]
