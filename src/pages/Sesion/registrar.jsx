import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { crearUsuario } from '../../services/userService';
import { Link } from 'react-router-dom';

// Estilos
const registrarFromStyles = {
    maxWidth: "60%", 
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
    margin: "2.3vh 1.6vw 0 0",
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
        try{
            await crearUsuario(usuario);
            alert('Usuario creado exitosamente');
            console.log("Usuario creado: ", usuario)
        } catch (error) {
            if(error.response?.data?.error){
                alert("Error: " + error.response.data.error)
            } else {
                alert("Existe un usuario con el correo registrado. Intenta con otro")
            }
        }
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
                <div style={{display:"flex", flexDirection:"row"}}>
                    <Button 
                        variant="contained" 
                        type='submit'
                        style={buttonStyle}
                    >
                        Registrar
                    </Button>
                    <Button
                        variant="outlined" 
                        style={buttonStyle}
                        component={Link}
                        to="/usuarios"
                    >
                        Cancelar
                    </Button>
                </div>
            </Box>
        </div>
    </>  
}

export default RegistrarForm;