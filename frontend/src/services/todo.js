import { api } from './api';

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
};

export const createTodo = async (todolist_id, data) => {
    try {
        return await api.post(`/todolists/${todolist_id}/todos`, data, { headers: getAuthHeaders() })
    }
    catch (error) {
        console.log('Api createTodo error', error);
        throw error;
    }
};

export const getAllTodos = async (todolist_id) => {
    try {
        return await api.get(`/todolists/${todolist_id}/todos`, { headers: getAuthHeaders() })
    } catch (error) {
        console.log('Api getAllTodos error', error);
        throw error;
    }
}

export const checkTodo = async (todolist_id, todo_id) => {
    try {
        return await api.put(`/todolists/${todolist_id}/todos/${todo_id}`, {}, { headers: getAuthHeaders() })
    } catch (error) {
        console.log('Api checkTodo error', error);
        throw error;
    }
}

export const deleteTodo = async (todolist_id, todo_id) => {
    try {
        return await api.delete(`/todolists/${todolist_id}/todos/${todo_id}`, { headers: getAuthHeaders() })
    } catch (error) {
        console.log('Api deleteTodo error', error);
        throw error;
    }
}