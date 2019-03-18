import{
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_FAILED
} from '../actions/types';

const INITIAL_STATE ={
    email:'',
    password:'',
    error:''
};

export default (state=INITIAL_STATE, action )=>{
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload}
        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
        case SIGN_FAILED:
            return{...state,error:action.payload}
        default:
            return {state}
    }
}