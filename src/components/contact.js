import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import {List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
               <Grid className="contact-grid">
             <Cell col={6}>
             <h2>Abdul Razzaq KABORE</h2>
             <img src="data:image/png;base64,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"
             alt="monAvatar"
             style={{height:'250px'}}/>
             <p style ={{ width:'75%', margin:'auto', paddingTop:'1em'}}>ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</p>
             </Cell>
             <Cell col={6}>
             <h2>Contact Me</h2>
             <hr/>
     <div className="contact-list">
     <List>
  <ListItem>
    <ListItemContent style={{ fontSize: '25px', fontFamily:'Anton'}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        (213)555285244
        
        </ListItemContent>
  </ListItem>


  <ListItem>
    <ListItemContent style={{ fontSize: '25px', fontFamily:'Anton'}}>
        <i className="fa fa-envelope-square" aria-hidden="true"/>
          razzaqkabore97@gmail.com
        
        </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{ fontSize: '25px', fontFamily:'Anton'}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        (213)555285244
        
        </ListItemContent>
  </ListItem>
  

  
</List>
     </div>

             </Cell>
               </Grid>
            </div>
        )
    }
}

export default Contact;