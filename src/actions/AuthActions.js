import{
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types'

import firebase from '../FirebaseConfig'

export const emailChanged=(text)=>{
    
    return {
        type: EMAIL_CHANGED,
        payload:text
    }
}


export const passwordChanged = (text) => {

    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };
  
export const loginUser =(email,password)=>{
    return ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("login success")
        })
        .catch((error)=>{
            console.log(error)
        });
    }
}
export const signUser = (email,password)=>{
    return()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("user created successfully")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}