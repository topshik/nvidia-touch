import os

import hydra
from omegaconf import DictConfig
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello, World!"


@hydra.main(f'{os.getcwd()}/config/main.yaml')
def main(cfg: DictConfig):
    os.chdir(hydra.utils.get_original_cwd())
    app.run(cfg.HOST, cfg.PORT, threaded=True, processes=1)


if __name__ == '__main__':
    main()
