import { useState } from 'react';

function useAutenticacion() {
  const [usuario, setUsuario] = useState(null);
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  const iniciarSesion = (nombreUsuario, contraseña) => {
    // Simulación de lógica de autenticación
    if (nombreUsuario === 'usuario' && contraseña === 'contraseña123') {
      setUsuario(nombreUsuario);
      setEstaAutenticado(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    setEstaAutenticado(false);
  };

  return { usuario, estaAutenticado, iniciarSesion, cerrarSesion };
}
//En este ejemplo, useAutenticacion es un custom hook que encapsula la
//lógica de autenticación, incluyendo la capacidad de iniciar y cerrar sesión.