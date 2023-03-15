# React Auth JWT

## Install React App

    Todo :
    1.  npx create-react-app frontend

## Install package

    Todo :
    1.  cd frontend : npm install axios react-router-dom --save

## Component untuk Login

    Todo :
    1.  components/Login.js
        - rcc : react class Component
        - membuat state yang menyimpan data object
        - buat handleChange
        - buat handle submit
        - buat sebuah form yang didaamnya terdapat input email dan password

    2.  App.js
        - import dan pasang Login

## Membuat context provider untuk auth

    Todo :
    1.  context/AuthContext.js

## Membuat function Login dan Logout

    Todo :
    1.  context/AuthContext.js
        - login
        - logout

## Consumer context di dalam higher order component

    Todo :
    1.  context/AuthContext.js
        - higher order component

## menggunakan HOC dan contect di component

    Todo :
    1.  components/Login.js
        - method login
        - import withAuth
        - bungkus Login dengan withAuth
    2.  context/AuthContext.js
        - rubah nama class menjadi AuthContextProvider
    3.  App.js
        - import dan pasang AuthContextProvider
    4.  jalankan server:
        cd backend : nodemon server.js
    5.  jalankan aplication:
        cd frontend : npm start
    6.  pengujian pada browser: http://localhost:3000
        - lakukan login sambil dibuka consolenya,
        - jika setup yang kita lakukan berhasil akan ada data yang isinya
          message,success, dan token
