import Header from './components/Header';
import Content from './components/Content';
import RedirectComponent from './components/RedirectComponent';
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route path='/:code' component={RedirectComponent}/>
          <Route path='/404' component={NotFound}/>
        </Switch>
      </div>
  </div>
}

export default App;
