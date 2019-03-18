import{
    DATA_FETCHED
} from '../actions/types';

const INITIAL_STATE ={
   user:[]
};

export default (state=INITIAL_STATE, action )=>{
    switch(action.type){
        case DATA_FETCHED:
            return{...state,user:action.payload}
        default:
            return {state}
    }
}