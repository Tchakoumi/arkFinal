import React, { Component } from 'react'
import './AddPersonnel.css'
import '../../sharedCSS.css'

class AddPersonnel extends Component {

    state={
        provider:false,
        livreur:false,
        gerant:false
    }

    openAjout=(e)=>{
        this.setState({
            provider:false,
            livreur:false,
            gerant:false,
            [e.target.id]:true
        })
    }
    
    closeAjout=()=>{
        this.setState({
            provider:false,
            livreur:false,
            gerant:false
        })
    }

    render() {
        if(this.state.provider){
        return (
            <div className='addPersonnelContainer'>
                <label className="addPersonnelTitle">AJOUT DU PERSONNEL</label>
                <div className="addPersonnelLinks">
                    <label id="provider" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Fournisseur</label>
                    <div className="dataBlock" hidden>
                        <i onClick={this.closeAjout} className="fa fa-times" />
                        <input type="text" placeholder="Nom de la Boutique" />
                        <input type="text" placeholder="Numero" />
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Prenom" />
                        <input type="text" placeholder="Email" />
                        <select>
                            <option value="Tonga" />
                        </select>
                        <select>
                            <option value="Bangangte" />
                        </select>
                        <input type="button" className="buton" value="Ajouter" />
                    </div>
                    <label id="livreur" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Livreur</label>
                    <label id="gerant" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Gerant</label>
                </div>
            </div>
        )}else if(this.state.livreur){
            return(
            <div className='addPersonnelContainer'>
                <label className="addPersonnelTitle">AJOUT DU PERSONNEL</label>
                <div className="addPersonnelLinks">
                    <label id="provider" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Fournisseur</label>
                    <label id="livreur" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Livreur</label>
                    <div className="dataBlock" hidden>
                        <i onClick={this.closeAjout} className="fa fa-times" />
                        <input type="text" placeholder="Numero" />
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Prenom" />
                        <input type="text" placeholder="Email" />
                        <input type="button" className="buton" value="Ajouter" />
                    </div>
                    <label id="gerant" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Gerant</label>
                </div>
            </div>
        )}else if(this.state.gerant){
            return(
            <div className='addPersonnelContainer'>
                <label className="addPersonnelTitle">AJOUT DU PERSONNEL</label>
                <div className="addPersonnelLinks">
                    <label id="provider" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Fournisseur</label>
                    <label id="livreur" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Livreur</label>
                    <label id="gerant" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Gerant</label>
                    <div className="dataBlock" hidden>
                        <i onClick={this.closeAjout} className="fa fa-times" />
                        <input type="text" placeholder="Numero" />
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Prenom" />
                        <input type="text" placeholder="Email" />
                        <input type="button" className="buton" value="Ajouter" />
                    </div>
                </div>
            </div>
        )}else{
            return(
            <div className='addPersonnelContainer'>
                <label className="addPersonnelTitle">AJOUT DU PERSONNEL</label>
                <div className="addPersonnelLinks">
                    <label id="provider" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Fournisseur</label>
                    <label id="livreur" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Livreur</label>
                    <label id="gerant" onClick={this.openAjout} className="addPersonnelLink fa fa-plus-square"> Ajouter Gerant</label>
                </div>
            </div>
        )}
    }
}


export default AddPersonnel