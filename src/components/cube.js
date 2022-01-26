import React, { Component } from 'react';
import Icon from '../svgr/icon';


class Cube extends Component {
    state = {
        radios: [
            { id: 1, className:"box show-front", value: "front" },
            { id: 2, className:"box show-right", value: "right" },
            { id: 3, className:"box show-back", value: "back" },
            { id: 4, className:"box show-left", value: "left" },
            { id: 5, className:"box show-top", value: "top" },
            { id: 6, className:"box show-bottom", value: "bottom" },

        ],
        selectedRadio: 'front'
    };

    handleRadio = (event) => {
        let radios = event.target.value;
        this.setState({ selectedRadio: radios })

  
    }




    render() {
        let { radios, selectedRadio } = this.state;



        return (

<div className="container">

<div className="scene">
    
<div className={"box show-"+ selectedRadio}>
  <div className="box__face box__face--front"><Icon /></div>
  <div className="box__face box__face--back">back</div>
  <div className="box__face box__face--right">right</div>
  <div className="box__face box__face--left">left</div>
  <div className="box__face box__face--top">top</div>
  <div className="box__face box__face--bottom">bottom</div>
</div>
</div>
<center>
<ul className="radioDisplay">
                        {
                            radios.map((radios) => {
                                return (
                                    <li key={radios.id}>
                                        <input type="radio" 
                                        id="react"
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


</center> 

</div>
         
        );
    }
}

export default Cube;







