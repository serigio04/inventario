import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const loginForm = {
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

const LoginForm = () => {
    return <>
        <div style={loginForm}>
            <h2>Iniciar sesion</h2>
            <Box component="form" sx={{display:"flex", flexDirection: "column"}} noValidate autoComplete="off">
                <TextField id="form-email" label="Email" variant="outlined" style={inputStyle}/>
                <TextField id="form-password" label="Contraseña" variant="outlined" style={inputStyle}  />
            </Box>
            <Button variant="contained" style={buttonStyle}>Iniciar sesion</Button>
        </div>
    </>  
}

export default LoginForm;