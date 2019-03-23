import{
    DATA_FETCHED
} from '../actions/types';

const INITIAL_STATE ={
   firstName:'',
   lastName:'',
   insti:'',
   gpa:'',
   email:'',

};

export default (state=INITIAL_STATE, action )=>{
    switch(action.type){
        case DATA_FETCHED:
            return{...state,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                insti: action.payload.insti,
                gpa: action.payload.gpa,
                email: action.payload.email
            }
        default:
            return {state}
    }
}