import { api } from './api';

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

export const createTodolist = async (data) => {
    try {
        return await api.post('/todolists', data, { headers: getAuthHeaders() })
    } catch (error) {
        console.log('Api createTodolist error', error);
        throw error;
    }
};

export const getAllTodolists = async () => {
    try {
        return await api.get('/todolists', { headers: getAuthHeaders() })
    } catch (error) {
        console.log('Api getAllTodolists error', error);
        throw error;
    }
};

export const deleteTodolist = async (id) => {
    try {
        return await api.delete(`/todolists/${id}`, { headers: getAuthHeaders() })
    } catch (error) {
        console.log('Api deleTodolist error', error);
        throw error;
    }
}