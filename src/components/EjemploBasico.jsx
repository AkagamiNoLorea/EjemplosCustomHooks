import { useState, useEffect } from 'react';

function useCustomHook() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Lógica personalizada aquí
        // Puede incluir la lógica de solicitud HTTP, manipulación de datos, etc.

        // Actualizar el estado con los datos obtenidos
        setData(dataFromAPI);
    }, []);

    return data;
}
//En este ejemplo, el custom hook llamado useCustomHook utiliza useState y useEffect 
//para realizar alguna lógica personalizada y obtener datos de una API.
//Luego, esos datos se devuelven como resultado del hook y se pueden utilizar en el componente MyComponent.
function MyComponent() {
    const customData = useCustomHook();

    return (
        <div>
            {/* Utilizar los datos obtenidos del custom hook */}
            {customData && <p>{customData}</p>}
        </div>
    );
}