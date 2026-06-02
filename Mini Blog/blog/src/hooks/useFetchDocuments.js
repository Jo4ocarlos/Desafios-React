import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = collection(db, docCollection);

      try {
        let q;

        if(search){ // função para nossp input de busca, e ordenamos por data de criação
          q = await query(collectionRef, where("hashTags", "array-contains", search), orderBy("createdAt", "desc"))
        }else if(uid){
          q = await query(collectionRef, where("uid","==", uid), orderBy("createdAt", "desc"))
        }else{
          q = await query(collectionRef, orderBy("createdAt", "desc")); //pega todos os dados por data e organiza em decrescente 
        }

        // mapear os dados
        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            })),
          );
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };
    loadData()
  }, [docCollection, search, uid, cancelled]);

    useEffect(()=>{
      return ()=> setCancelled(true);
    }, []);

    return {documents, loading, error};
};
