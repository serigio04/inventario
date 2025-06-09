import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { getUsuarios } from "../../services/userService";
import { Paper } from "@mui/material";


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
