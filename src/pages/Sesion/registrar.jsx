import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { crearUsuario } from '../../services/userService';

// Estilos
const registrarFromStyles = {
    maxWidth: "70%", 
    display: "flex", 
    justifyContent: "center", 
    alignContent: "center", 
    flexDirection: "column",
    margin: "auto",
    border: "1px solid grey",
    borderRadius: "10px",
    padding: "3%",
    marginTop: "5vh"
}

const inputStyle = {
    margin: "3vh 0"
}

const buttonStyle = {
    margin: "2.3vh 0",
    padding: "1.5%",
    maxWidth: "30%"
}

const RegistrarForm = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        passwrd:'',
        rol: 'cajero'
    });

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await crearUsuario(usuario);
        alert('Usuario creado exitosamente');
        console.log("Usuario creado: ", usuario)
    }

    return <>
        <div style={registrarFromStyles}>
            <h2>Formulario de registro</h2>
            <Box 
                component="form" 
                sx={{display:"flex", flexDirection: "column"}} 
                noValidate autoComplete="off" 
                onSubmit={handleSubmit}
            >
                <TextField 
                    id="form-nombre" 
                    label="Nombre"
                    name='nombre' 
                    variant="outlined" 
                    style={inputStyle} 
                    onChange={handleChange}
                />
                <TextField 
                    id="form-apellido" 
                    label="Apellido" 
                    name='apellido'
                    variant="outlined" 
                    style={inputStyle} 
                    onChange={handleChange} 
                />
                <TextField 
                    id="form-email" 
                    label="Email"
                    name='email' 
                    variant="outlined" 
                    style={inputStyle} 
                    onChange={handleChange} 
                />
                <TextField 
                    id="form-password" 
                    label="Contraseña"
                    name='passwrd' 
                    variant="outlined" 
                    style={inputStyle} 
                    onChange={handleChange} 
                />
                <Button 
                    variant="contained" 
                    type='submit'
                    style={buttonStyle}
                >Registrar
                </Button>
            </Box>
        </div>
    </>  
}

export default RegistrarForm;