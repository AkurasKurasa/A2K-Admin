import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { supabase } from '../config/supabase';

const Auth = createContext();

export const AuthProvider = ({ children }) => {

  const [ session, setSession ] = useState(null)
  const [ user, setUser ] = useState(null)
  const [ userData, setUserData ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => { 

    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if ( error ) throw error
      setUser(data.session?.user)
      setSession(data.session)
      setLoading(false)
      if (user) { console.log(user) }
    }

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user)
      setLoading(false)
    })

    getSession()

    return () => {
      data.subscription.unsubscribe()
    }

  }, [])

  useEffect(() => {
    
    const getUserInfo = async () => {

      if ( !session ) {
        setUserData(null)
      } else {
        const { data, error } = await supabase
        .from('users')
        .select()
        .eq('id', user.id)
        .single()

        if (error) throw error
        setUserData(data)
      }
    }

    getUserInfo()
    
  }, [user])
  


  const value = {
    session,
    user,
    setSession,
    setUser,
    userData
  };

  return <Auth.Provider value={value}>{ !loading && children }</Auth.Provider>;
};

export const useAuthContext = () => {
    return useContext(Auth);
}