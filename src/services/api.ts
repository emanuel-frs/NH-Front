import axios from 'axios';

const API_URL = process.env.API_URL || //'http://192.168.1.3:8080';  
'http://172.16.3.220:8080';

const api = axios.create({
  baseURL: API_URL,
});

export const getMaterias = async () => {
    try {
        const response = await api.get('/materia');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar matérias:', error);
        throw error;
    }
};

export const getQuestoesByMateria = async (id: number) => {
    try {
        const response = await api.get(`/questao/materia/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar questões:', error);
        throw error;
    }
};

export const getMateriasByAno = async (ano: number) => {
    try {
        const response = await api.get(`materia/ano/${ano}`);
        return response.data
    } catch (error) {
        console.error('Erro ao buscar matérias:', error);
        throw error;
    }
}

  