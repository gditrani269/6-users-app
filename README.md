# React + Vite
clonar el proyecto
dentro de la carpeta del proyecto ejecutar 
npm install

Agregar bootstrap
en el index.html agregar la linea:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

Este proyecto necesita algunas instalaciones como:
+-- @types/react-dom@18.2.24
+-- @types/react@18.2.74
+-- @vitejs/plugin-react@4.2.1
+-- eslint-plugin-react-hooks@4.6.0
+-- eslint-plugin-react-refresh@0.4.6
+-- eslint-plugin-react@7.34.1
+-- eslint@8.57.0
+-- react-dom@18.2.0
+-- react-router-dom@6.22.3
+-- react@18.2.0
+-- sweetalert2@11.10.7
`-- vite@5.2.8

instalar con
npm install sweetalert2 y demas necesarias

Se puede ver la parte de Contexto en React en:
https://es.react.dev/learn/scaling-up-with-reducer-and-context
https://es.react.dev/reference/react/createContext
https://es.react.dev/reference/react/useContext

Instalar Axios:
https://axios-http.com/docs/intro

npm install axios

para la seccion 15- clase 189 es necesario renombrar las unique key de la tabla users, de la siguiente manera, primero obtenemos los nombres de los indices con:
show index in users;
ahora renombrando los indices de las columnas email y username con los comandos (suponiendo que los indices se llamen asi):
	alter table users rename index UK_r43af9ap4edm43mmtq01oddj6 to UK_username;
	alter table users rename index UK_6dotkott2kjsp8vw4d0m25fb7 to UK_email;

------------------------------------------------

clase 247
REDUX
https://redux-toolkit.js.org/introduction/getting-started

para agregar a una aplicacion existente
instalar el redux toolkit
npm install @reduxjs/toolkit

onstalar el redux para react
npm install react-redux

para crear una app desde cero
npx create-next-app --example with-redux my-app

En el navegador agregar el complemento: Redux devTools
----------------------------------------------


