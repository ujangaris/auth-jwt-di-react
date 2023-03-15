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

## Halaman Profile saat berhasil login

    Todo :
    1.  components/Profile.js
        - membuat halaman profile
    2.  App.js
        - import dan pasang {BrowserRouter, Routes, Route}
        - import dan pasang Profile
    3.  AuthContext.js
        - lakukan penambahan code pada login
        - redirect halaman profile jika success login
    4.  pengujian pada browser:
        - http://localhost:3000
        - lakukan login dengan user yang terdaftar
        - jika berhasil akan redirect ke halaman profile
        - dan datanya tampil

## Halaman hanya dapat diakses setelah Login

    Todo :
    1.  components/ProtectedRoute.js
    2.  App.js
        - import dan pasang ProtectedRoute

    3.  component/Login.js
        - import dan pasang Navigate dari react-router-dom
          untuk proteksi halaman ketika sudah login
          (halaman login tidak bisa diakses dan akan diredirect kehalaman /profile)
    4.  context/AuthContext.js
        - pada bagian user localStorage rubah dari object menjadi string
    5.  components/Profile.js
        - rubah props menjadi user
    6.  pengujian pada browser:
        - http://localhost:3000
        - lakukan login dengan user yang terdaftar
        - jika berhasil akan redirect ke halaman profile
        - dan datanya tampil
        - jika sudah login tidak bisa akses halaman login
        - jika belum login tidak bisa akses halaman profile

## Akses endpoint dengan token

    Todo :
    1.  context/AuthContext.js
        - configurasi untuk axios
        - merubah dari user ke token untuk data localStorage
    2.  component/Profile.js
        - merubah function component menjadi class component
        - memasang componentDidMount
    3.  pengujian pada browser:
        - http://localhost:3000
        - lakukan login dengan user yang terdaftar
        - jika berhasil akan redirect ke halaman profile
        - dan datanya tampil
        - jika sudah login tidak bisa akses halaman login
        - jika belum login tidak bisa akses halaman profile

## Logout react auth

    Todo :
    1.  components/StatusButton.js
        - functioinal component StatusButton
    2.  component/profile.js
        - import dan pasang StatusButton
    3.  pengujian pada browser:
        - http://localhost:3000
        - lakukan login dengan user yang terdaftar
        - jika berhasil akan redirect ke halaman profile
        - dan datanya tampil
        - jika sudah login tidak bisa akses halaman login
        - jika belum login tidak bisa akses halaman profile
        - klik button logout, jika setup yang kita lakukan berhasil
          maka akan diredirect ke halaman login.
