import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { supabase } from '../config/supabase';

const Auth = createContext();

export const AuthProvider = ({ children }) => {

  const [ session, setSession ] = useState(null)
  const [ userId, setUserId ] = useState(null)
  const [ user, setUser ] = useState(null)

  useEffect(() => { 

    const getSession = async () => { 

        supabase.auth.getSession().then((data) => {
          
          setSession(data.data.session.access_token)
          setUserId(data.data.session.user.id)
          
          if ( userId ) {
            getUserInfo()
          }
          
        })

    }
    getSession()

  }, [session])
  
  const getUserInfo = async () => {
    const { data, error } = await supabase.from('users').select().eq('id', userId).single()
    setUser(data)

  }

  const value = {
    session,
    userId,
    user,
    setSession,
    setUserId,
    setUser,
    getUserInfo
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export const useAuthContext = () => {
    return useContext(Auth);
}