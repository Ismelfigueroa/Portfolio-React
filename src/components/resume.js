import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills.js';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ismel Figueroa</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> I am a programer, entrepreneur, trader, coder, and mentor who helps people to live a better LIFE.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            <h5>Phone</h5>
            <p>(512) 783-0262</p>
            <h5>Email</h5>
            <p>ismelfigueroa7@gmail.com</p>
            <h5>Web</h5>
            <p>ismelfigueroa.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2008}
              endYear={2011}
              schoolName="My Institute"
              schoolDescription="I studied 3 years Computer Science and graduated with a high grade in this field"
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="UT Coding Bootcamp"
                 schoolDescription="After some years working out of my field I came back to study for being a programmer with more experience to offer to the Computer Industry"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="I was working for a Pharmaceutical Corporation in the main role as a developer"
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;