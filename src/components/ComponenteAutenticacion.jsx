function ComponenteAutenticacion() {
    const { usuario, estaAutenticado, iniciarSesion, cerrarSesion } = useAutenticacion();
  
    if (estaAutenticado) {
      return (
        <div>
          <p>Bienvenido, {usuario}!</p>
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Inicia sesión para acceder</p>
          <button onClick={() => iniciarSesion('usuario', 'contraseña123')}>Iniciar Sesión</button>
        </div>
      );
    }
  }
//En el ComponenteAutenticacion, se utiliza este custom hook para manejar el estado de autenticación 
//y mostrar el contenido apropiado según si el usuario está autenticado o no.
//Esto permite crear fácilmente sistemas de autenticación en diferentes partes de tu aplicación.