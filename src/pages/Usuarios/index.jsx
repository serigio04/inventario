import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { getUsuarios } from "../../services/userService";
import { Paper } from "@mui/material";


const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'nombre', headerName: 'Nombre', width: 130},
    {field: 'apellido', headerName: 'Apellido', width: 130},
    {field: 'email', headerName: 'Email',type: 'email', width: 130},
    {field: 'rol', headerName: 'Rol', width: 130}
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

    return (
        <div>
            <Paper sx={{height: 400, width: "80%"}}>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={5}
                />
            </Paper>
        </div>
    )
}

export default UsuariosTable;
