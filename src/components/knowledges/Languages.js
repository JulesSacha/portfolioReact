import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages : [
            {id: 3, value: "Solidity", xp: 0.4},
            {id: 1, value: "Javascript", xp: 1},
            {id: 2, value: "Php", xp: 1},
            {id: 3, value: "SQL", xp: 1},
        ],

        frameworks : [
            {id: 1, value: "React.js", xp: 0.3},
            {id: 2, value: "Symfony", xp: 0.6},
            {id: 3, value: "Sass/Bootstrap", xp: 0.8}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            
                <div className="languagesFrameworks">
                    <ProgressBar 
                    className="languagesDisplay"
                    languages={languages}
                    title="languages"
                    />
                    <ProgressBar 
                    className="frameworksDisplay"
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    />
                </div>
        
        );
    }
}

export default Languages;