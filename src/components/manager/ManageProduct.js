import React, { Component } from 'react'
import './ManageProduct.css'
import '../../sharedCSS.css'

export default class ManageProduct extends Component {

    state={
        products:false,
        coupons:false,
        positions:false
    }

    changeType=(elementID, newType)=>{
        document.getElementById(elementID).type=newType
    }

    render() {
        return (
            <div className="overallManageProductHolder">
                <div className="overallManageProductContainer">
                    <div className="header">
                        <button className="headerBtn" id="productTab">Produits</button>
                        <button className="headerBtn activeTab" id="couponTab">Coupons</button>
                        <button className="headerBtn" id="positionTab">Positions</button>
                    </div>
                    {
                        this.state.products?(
                            <div className="displayInfo">
                                <form>
                                    <section>
                                        <label className="rowTitle firstOfType">Produit</label>
                                        <input className="rowData" type="text" placeholder="Nom du produit" required /> 
                                    </section>
                                    <section>
                                        <label className="rowTitle">Categorie</label>
                                        <select className="rowData category" required>
                                            <option value="" disabled selected hidden>Choisir une categorie</option>
                                        </select>
                                        <select className="rowData subCategory" required>
                                            <option value="" disabled selected hidden>Choisir une sous-categorie</option>
                                        </select>
                                    </section>
                                    <section>
                                        <label className="rowTitle">Marque</label>
                                        <select className="rowData brand" required>
                                            <option value="" disabled selected hidden>Choisir une marque pour le produit</option>
                                        </select>
                                    </section>
                                    <section>
                                        <label className="rowTitle">Couleur</label>
                                        <select className="rowData color" required>
                                            <option value="" disabled selected hidden>Choisir une couleur pour le produit</option>
                                        </select>
                                    </section>
                                    <section>
                                        <label className="rowTitle">Taille</label>
                                        <select className="rowData size" required>
                                            <option value="" disabled selected hidden>Choisir une taille pour le produit</option>
                                        </select>
                                    </section>
                                    <section>
                                        <label className="rowTitle">Coupon</label>
                                        <input className="rowData category" type="text" placeholder="Entrer un code de coupon pour ce produit (s'il y en a)" />
                                        <input className="rowData category" type="text" onFocus={()=>this.changeType("validityStart", "date")} onBlur={()=>this.changeType("validityStart", "text")} placeholder="Debut de validite" id="validityStart" />
                                        <input className="rowData subCategory" type="text" onFocus={()=>this.changeType("validityEnd", "date")} onBlur={()=>this.changeType("validityEnd", "text")} placeholder="Fin de validite" id="validityEnd" />
                                    </section>
                                    <button>Ajouter produit</button>
                                </form>
                            </div>
                        ):(null )
                    }
                    {
                        this.state.positions===false?(
                            <div className="couponsHolder">
                                <form>
                                    <label>Ajouter une ville</label>
                                    <input type="text" placeholder="Entrer nom de la ville" />
                                    <button>Ajouter ville</button>
                                </form>
                                <form>
                                    <label>Ajouter un quartier</label>
                                    <select className="rowData town" required>
                                        <option value="" disabled selected hidden>Choisissez la ville</option>
                                    </select>
                                    <input type="text" placeholder="Nom du nouveau quartier" required/>
                                    <button>Ajouter quartier</button>
                                </form>
                            </div>
                        ):(null)
                    }
                </div>
            </div>
        )
    }
}
