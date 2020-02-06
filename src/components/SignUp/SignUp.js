import React, { Component } from 'react'
import '../../sharedCSS.css'
import './SignUp.css';


export default class SignUp extends Component {
    state={
        deleted:false,
        idUser:'',
        idUserType:'',
        fNameUser:'',
        lNameUser:'',
        phoneUser:'',
        emailUser:'',
        idQuarter:'',
        pwdUser:'',

        idRegion:'',
        idVille:'',
        cPwdUser:''
    }



    render() {
        return (
            <div className="signUpContainer">
                <div className="signUpHolder">
                    <form id="signUpForm" className="signUpForm">
                        <input type="text" id="fNameUser" placeholder="Nom"/> 
                        <input type="text" id="lNameUser" placeholder="Prenom"/>
                        <input type="text" id="emailUser" placeholder="Adresse mail"/>
                        <input type="text" id="phoneUser" placeholder="Numero De Telephone"/>
                        <select id="idRegion">
                            <option value="" disabled selected hidden>Choisissez votre region</option>
                        </select>
                        <select id="idVille">
                            <option value="" disabled selected hidden>Choisissez votre ville</option>
                        </select>
                        <select id="idQuarter">
                            <option value="" disabled selected hidden>Choisissez votre quartier</option>
                        </select>
                        <input type="text" id="pwdUser" placeholder="Mot de passe"/>
                        <input type="text" id="cPwdUser" placeholder="Confirmer mot de passe"/>
                        <div className='connecter'>
                            <button id="signUpBtn">Creer compte</button>
                            <button id="signInBtn" className="compositeBtn">Se connecter</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
