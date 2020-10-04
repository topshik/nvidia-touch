import requests
from load_data import load, update_photo
from search import *

site_employees = 'http://localhost/api/employees/'
site_projects = 'http://localhost/api/projects/'

employees = requests.get(site_employees).json()["results"]
projects = requests.get(site_projects).json()["results"]

for project in projects[:]:
	project["members"] = [employee["url"] for employee in employees if project["url"] in employee["projects"]]
	print(requests.put(site_projects + project["url"].split('/')[-2] + "/", data=project).json())