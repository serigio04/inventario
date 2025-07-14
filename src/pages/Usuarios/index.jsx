import { useState, useEffect, React } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { getUsuarios } from "../../services/userService";
import { Button, Paper } from "@mui/material";

const buttonStyle = {
    margin: "2.3vh 0",
    padding: "1%",
    maxWidth: "20%"
}

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'nombre', headerName: 'Nombre', width: 130},
    {field: 'apellido', headerName: 'Apellido', width: 130},
    {field: 'email', headerName: 'Email', width: 220},
    {field: 'rol', headerName: 'Rol', width: 130},
    {field: 'fecha', headerName: 'Fecha actualizacion', width: 200},
    {field: 'acciones', headerName: 'Acciones', width:100}
];

const UsuariosTable = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const data = await getUsuarios();
            setRows(data);
        };
        fetchUsuarios();
    }, []);

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '3vh'}}>
            <Paper sx={{height: 400, width: "80%", padding: '1%'}}>
                <Button 
                    variant="contained" 
                    style={buttonStyle}
                    component={Link}
                    to="/registrar"
                >
                    Agregar usuario
                </Button>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                />
            </Paper>
        </div>
    )
}

export default UsuariosTable;
