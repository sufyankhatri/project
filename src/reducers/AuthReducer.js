import{
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_FAILED,
    LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE ={
    email:'',
    password:'',
    error:'',
    loading:false
};

export default (state=INITIAL_STATE, action )=>{
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload}
        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
        case SIGN_FAILED:
            return{...state,error:action.payload}
        case LOGIN_SUCCESS:
            return{...state, loading :true}
        default:
            return {state}
    }
}