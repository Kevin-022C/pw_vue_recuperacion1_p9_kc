import axios from "axios";

const URL = 'http://localhost:8082/auth/token';

const generarToken = async (user, password) => {
    const res = await axios.get(`${URL}?user=${user}&password=${password}`);
    return res;
}

export const generarTokenFachada = async (user, password) => {
    return await generarToken(user, password);
}