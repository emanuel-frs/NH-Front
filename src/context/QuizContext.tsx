import React, { createContext, useContext, useState, useCallback } from 'react';

type Questao = {
    id: number; 
    enunciado: string;
    opcaoA: string;
    opcaoB: string;
    opcaoC: string;
    opcaoD: string;
    respostaCorreta: string;
    materia?: { id: number, nome: string };
    serie?: string;
  };

type QuizContextType = {
  questoes: Questao[];
  setQuestoes: (questoes: Questao[]) => void;
  respostas: Record<number, boolean>;
  addResposta: (id: number, acertou: boolean) => void;
  resetQuiz: () => void;
  progresso: {
    atual: number;
    total: number;
  };
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [respostas, setRespostas] = useState<Record<number, boolean>>({});

  const addResposta = useCallback((idQuestao: number | string | undefined, acertou: boolean) => {
    if (!idQuestao) {
      console.warn('Tentativa de adicionar resposta sem ID, usando ID temporário');
      idQuestao = `temp-${Date.now()}`;
    }
    setRespostas(prev => ({ ...prev, [idQuestao]: acertou }));
  }, []);

  const resetQuiz = useCallback(() => {
    setQuestoes([]);
    setRespostas({});
  }, []);

  const progresso = {
    atual: Object.keys(respostas).length,
    total: questoes.length
  };

  return (
    <QuizContext.Provider 
      value={{ 
        questoes, 
        setQuestoes, 
        respostas, 
        addResposta, 
        resetQuiz,
        progresso
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};