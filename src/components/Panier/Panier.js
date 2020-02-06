import React, { Component } from 'react'
import './Panier.css'
import logo192 from '../assets/logo192.png'

export default class Panier extends Component {
    render() {
        return (
            <div className="containingDiv">
                <div className = "Caracteristiques">
                    <label htmlFor="text">image</label>
                    <label htmlFor="text">Nom Produit</label>
                    <label htmlFor="text">Prix</label>
                    <label htmlFor="text">Quantité</label>
                    <label htmlFor="text">Date de livraison</label>
                    <label htmlFor="text">Total</label>
                </div>
                <div className="panierData">
                    <div className="data">
                        <div className="imgCoupon">
                            <img src={logo192} alt="thatstuff"/>
                            <input className = "Coupon" type="text" placeholder="Entrez code coupon"/>
                            <button>Valider</button>
                        </div>
                        <label htmlFor="text">Robe Entaille 6pieds sous terre</label>
                        <label htmlFor="text">15,000 XAF</label>
                        <input type="number"/>
                        <label htmlFor="text">27/03/2020</label>
                        <label htmlFor="text">30,000 XAF</label>
                    </div>
                    <div className="data">
                        <div className="imgCoupon">
                            <img src={logo192} alt="thatstuff"/>
                            <input className = "Coupon" type="text" placeholder="Entrez code coupon"/>
                            <button>Valider</button>
                        </div>
                        <label htmlFor="text">Robe Entaille 6pieds sous terre</label>
                        <label htmlFor="text">15,000 XAF</label>
                        <input type="number"/>
                        <label htmlFor="text">27/03/2020</label>
                        <label htmlFor="text">30,000 XAF</label>
                    </div>
                    <div className="data">
                        <div className="imgCoupon">
                            <img src={logo192} alt="thatstuff"/>
                            <input className = "Coupon" type="text" placeholder="Entrez code coupon"/>
                            <button>Valider</button>
                        </div>
                        <label htmlFor="text">Robe Entaille 6pieds sous terre</label>
                        <label htmlFor="text">15,000 XAF</label>
                        <input type="number"/>
                        <label htmlFor="text">27/03/2020</label>
                        <label htmlFor="text">30,000 XAF</label>
                    </div>
                </div>
                <label htmlFor="text" className="total">Total: 30.000 FCFA</label>
                <button className="bouton"> Commander</button>
            </div> 
        )            
    }
}
