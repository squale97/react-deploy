import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Landing from './landingpage';
import Contact from './contact';
import Projects from './projects';
import About from './aboutme';
import Resume from './resume';



const Main = ()=> (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route  path="/aboutme" component={About} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/resume" component={Resume} />
        </Switch>
        </BrowserRouter>
)
export default Main;