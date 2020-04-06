import React, { Component } from 'react';
import { exportDefaultDeclaration } from '@babel/types';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                        alt="avatar"
                        className="avatar-img"
                         />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ismel-figueroa-bbab14178/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Ismelfigueroa" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/profile.php?id=100010070473939" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/ismelfigueroa/" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-instagram" aria-hidden="true" />
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