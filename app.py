import os

import hydra
from omegaconf import DictConfig
from flask import Flask

app = Flask(__name__, template_folder="templates")


@app.route('/')
@app.route('/search', methods=['GET'])
def get_search_page():
    return f"Search page"


@app.route('/profile/id<int:user_id>', methods=['GET'])
def get_profile(user_id: int):
    return f"Profile {user_id}"


@app.route('/project/id<int:project_id>', methods=['GET'])
def get_project(project_id: int):
    return f"Project {project_id}"


@hydra.main(config_name='config/main.yaml')
def main(cfg: DictConfig):
    os.chdir(hydra.utils.get_original_cwd())
    app.run("0.0.0.0", cfg.app.port, threaded=True, processes=1)


if __name__ == '__main__':
    main()
