import React, { Component } from 'react';
import { exportDefaultDeclaration } from '@babel/types';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div>
            <Grid>
            <Cell col={6}>
            
            <img
              src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
              alt="avatar"
              style={{height: '200px' }}
               />
             <p style={{ width: '50%', margin: 'auto', paddingTop: '1em'}}>Back in 2011, I graduated in Cuba from a IT College with a Degree in Computer Science.
                                There I studied languages like HTML, CSS, C++ and Java. 
                                For many years I didn't code at any of those languages and literally I lose my skills due to non practice. 
                               Now, 8 years later I decide back to my original career and do it again in a incredible School like UT Austin.
                             I'm based in Austin Tx. and into learning, exercise, and continuous improvement.</p>

          </Cell>
            </Grid>
            </div>
        )
    }
}

export default About; 