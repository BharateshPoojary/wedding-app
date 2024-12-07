import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a Context for the user session
const UserSessionContext = createContext();

// Custom hook to use the UserSessionContext
export const useUserSession = () => {
  const context = useContext(UserSessionContext);
  if (!context) {
    throw new Error('useUserSession must be used within a UserSessionProvider');
  }
  return context;
};

// Provider component
export const UserSessionProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(undefined);

  useEffect(() => {
    // Load user session from AsyncStorage on component mount
    const loadUserSession = async () => {
      try {
        const sessionData = await AsyncStorage.getItem('userSession');
        if (sessionData) {
          setUserSession(JSON.parse(sessionData));
        } else {
          setUserSession(null); // If no session data found, set to null
        }
      } catch (error) {
        console.error('Failed to load user session', error);
        setUserSession(null); // In case of error, set to null
      }
    };

    loadUserSession();
  }, []);

  const saveUserSession = async (sessionData) => {
    try {
      await AsyncStorage.setItem('userSession', JSON.stringify(sessionData));
      setUserSession(sessionData);
    } catch (error) {
      console.error('Failed to save user session', error);
    }
  };

  const clearUserSession = async () => {
    try {
      await AsyncStorage.removeItem('userSession');
      setUserSession(null);
    } catch (error) {
      console.error('Failed to clear user session', error);
    }
  };

  return (
    <UserSessionContext.Provider value={{ userSession, saveUserSession, clearUserSession }}>
      {children}
    </UserSessionContext.Provider>
  );
};

export default UserSessionContext;