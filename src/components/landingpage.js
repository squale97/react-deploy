import React ,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
              <Grid className="landing-grid">
                <Cell col={12}>
                  <img 
                  src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0="
                  alt="avatar"
                  className="avatar-img"
                  /> 
                  <div className="banner-text">
                   <h1>
                       Ingénieur Logiciels
                   </h1>
                   <hr/>
                  <p> Machine/Deep Learning | Developpement Mobile | Developpement Cloud</p>
                  <div className="social-links">
                      { /*Linkedin */}
                      <a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-linkedin-square" aria-hidden="true"/>
                      </a>

                      { /*Github */}
                      <a href="https://github.com/squale" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true"/>
                      </a>

                      { /*Facebook */}
                      <a href="https://facebook.com/razzaqkabore" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-facebook-square" aria-hidden="true"/>

                      </a>

                      { /*Twitter */}
                      <a href="https://twitter.com/razzaq_kabore" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-twitter-square" aria-hidden="true"/>
                      </a>
                  </div>
                  </div>
                  </Cell>
              </Grid>
            </div>
        )
    }
}

export default Landing;