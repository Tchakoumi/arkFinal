import React, { Component } from 'react'
import './ConfirmOrder.css'
import '../../sharedCSS.css'

export default class ConfirmOrder extends Component {

    state={
        location:true,
        receiver:true,
        newReceiver:false,
        product:true,
        payment:true,
    }

    loadTowns=()=>{
        let town=["Bamenda", "Yaounde", "Douala", "Bafoussam", "Edea", "Garoua", "Maroua", "Buea"]        
        let towns=document.getElementById('towns')
        town.map(town=>{
            var option = document.createElement('option')
            option.appendChild(document.createTextNode(town))
            option.value=town
            towns.appendChild(option)
            return null
        })

        this.loadQuarters(towns.value)
    }

    componentDidMount(){
        if(this.state.location===true) this.loadTowns()
        
    }

    changeIt=(e)=>{
        let shades=document.querySelector(`#${e.target.id}`)
        // console.log(shades.classList)
        if(shades.classList.contains("fa-plus-circle"))
        {
            shades.classList.remove("fa-plus-circle")
            shades.classList.add("fa-minus-circle")
            this.setState({
                [e.target.id]:true
            })
        }else{
            shades.classList.remove("fa-minus-circle")
            shades.classList.add("fa-plus-circle")
            this.setState({
                [e.target.id]:false
            })
        }
    }

    loadQuarters=(town)=>{
        let townQuarter=[
            {town:"Bamenda", quarter:"Binju"},
            {town:"Bamenda", quarter:"Three-corners"},
            {town:"Bamenda", quarter:"Njikwa"},
            {town:"Bamenda", quarter:"Cosmos quarter"},
            {town:"Bamenda", quarter:"quartier 3"},
            {town:"Bafoussam", quarter:"quartier 3"},
            {town:"Bafoussam", quarter:"quartier 4"},
            {town:"Bafoussam", quarter:"Nouton"},
            {town:"Yaounde", quarter:"Obili"},
            {town:"Yaounde", quarter:"Madagascar"},
            {town:"Yaounde", quarter:"Mokolo"},
        ]

        let quarters=townQuarter.filter(townQuarter=>(townQuarter.town === town))

        let quarts=document.getElementById('quarters')
        quarts.options.length=0
        quarters.map(quarter=>{
                var option = document.createElement('option')
                option.appendChild(document.createTextNode(quarter.quarter))
                option.value=quarter.quarter
                quarts.appendChild(option)
                return null
            })
    }

    openSection=(e)=>{
        this.setState({
            [e.target.id]:!this.state.location
        }, ()=>{console.log(this.state)})
        
    }

    render() {
        return (
            <div className="overallContainer">
                <div className="labelContainer">
                    <label className="fa fa-minus-circle faLabel" id="location" onClick={this.changeIt}>  Lieu de livraison</label>
                    {
                        this.state.location?(
                            <div className="locationDetails">
                                <form>
                                    <label>Location details</label>
                                    <select id="towns" onChange={()=>(this.loadQuarters(document.getElementById("towns").value))}>
                                        <option value="" disabled selected hidden>Choisissez la ville de livraison</option>
                                    </select>
                                    <select id="quarters">
                                        <option value='' disabled selected hidden>Quartier de livraison</option>
                                    </select>
                                </form>
                            </div>
                        ):(null)
                    }
                    <label className="fa fa-minus-circle faLabel" id='receiver' onClick={this.changeIt}>  Reception</label>
                    {
                        this.state.receiver? (
                            <div className="test">
                                <label>Nom: {" Tchakoumi"}</label>
                                <label>Prenom: {" Lorrain"}</label>
                                <label>Telephone: {" 657140183"}</label>
                                <label>Email: {" lorraintchakoumi@gmail.com"}</label>
                                <label className="fa fa-plus-circle" id='newReceiver' onClick={this.changeIt}>Ajouter un nouveau recepteur</label>
                                {
                                    this.state.newReceiver?(
                                        <div className="addNewReceiver">
                                            <form className="newReceiverFields">
                                                <input type='text' placeholder="Nom" />
                                                <input type='text' placeholder="Prenom" />
                                                <input type='text' placeholder="Telephone" />
                                                <input type='text' placeholder="Email" />
                                                <button> Confirmer ajout</button>
                                            </form>
                                        </div>
                                    ):(null)
                                    
                                }
                            </div>
                        ):(null)
                    }
                    <label className="fa fa-minus-circle faLabel" id='product' onClick={this.changeIt}>  Produits</label>
                    {
                        this.state.product===true?(
                            <div className="chosenProducts">
                                <div className="productDetail">
                                    <img className='thisImage' src="" alt="product" />
                                    <label className="thisName">{"productNameAndDetails"}</label>
                                    <label className="thisPrice">{"price"}</label>
                                </div>
                                <div className="productDetail">
                                    <img className='thisImage' src="" alt="product" />
                                    <label className="thisName">{"productNameAndDetails"}</label>
                                    <label className="thisPrice">{"price"}</label>
                                </div>
                                <div className="productDetail">
                                    <img className='thisImage' src="" alt="product" />
                                    <label className="thisName">{"productNameAndDetails"}</label>
                                    <label className="thisPrice">{"price"}</label>
                                </div>
                                <div className="productDetail">
                                    <img className='thisImage' src="" alt="product" />
                                    <label className="thisName">{"productNameAndDetails"}</label>
                                    <label className="thisPrice">{"price"}</label>
                                </div>
                            </div>
                        ):(null)
                    }
                    <label className="fa fa-minus-circle faLabel" id='payment' onClick={this.changeIt}>  Paiement</label>
                    {
                        this.state.payment?(
                            <div className="paymentDetails">
                                <div className="totalPayable">
                                    <label >Montant total a payer: </label>
                                    <label className='note'>{"35,000 XAF"} </label>
                                </div>
                                <label className="note">Paiement a livraison</label>
                            </div>
                        ):(null)
                    }

                    <button className="confirmButton">Confirmer la Commande</button>
                </div>
            </div>
        )
    }
}
