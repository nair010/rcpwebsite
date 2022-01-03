import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import joinus from './components/pages/joinus';
import team from './components/pages/team';
import Events from './components/pages/events';
import { AnimatePresence } from 'framer-motion';
import wc from './WC.png';
import Clubser from './components/pages/clubser';
import Inter from './components/pages/inter';
import Proff from './components/pages/proff';
import Communitytth from './components/pages/communitytth';

function App() {
  
  const [loading, setloading] = useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
        setloading(false)
    }, 5000)
  },[])
  return (
    <div classname="App">
    {
      loading ?(
        <div classname="mode" id="preloader">
          <h2>ROTARACT CLUB </h2>
            <h3>OF </h3>
            <h4> PARUL UNIVERISTY</h4>
            <img src={wc} alt="" class="p"></img>
        </div>
        
      ):(

      <header>
       <AnimatePresence exitBeforeEnter>
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/team' component={team} />
              <Route path='/joinus' component={joinus} />
              <Route path='/events' component={Events} />
              <Route path='/communitytth' component={Communitytth}/>
              <Route path='/clubser' component={Clubser} />
              <Route path='/inter' component={Inter} />
              <Route path='/proff' component={Proff} />
            </Switch>
        </Router>
      </AnimatePresence>
      </header>
    )}
</div>
  
);
}

export default App;

