import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "@mui/material";
import { getProductos } from "../../services/productService";

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'nombre', headerName: 'Nombre', minWidth: 300},
    {field: 'cantidad', headerName: 'Cantidad', width: 100},
    {field: 'descripcion', headerName: 'Descripcion', width: 400},
    {field: 'updated_at', headerName: 'Fecha actualizacion', width: 200},
    {field: 'acciones', headerName: 'Acciones', width: 100}, 
];

const Productos = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const data =  await getProductos();
            setRows(data);
        };
        fetchProductos();
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Paper sx={{height: 400, width: "80%", padding: '1%'}}>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSizeOptions={[5, 10]}
                />
            </Paper>
        </div>
    )
}

export default Productos;