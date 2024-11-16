# Practica: Consumo de APIS
# Alumno: Perez Barrios Diego

Primero cree un nuevo proyecto.
ng new consumo-api-PBDiego
![image](https://github.com/user-attachments/assets/7004d113-ec8c-4402-9ed0-98d8aeb35c04)


Cree el servicio:
ng generate service services/users
![image](https://github.com/user-attachments/assets/5456f8d8-aa7d-4a50-a0b3-99d5127feea0)

En services puse la direccion de la API que se va a consultar
![image](https://github.com/user-attachments/assets/d509530b-3b80-495c-8945-0e83325f2257)

¿Qué hace el método getUsers en este servicio?
El metodo getUsers realiza una solicitud HTTP get a la API de la escuela devolviendo los datos en este caso la lista de los usuarios.

Configure el HttpClientModule:
![image](https://github.com/user-attachments/assets/d395c269-ae15-428b-b78a-39e40b1b8a63)

¿Por qué es necesario importar HttpClientModule?
El module de HttpClientModule es el que realiza las solicitudes a la API sin el no se podria realizar las consultas.

De ahi cree el componente de la tabla de usuarios
![image](https://github.com/user-attachments/assets/dff676cd-1e0f-4de5-9f80-37ae72d69024)
![image](https://github.com/user-attachments/assets/ba29a971-0b7b-40fd-802e-8dd936053bfe)

¿Qué función cumple el método ngOnInit en el componente UserListComponent?
En un ciclo que empieza despues de que angular inicia los componentes y la aplicacion, obteniendo asi los usuarios de la API.

Realice la vista para mostrar los datos en la tabla
![image](https://github.com/user-attachments/assets/5c651634-9b7d-412b-a457-70bb9baeaa56)

¿Para qué sirve el bucle *ngFor en Angular? Explica cómo se utiliza en este ejemplo.
Angular lo utiliza para iterar en una coleccion de datos en nuestro caso recorre los usuarios.

Y ya al final se integro el componente en el app.component.html para poder visualizarlo en la pantalla principal
![image](https://github.com/user-attachments/assets/953e0f57-cb2e-4be6-94c4-2a4886ee5977)

Y despues de unos componentes en el CSS el resultado de nuestra tabla conusmiendo APIS de terceros quedo asi:
![image](https://github.com/user-attachments/assets/44003148-8d65-4e0e-ae5f-eb739145fd21)
