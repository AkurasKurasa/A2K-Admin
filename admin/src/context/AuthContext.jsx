import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { supabase } from '../config/supabase';

const Auth = createContext();

export const AuthProvider = ({ children }) => {

  const [ user, setUser ] = useState(null);
  const [ session, setSession ] = useState(null)

  useEffect(() => {

    supabase.auth.getSession()
    .then((auth) => {
      console.log(auth)
      if(auth.data.session) {
        setUser(auth.data.session.user)
      } else {
        setUser(null)
      }
    })

    const test = async () => {
      const { data, error } = await supabase.from('users').select().eq('id', '0cc6dfe9-8915-46b0-a098-8ae88f118bd1')
      console.log(data)
    }

    test()

  }, [])
  

  const value = {
    user,
    setUser,
    session,
    setSession
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export const useAuthContext = () => {
    return useContext(Auth);
}