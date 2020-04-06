import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Baloo Paaji 2'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (512) 783-0262
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Baloo Paaji 2'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ismelfigueroa7@gmail.com
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