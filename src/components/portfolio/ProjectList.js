import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData.js';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: "javascript" },
            {id: 2, value: "react" },
            {id: 3, value: "php" },
            {id: 4, value: "symfony" },
         
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (event) => {
        let radios = event.target.value;
        this.setState({selectedRadio : radios})
    }




    render() {
        let { projects, radios, selectedRadio } = this.state;


        return (

            <div className="portfolioContent">
              
                    <ul className="radioDisplay">
                        {
                            radios.map((radios) => {
                                return (
                                    <li key={radios.id}>
                                        <input type="radio" 
                                        id={radios.value}
                                        name="radios"
                                        checked={radios.value === selectedRadio}
                                        value={radios.value}
                                        onChange={this.handleRadio}
                                        />
                                        <label htmlFor={radios.value} >{radios.value}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
             
                <div className="projects">
                    {
                        
                        projects.filter(item => item.languages.includes(selectedRadio))
                        .map(item => {
                            return (
                                <Project
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default ProjectList;