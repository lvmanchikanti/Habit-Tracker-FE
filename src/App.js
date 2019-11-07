import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
 
const App  = () => {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
            <Route path="/" component={Landing} exact/>
            <Route path="/dashboard" component={Dashboard} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
}
 
export default App;
