set -e

sudo rm -rf nvidia-touch
git clone git@github.com:topshik/nvidia-touch.git
cd nvidia-touch
sudo kill $(pidof python) || :
sudo kill $(pidof screen) || :
#tmux kill-server
#tmux start-server

#conda activate web
#sudo python touch/manage.py runserver 0.0.0.0:443 &
#disown %%

#cd nvidia-touch-frontend/
#sudo npm start &
#disown %%

#tmux new -d -s back
#tmux send-keys -t back C-z 'conda activate web' Enter
#tmux send-keys -t back C-z 'sudo /home/semenkin.anton/anaconda3/envs/web/bin/python touch/manage.py runserver 0.0.0.0:443' Enter
#
#cd nvidia-touch-frontend/
#sudo npm install
#tmux new -d -s main
#tmux send-keys -t main C-z 'sudo npm start' Enter

#screen -d -m bash -c 'conda activate web && sudo /home/semenkin.anton/anaconda3/envs/web/bin/python touch/manage.py runserver 0.0.0.0:443'

source ~/.bashrc

conda activate web
sudo /home/semenkin.anton/anaconda3/envs/web/bin/python touch/manage.py runserver 0.0.0.0:443 &
disown %%

cd nvidia-touch-frontend/
sudo npm install
screen -d -m bash -c 'sudo npm start'



echo ALL STARTED
