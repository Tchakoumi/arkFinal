import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GetIt from './GetIt'
import React, {Component} from 'react';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={GetIt} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
