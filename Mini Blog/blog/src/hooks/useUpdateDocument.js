import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc} from "firebase/firestore"; //funções predefinidas do firebase

const initialState = {
  loading: null,
  error: null,
};

export const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };

    case "ERROR":
      return { loading: false, error: action.payload };

    case "UPDATED_DOC":
      return { loading: false, error: null };

    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = (id, data) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
  
    });
    try {
    
        const docRef = doc(db, docCollection, id)

        const updatedDocument = updateDoc(docRef, data)
    
      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
        payload: data,
      });

    } catch (error) {

      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(()=>{
    return ()=> setCancelled(true)
  },[])

  return{updateDocument, response}
};
