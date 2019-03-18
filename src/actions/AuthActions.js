import{
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_FAILED
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
export const signUser = (email,password,gpa,insti,firstName,lastName)=>{
    return(dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            const {currentUser} = firebase.auth()
            const uid = currentUser.uid;
           firebase.database().ref(`users/Students/${currentUser.uid}`)
           .set({email,gpa,insti,firstName,lastName,uid})
           .then(()=>{
                console.log("data entered successfully")
           }
           )
        })
        .catch((error)=>{
            console.log(error)
            dispatch({
                type: SIGN_FAILED,
                payload:error
                
           }) 
           
        })
    }
}