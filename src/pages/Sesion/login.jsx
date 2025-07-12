import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Login } from '../../services/authService';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const loginForm = {
    maxWidth: "45%", 
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

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [passwrd, setPasswrd] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        try {
            const data = await Login(email, passwrd);
            console.log("Login exitoso", data);
            navigate("/productos"); 
        } catch (error) {
            setErrorMsg("Correo o contraseña inválidos");
            console.error("Error en login:", error);
        }
    };
    return <>
        <div style={loginForm}>
            <h2>Iniciar sesion</h2>
            <Box 
                component="form" 
                sx={{display:"flex", flexDirection: "column"}} 
                noValidate 
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField 
                    type='email'
                    name='email'
                    id="form-email" 
                    label="Email" 
                    variant="outlined" 
                    style={inputStyle}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    type='password'
                    name='passwrd'
                    id="form-password" 
                    label="Contraseña" 
                    variant="outlined" 
                    style={inputStyle}
                    required
                    value={passwrd}
                    onChange={(e) => setPasswrd(e.target.value)}
                />
                <Button
                    type='submit' 
                    variant="contained" 
                    style={buttonStyle}
                >
                    Iniciar sesion
                </Button>
            </Box>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        </div>
    </>  
}

export default LoginForm;