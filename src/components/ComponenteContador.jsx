import { useContador } from './EjemploContador';

function ComponenteContador() {
  const { contador, incrementar } = useContador(0, 1);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}