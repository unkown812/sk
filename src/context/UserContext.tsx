import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../lib/supabase';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing session on app start
    const checkSession = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('sk_tutorials_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error loading user session:', error);
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const loggedInUser: User = {
          id: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.email || '',
          email: session.user.email || '',
          role: session.user.user_metadata?.role || 'user',
        };
        setUser(loggedInUser);
        await AsyncStorage.setItem('sk_tutorials_user', JSON.stringify(loggedInUser));
      } else {
        setUser(null);
        await AsyncStorage.removeItem('sk_tutorials_user');
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error.message);
        return false;
      }

      if (data.user) {
        const loggedInUser: User = {
          id: data.user.id,
          name: data.user.user_metadata?.full_name || data.user.email || '',
          email: data.user.email || '',
          role: data.user.user_metadata?.role || 'user',
        };
        setUser(loggedInUser);
        await AsyncStorage.setItem('sk_tutorials_user', JSON.stringify(loggedInUser));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
    setUser(null);
    await AsyncStorage.removeItem('sk_tutorials_user');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};