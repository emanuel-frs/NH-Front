import axios from 'axios';
import { API_URL } from '@env';

const baseURL = (typeof API_URL === 'string' && API_URL.startsWith('http')) 
  ? API_URL 
  : 'https://nh-quiz-c66e9683ec96.herokuapp.com';

const api = axios.create({ baseURL });

export const handleLogin = async (email: string, senha: string) => {
  try {
    const response = await api.post('usuario/login', { email, senha });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return null;
    }
    throw error;
  }
};

export const createUsuario = async (nome: string, email: string, senha: string, serie: string) => {
  try {
    const response = await api.post('/usuario', { nome, email, senha, serie });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

export const getMaterias = async () => {
  try {
    const response = await api.get('/materia');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar matérias:', error);
    throw error;
  }
};

export const getPerguntasByMateria = async (idMateria: number, serie: string, idUsuario: number) => {
  try {
    const response = await api.get(`/pergunta/nao-respondidas/${idMateria}/${serie}/${idUsuario}`);
    const questoesTransformadas = response.data.map((questao: any) => ({
      ...questao,
      idQuestao: questao.id
    }));
    return questoesTransformadas;
  } catch (error) {
    console.error('Erro ao buscar questões:', error);
    throw error;
  }
};

export const getMateriasByAno = async (ano: number) => {
  try {
    const response = await api.get(`materia/ano/${ano}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar matérias:', error);
    throw error;
  }
};

export const registrarAcerto = async (idUsuario: number, idPergunta: number, correta: boolean) => {
  try {
    const response = await api.post('/resposta', {
      usuario: { id: idUsuario },
      pergunta: { id: idPergunta },
      correta
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar acerto:', error);
    throw error;
  }
};

export const porcentagemAcertos = async (materiaId: number, serie: string, usuarioId: number) => {
  try {
    const response = await api.get(`/pergunta/porcentagem-acertos/${materiaId}/${serie}/${usuarioId}`);
    const porcentagemString = response.data;
    const porcentagem = parseFloat(porcentagemString);

    return isNaN(porcentagem) ? 0 : porcentagem;

  } catch (error) {
    console.error(`Erro ao buscar porcentagem da matéria ${materiaId}:`, error);
    return 0;
  }
};
