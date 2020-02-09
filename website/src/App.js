import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import './App.css'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import SelectiveRender from './SelectiveRender.js'

export default class App extends Component {

  state = {
    activeItem: 'home',
    news: 
    [
      {
        header: 'January 17, 2012',
        description: 'Arqule Announces Tivantinib Meets Primary Endpoint Extending TTP in Phase II trial in Hepatocellular Carcinoma',
      },
      {
        header: 'January 17, 2012',
        description: 'Vivus Announces FDA approval of Once Daily Qsymia for Obesity'
      },
      {
        header: 'June 14, 2012',
        description: 'Invuity Raises $25 Million in Series D Funding'
      },
      {
        header: 'April 21, 2013',
        description: 'Regado Completes $55 Million IPO'
      },
      {
        header: 'April 30, 2013',
        description: 'Celator Pharmaceuticals Raises $32.5 Million'
      },
      {
        header: 'December 19, 2013',
        description: 'Gentium Announces Sale to Jazz Pharmaceuticals for $1 Billion'
      },
      {
        header: 'February 10, 2015',
        description: 'Anthera announces Completion of Interim Analysis for Phase III trial with Blisibimod in Lupus'
      },
      {
        header: 'March 16, 2015',
        description: 'Anthera Announces Completion of Interim Analysis for Phase III trial with Blisibimod in IgA Nepropathy'
      },
      {
        header: 'June 15, 2015',
        description: 'Invuity Completes $55 Million IPO'
      },
      {
        header: 'June 24, 2015',
        description: 'Celator Announces Positive Response Rate Results From Phase III Study of CPX-351 in High-risk AML Patients Demonstrating a 43% Relative Improvement'
      },
      {
        header: 'March 14, 2016',
        description: 'Celator Pharmaceuticals Announces Statistically Significant Improvement in Overall Survival in Phase III Trial for Vyxeos (CPX-351) in High-Risk AML'
      },
      {
        header: 'March 30, 2016',
        description: 'Jazz Pharmaceuticals Announces FDA Approval of Defitelio (Defibrotide) for Treatment of Hepatic Veno-Occlusive Disease'
      },
      {
        header: 'May 31, 2016',
        description: 'Jazz Pharmaceuticals Announces Agreement to Acquire Celator Pharmaceuticals for $1.5 Billion'
      },
      {
        header: 'August 3, 2017',
        description: 'Jazz Pharmaceuticals Announces FDA approval of Vyxeos'
      },
      {
        header: 'November 15, 2017',
        description: 'Leap Therapeutics Offers $18 Million Private Placement Offering'
      },
      {
        header: 'April 12, 2018',
        description: 'Atea Pharmaceuticals reports positive proof of concept clinical data with AT-527 for the treatment of chronic Hepatitis C'
      },
      {
        header: 'October 3, 2018',
        description: 'Stryker Completes Acquisition of Invuity, Inc'
      },
      {
        header: 'August 6, 2019',
        description: 'Leap Presents Positive Clinical Results for the Combination of DKN-01 plus Keytruda®'
      },
      {
        header: 'November 8, 2019',
        description: 'HCV Viral Kinetic Analysis Predicts Shorter Treatment duration with AT-527, a Purine Nucleotide Prodrug with Potent Pan-Genotypic Antiviral Activity in HCV-Infected Subjects Regardless of Cirrhosis Status'
      },
      {
        header: 'December 9, 2019',
        description: 'Merck to Acquire ArQule For $2.7 Billion'
      },
      {
        header: 'January 23, 2020',
        description: 'Leap Therapeutics Presents Updated Data at the ASCO 2020 Gastrointestinal Cancers Symposium (ASCO GI) Global Meeting'
      }
    ]
  }
  

  handleClick = (e, {name}) => this.setState({activeItem: name})

  render(){
    return(
      <div>
      <Header/>
      <Navbar handleClick = {this.handleClick} activeItem = {this.state.activeItem}/>
        <Grid relaxed columns={2}>
            <Grid.Column width={4}>
              <Sidebar news={this.state.news}/>
            </Grid.Column>
            <Grid.Column relaxed width={11}>
              <SelectiveRender activeItem = {this.state.activeItem}/>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}