import {api} from "./api";

export const getUsuarios = async () => {
    try{
        const response = await api.get("/usuarios");
        return response.data;
    } catch (error){
        console.error("Error obteniendo usuarios: ", error);
        return [];
    }
}