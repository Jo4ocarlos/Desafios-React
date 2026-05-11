import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState('');

  //cleanup
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth(); // declaramos auth para usar algumas unfções do getAuth do firebase por exemplo identificar senhas fracas

  const checkIfisCancelled = () => {
    if (cancelled) {
      return;
    }
    // essa função é para evitar vazamento de memomria(preciso entender mais sobre, e se é apenas assim que resolve)
  };

  const createUser = async (data) => {
    checkIfisCancelled();
    setLoading(true);
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;

    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);


      if(error.message.includes("Password")){
        setError('A senha precisa ter pelo menos 6 caracteres')
      }else if(error.message.includes("email-already")){
        setError('Email já cadastrado')
      }else{
        setError('Ocorreu um erro, tente novamente mais tarde')
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, loading };
};
