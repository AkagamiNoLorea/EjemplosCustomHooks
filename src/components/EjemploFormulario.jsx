import { useState } from 'react';

function useFormularioInicial(valoresIniciales, validar) {
    const [valores, setValores] = useState(valoresIniciales);
    const [errores, setErrores] = useState({});
    const [tocado, setTocado] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setValores({
            ...valores,
            [name]: value
        });
    };

    const handleBlur = event => {
        const { name } = event.target;
        setTocado({
            ...tocado,
            [name]: true
        });

        // Validar el campo al tocar y actualizar el estado de errores
        const error = validar[name](valores[name]);
        setErrores({
            ...errores,
            [name]: error
        });
    };

    return { valores, errores, tocado, handleChange, handleBlur };
}
//En este ejemplo, useFormularioInicial es un custom hook que encapsula la lógica de manejo de formularios y validación. 