# NVIDIA touch

![CD](https://github.com/topshik/nvidia-touch/workflows/CD/badge.svg)

Internal network for NVIDIA employees
---
Backend API is written in Django and located in the folder `touch`, you can start it using:
```
pip install -r requirements.txt
python touch/manage.oy runserver 0.0.0.0:443
```

Frontend (site itself) is written in React and its source code is located in `nvidia-touch-frontend` and can be started using:
```
cd nvidia-touch-frontend
npm install
sudo npm start
```

Tech stack slides:
![Tech](https://i.ibb.co/sbRmkzr/slide.jpg)
