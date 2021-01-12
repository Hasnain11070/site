import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Switch } from 'react-router-dom';
import Service from './Service';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
   <>
   <div className='xxy'>
    <Navbar></Navbar>
   </div>
   

   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/About' component={About}/>
     <Route exact path='/Service' component={Service}/>
     <Route exact path='/Contact' component={Contact}/>
   </Switch>
   
   
   </>
  );
}

export default App;
