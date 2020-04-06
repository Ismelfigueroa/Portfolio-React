import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
             First Project is "Code-Stars" that presents NBA Live Scores. As an NBA fan I want to: Check the score of live games Review the statistics of all teams in the NBA Learn more about 
             the players I enjoy watching. As the user I want to: Easily check the live score of current games Navigate between pages Search by player name. This application is designed to: 
             Display live NBA scores Display current standings by conference Display player information using a search. API-NBA (RapidAPI) Materialize (CSS Framework) Server-side APIs Moment.js JQuery


            </CardText>
            <CardActions border>
              <Button href="https://github.com/Ismelfigueroa/Project-1" colored>GitHub</Button>
              <Button href="https://codepen.io/" colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            Second Project is "Crawl Brew", a App where users can find their favorite Brewery in ATX and also add beer to the list and create their own users. We used the technology: Node.js - Javascript runtime network Heroku - For application deployment NPM - Dependency Management Bootstrap - CSS Framework for Styling Express.js - Web framework for Node.js 
            Sequelize - ORM for Node.js mySQL - Database Used for Development PostgreSQL - Database Used for Production


            </CardText>
            <CardActions border>
              <Button href="https://github.com/Ismelfigueroa/Project-2" colored>GitHub</Button>
              <Button href="https://codepen.io/" colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Project 3 it was my final project where by my self I builded a App called COVID-19 UPDATE where users can Sign up, Log in and see how many infected, recupered and have already died 
              cases in the world with this situation. Technology used is ReactJS, Node and Express Web Server, MongoDB Database with a Sequelize, GET and POST routes for retrieving and adding new data, deployed using Heroku, involve the authentication of users, API key.
 
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Ismelfigueroa/COVID-19-Update-Project" colored>GitHub</Button>
              <Button href="https://codepen.io/" colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;