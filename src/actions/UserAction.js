import firebase from '../FirebaseConfig'
import { DATA_FETCHED } from './types';

export const getUserData =(dispatch)=>{   
        const {currentUser} = firebase.auth()
        firebase.database().ref(`users/Students/${currentUser.uid}`)
        .on(('value'), snapshot=>{
            console.log(snapshot.val())
            dispatch({
                type: DATA_FETCHED,
                payload: snapshot.val()
            })
        });
    

}