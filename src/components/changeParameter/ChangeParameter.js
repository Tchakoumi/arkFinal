import React, { Component } from 'react'
import './ChangeParameter.css'
import '../../sharedCSS.css'

class ChangeParameter extends Component {
    render() {
        return (
            <div className='parameterHolder'>
                <div className="parameterContainer">
                    <form>
                        <input type="text" placeholder="Numero de telephone" />
                        <input type="email" placeholder="Adresse mail" />
                        <input type="password" placeholder="Ancien mot de passe" />
                        <input type="password" placeholder="Nouveau mot de passe" />
                        <button>Enregistrer</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChangeParameter