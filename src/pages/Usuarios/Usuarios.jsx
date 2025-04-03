import React, {useEffect, useState} from "react";
import { getUsuarios } from "../../services/userService";

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios().then((data) => setUsuarios(data))
    }, []);
    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;
