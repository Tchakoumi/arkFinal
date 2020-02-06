import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import GetIt from './GetIt'
import React, {Component} from 'react';
// import AddPersonnel from './components/provider/AddPersonnel'
import ConfirmOrder from './components/confirmOrder/ConfirmOrder'
import ChangeParameter from './components/changeParameter/ChangeParameter'
import ManageProduct from './components/manager/ManageProduct'
import HomePage from './components/homepage/HomePage'
import Panier from './components/Panier/Panier'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/signIn/SignIn'
// import Navbar from './components/Navbar_Danie/signedInLinks/SignedInLinks'

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/:userId/homepage' component={HomePage} />
            <Route exact path='/:userId/cart' component={Panier} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/:userId/confirm' component={ConfirmOrder} />
            <Route exact path='/:userId/settings' component={ChangeParameter} />
            <Route exact path='/:userId/manageproduct' component={ManageProduct} />
            <Route exact path='/signIn' component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
