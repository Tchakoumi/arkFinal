import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import GetIt from './GetIt'
import React, {Component} from 'react';
// import AddPersonnel from './components/provider/AddPersonnel'
import ConfirmOrder from './components/confirmOrder/ConfirmOrder'

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ConfirmOrder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
