import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSidebar } from './SidebarContext';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  serie: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  usuario: Usuario | null;
  login: (user: Usuario) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const { setSidebar } = useSidebar();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      const userData = await AsyncStorage.getItem('usuario');
      setIsLoggedIn(!!token);
      if (userData) setUsuario(JSON.parse(userData));
    };
    checkLogin();
  }, []);
  

  const login = async (user: Usuario) => {
    await AsyncStorage.setItem('token', 'meuTokenFake');
    await AsyncStorage.setItem('usuario', JSON.stringify(user));
    setUsuario(user);
    setIsLoggedIn(true);
  };
  
  const logout = async () => {
    setSidebar(false);
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('usuario');
    setUsuario(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve estar dentro de AuthProvider');
  return context;
};
