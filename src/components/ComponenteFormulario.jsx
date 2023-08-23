function ComponenteFormulario() {
    const valoresIniciales = {
        nombre: '',
        correo: '',
        contraseña: ''
    };

    const validarCampos = {
        nombre: valor => {
            if (!valor) {
                return 'Este campo es requerido';
            }
            return '';
        },
        correo: valor => {
            if (!valor) {
                return 'Este campo es requerido';
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
                return 'El correo electrónico no es válido';
            }
            return '';
        },
        contraseña: valor => {
            if (!valor) {
                return 'Este campo es requerido';
            }
            if (valor.length < 6) {
                return 'La contraseña debe tener al menos 6 caracteres';
            }
            return '';
        }
    };

    const { valores, errores, tocado, handleChange, handleBlur } = useFormularioInicial(
        valoresIniciales,
        validarCampos
    );

    return (
        <div>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={valores.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {tocado.nombre && errores.nombre && <p>{errores.nombre}</p>}

            <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={valores.correo}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {tocado.correo && errores.correo && <p>{errores.correo}</p>}

            <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                value={valores.contraseña}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {tocado.contraseña && errores.contraseña && <p>{errores.contraseña}</p>}
        </div>
    );
}

//En ComponenteFormulario, se utiliza este custom hook para manejar el estado del formulario,
//sus valores, errores y toques, así como los eventos de cambio y desenfoque.
//Esto facilita la creación de formularios con validación en diferentes partes de tu aplicación.