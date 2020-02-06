import React, { Component } from 'react'
import '../../sharedCSS.css'
import './SignIn.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createConnectedUser } from '../../store/actions/connectedUserAction'

class SignIn extends Component {
    state={
        phone:"",
        mdp:"",
        connectedUser:"",
        error:false
    }

    // ValidateEmail=(mail)=>(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)?(true):(false))

    handleInput=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    handleBtn=(e)=>{
        let ans = this.props.users
        let anss =ans.find(user=>{
            return (user.phoneUser===this.state.phone && user.pwdUser===this.state.mdp)
        })
        if(anss===undefined){
            e.preventDefault();
            this.setState({error:true})
            document.getElementById("signInForm").reset();
        }else{
            e.preventDefault()
            this.setState({connectedUser:anss.idUser}, ()=>{
                this.props.createConnectedUser([{theUser:anss.idUser}])
                this.props.history.push(`/${this.state.connectedUser}/homepage`)
            })
        }
    }

    render() {
        return (
            <div className="signInContainer">
                <div className="signInHolder">
                    <form id="signInForm" className="signInForm">
                        {this.state.error?(<label>Invalid login or password!!!</label>):(null)}
                        <input type="phone" id="phone" placeholder="Numero de telephone" onChange={this.handleInput} required/>
                        <input type="password" id="mdp" placeholder="Mot de passe" onChange={this.handleInput} required  />
                        <div className='connecter'>
                            <button id="hell" onClick={this.handleBtn}>Se connecter</button>
                            <button id="signUpBtn" className="compositeBtn">Creer un compte</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        users:state.user.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createConnectedUser:(user)=>dispatch(createConnectedUser(user))
        // createUserSpecial:(user)=>dispatch(createUserSpecial(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))