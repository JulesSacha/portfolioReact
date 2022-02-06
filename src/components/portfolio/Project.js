import React, { Component } from 'react';

class Project extends Component {

    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }


    render() {
        let { name, languagesIcons, source, info, picture } = this.props.item;

        return (
            <div className="project">
                <img src={picture} alt="Img Projet" onClick={this.handleInfo} />
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>
                
                <span className="infos" onClick={this.handleInfo}>
                    <i className="far fa-plus-square"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>

                                    <div className="sourceCode">
                                        <a href={source}
                                            rel="noopener noreferrer"
                                            className="button"
                                            target="blank">Visiter le site
                                         </a>
                                         <br />
                                    </div>
                                </div>

                                {/* <p className="text">{info}</p> */}

                                <div className="button return" onClick={this.handleInfo}>
                                    Retourner sur la page
                                    </div>

                            </div>



                        </div>
                    )
                }
               
            </div>

        );
    }
}

export default Project;