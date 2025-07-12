import {api} from "./api";

export const Login = async (email, password) => {
  try {
    const response = await api.post("/usuarios/login", { email, password });
    const { token } = response.data;

    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};
