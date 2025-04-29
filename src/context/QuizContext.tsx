import React, { createContext, useContext, useState, useCallback } from 'react';

type Questao = {
  idQuestao: number;
  enunciado: string;
  opcaoA: string;
  opcaoB: string;
  opcaoC: string;
  opcaoD: string;
  opcaoCerta: string;
};

type QuizContextType = {
  questoes: Questao[];
  setQuestoes: (questoes: Questao[]) => void;
  respostas: Record<number, boolean>;
  addResposta: (idQuestao: number, acertou: boolean) => void;
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

  const addResposta = useCallback((idQuestao: number, acertou: boolean) => {
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