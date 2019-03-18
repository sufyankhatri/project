import React  from 'react'
import {getUserData} from '../actions/UserAction'
import {connect} from 'react-redux'
class Profile extends React.Component{
    render(){
        return(
            <div>
                {console.log(this.props.user)}
                 
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    const {user}=state.user
//    const {firstName,lastName}= user
    return {user}
}
export default connect(mapStateToProps,{getUserData})(Profile)