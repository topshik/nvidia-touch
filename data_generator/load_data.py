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


