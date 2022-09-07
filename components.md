Button
-recibe: texto que sera su contenido
-muestra: el texto recibido
-acciones del usuario: clickear para que suceda un evento
-estado: no tiene

RegisterForm:
-recibe: nada
-muestra: un conjunto de inputs y un boton,
-acciones del usuario: rellenar el contenido de los inputs y submitear en el click del boton
-estado: anade al objeto usuario lo ingresado en los inputs

LoginForm:
-recibe: nada
-muestra: un conjunto de dos inputs y un boto
-acciones del usuario: rellenar el contenido de los inputs y enviar el login en el click del boton
-estado: añade al objecto usuario login el valor ingresado en los inputs

Header
-recibe: nada
-muestra: un titulo y si se esta logeado el icono para deslogearte
-acciones del usuario: si esta logueado deslogearse con click en el icono
-estado: recibe un estado de log in

Modal
-recibe: nada
-muestra: un modal de success si la request fue correcta en su defecto de error
-acciones del usuario: cerrar el modal
-estado: recibe un estado si esta abierto y con que texto
