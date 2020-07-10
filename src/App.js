import React, { Component } from 'react';

import './App.css';
import Main from './components/main';
import { Header, Textfield,Layout, Navigation, Drawer, Content} from 'react-mdl';
import { Route,Link, BrowserRouter } from 'react-router-dom';


class App extends Component {
  render(){
 return (
<div style={{height: '300px'}}>
    
    <Layout fixedHeader>
        
    <Header className="header-color" title={<a style={{color:'white', textDecorationLine:'none' }} href="/"><strong>LEKODEUR</strong></a>}>
    <div   id="menu" tabindex="0" class="mdl-layout__drawer-button"><i class="material-icons"></i></div>
            <Navigation >
                
             <a style={{fontSize:'1.5em'}} href="/resume"> Resume</a>
            <a  style={{fontSize:'1.5em'}} href="/aboutme">About Me</a>
            <a  style={{fontSize:'1.5em'}} href="/projects">Projects</a>
            <a  style={{fontSize:'1.5em'}} href="/Contact">Contact</a>
                
                <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
            </Navigation>
        </Header>
        <Drawer className="menu" title={<a style={{textDecoration:'none', textDecorationLine:'none' }} href="/"><strong>LEKODEUR</strong></a>}>
            <Navigation className="navigation" >
            <a href="/resume"> Resume</a>
            <a href="/aboutme">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/Contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content >
          <Main/>
          </Content>
    </Layout>
    
</div>
 );
  }
}


export default App;
