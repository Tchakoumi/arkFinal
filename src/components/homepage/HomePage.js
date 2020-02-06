import React, { Component } from 'react'
import logo192 from '../assets/logo192.png'
import { createCart } from '../../store/actions/cartAction'
import './HomePage.css'
import { connect } from 'react-redux'

class HomePage extends Component {

    state={
        open:""
    }

    leftPane=()=>{
        const leftPane = this.props.categories.map(category=>{
            if(category.deleted !==true){
                let hisSub = this.props.subCategories.filter(subCategory=>{return subCategory.idCategory===category.idCategory})
                let sub = hisSub.map(aSub=>{if(aSub.deleted!==true){return <label className="subCategoryLabel" key={aSub.idSubCategory}>{aSub.subCategoryName}</label>}else return null})
                return (
                    <div className="categorie" key={category.idCategory}>
                        <label className="categLabel">{category.nameCategory}</label>
                        <div className="allProducts">
                            {sub}
                        </div>
                    </div>
                )
            }else return null
        })

        return leftPane
    }

    handleProductClick=(productId)=>{
        this.setState({
            open: productId
        })
    }

    addProductToCart=(productId)=>{
        let userId = this.props.location.pathname
        userId = userId.slice(1, userId.length-9)
        let validUser = this.props.users.find(user=>{
            return user.idUser === userId
        })

        if(validUser!==undefined){
            let dispatchObject=[{deleted:false, quantity:2, idProduct:productId, idProductSize:"0rNGegfRcstJMDVIPvUp", idUser:userId}]
            let userCart = this.props.carts.filter(cart=>{
                return cart.idUser === userId
            })

            let verifyProductInCart = userCart.find(product=>{
                return product.idProduct === productId
            })

            if(verifyProductInCart===undefined){
                this.props.createCart(dispatchObject)
            }

        }else this.props.history.push("/signin")

    }

    handleAcheterClick=(productId)=>{
        let userId = this.props.history.location.pathname.slice(1,-9)
        let validUser = this.props.users.find(user=>{return user.idUser === userId})

        if(validUser !== undefined){
            this.addProductToCart(productId)
            this.props.history.push("/"+this.props.history.location.pathname.slice(1,-9)+"/confirm")
        }else this.props.history.push("/signin")
    }

    products=()=>{
        return (
            this.props.products.map(product=>{
                if(product.deleted!==true){
                    return (
                        <div className="produits" key={product.idProduct}>
                            <img src={logo192} alt={product.nameProduct} className="article" onClick={()=>{this.handleProductClick(product.idProuct)}} />
                            <label onClick={()=>{this.handleProductClick(product.idProduct)}} >{product.nameProduct}</label> 
                            <button onClick={()=>{this.addProductToCart(product.idProduct)}}>Ajouter au panier</button>
                            <button onClick={()=>{this.handleAcheterClick(product.idProduct)}}>Acheter</button>
                        </div>
                    )
                }else return null
        }))

        // return products
    }

    render() {
        return (
            <div className="presentation-container">
                <div className="topWrapper" >
                    <div className="categorie-container">
                        <div className="catForms">
                            <h3 className="catForm">Nos categories</h3>
                            {this.leftPane()}
                            {/* {this.addProductToCart("HelloWorld")} */}
                            
                            <h3 className="filter">Filtres</h3>
                            <div className="categorie">
                                <label className="categLabel" htmlFor="electro">Prix</label>
                            </div>

                            <div className="categorie">
                                <label className="categLabel" htmlFor="electronique">Couleurs</label>
                            </div>

                            <div className="categorie">
                                <label className="categLabel" htmlFor="femme">Taille</label>
                            </div>
                        </div>
                    </div>

                    <div className="content-elements">
                        <div className="content">
                            <form className="formElements">
                                <img src={logo192} alt="Article" className="article" height="100px" width="100px"></img>
                                <h4 className="titre">Ventes flash: 10:25:09 (temps restant)</h4>
                            </form>
                        </div>
                        
                        <div className="bottomPanes">
                            <div className="content-produits">
                                {this.products()}
                            </div>
                            {
                                this.state.open !==""?(
                                    <div className="productDetails">
                                        <label onClick={()=>{this.setState({open:""})}}>X</label>
                                        <label className="early">Nom de produit: {"Robes antaillee 6 pieds sous terre"}</label>
                                        <label>Marque:{"Sun Glasses Corp"}</label>
                                        <label>Evaluation: 5 Stars</label>
                                        <div className="tremble">
                                            <label>Produit:</label>
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                            <img src={logo192} height="50px" width="50px" alt="hello" />
                                        </div>
                                        <div className="twoDivisions">
                                            <div className="imgBtns">
                                                <div>
                                                    <img src="" height="200px" width="200px"  alt="helloworld" />
                                                    <div className="iBtns">
                                                        <button>Acheter</button>
                                                        <button onClick={()=>{this.addProductToCart(this.state.open)}}>Ajouter au panier</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="productOthers">
                                                <label className="productRoute">{"Categorie"} -> {"SubCategory"} -> {"Robes antaille 6 pieds sous terre"}</label>
                                                <div className="details">
                                                    <label>Details du produit</label><br />
                                                    <label>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem</label>
                                                </div>
                                                <div className="colorBtn">
                                                    <label>Couleur: </label>
                                                    <button>Bleu</button>
                                                    <button>Vert</button>
                                                    <button>Noir</button>
                                                </div>
                                                <div className="sizeBtn">
                                                    <label>Size: </label>
                                                    <button>X</button>
                                                    <button>XL</button>
                                                    <button>XXL</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ):(null)
                            }
                        </div>
                    </div>
                </div>

                <footer>
                    <div>
                        <div className="fa fa-whatsapp fa-3x"></div>
                        <div className="fa fa-facebook fa-3x"></div>
                        <div className="fa fa-instagram fa-3x"></div>
                    </div>
                    <div><h3>Souscription</h3></div>
                    <div><h3>Nos services</h3></div>
                    <div><h3>FAQs</h3></div>
                    <div><h3>Nos contacts</h3></div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        categories:state.category.categories,
        subCategories:state.subCategory.subCategories,
        products:state.product.products,
        connectedUser:state.connectedUser.connectedUser,
        users:state.user.users,
        carts:state.cart.carts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createCart:(cart)=>dispatch(createCart(cart))
    //     createConnectedUser:(user)=>dispatch(createConnectedUser(user))
    //     // createUserSpecial:(user)=>dispatch(createUserSpecial(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomePage)