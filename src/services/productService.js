import {api} from "./api";

export const getProductos =  async () => {
    try{
        const response = await api.get("/productos");
        return response.data;
    } catch (error){
        console.log("Error obteniendo productos: ", error);
        return [];
    }
}