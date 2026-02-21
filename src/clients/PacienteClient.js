import axios from "axios";

const URL = 'http://localhost:8086/recuperacion/api/v1.0/Pacientes';

const listarTodos = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${URL}`, { headers: { Authorization: `Bearer ${token}` } }).then(r => r.data);
    return res;
}

export const listarTodosFachada = async () => {
    return await listarTodos();
}