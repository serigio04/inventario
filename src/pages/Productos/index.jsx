import { useState, useEffect } from "react";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "@mui/material";
import { getProductos } from "../../services/productService";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
        <Stack spacing={2} direction="row">
            <Button variant="contained" >
                Descargar
            </Button>
        </Stack>
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '3vh'}}>
            <Paper sx={{height: "77vh", width: "80%", padding: '1%'}}>
                <DataGrid 
                    rows={rows} 
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }} 
                    pageSizeOptions={[5, 10]}
                />
            </Paper>
        </div>
        </div>
    )
}

export default Productos;