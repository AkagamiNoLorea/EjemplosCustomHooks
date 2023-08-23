import { useState, useEffect } from 'react';

function useContador(valorInicial, paso) {//creamos un custom hook que lo llamamos Contador
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    setContador(contador + paso);
  };

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return { contador, incrementar };
}//aqui acaba el custom hook
//En este ejemplo, useContador es un custom hook que encapsula la lógica de contar y actualizar el título del documento.
//Luego, en ComponenteContador (otro archivo), se utiliza este custom hook para manejar el estado del contador y su incremento.





