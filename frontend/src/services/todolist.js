import { api } from './api';

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

export const createTodolist = (data) => api.post('/todolists', data, { headers: getAuthHeaders() });

export const getAllTodolists = () => api.get('/todolist', { headers: getAuthHeaders() });

export const deleteTodolists = (id) => api.delete(`/todolists/${id}`, { headers: getAuthHeaders() })