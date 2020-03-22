import React, { Component } from 'react';
import Auth from "../storage/Auth";
import './AuthView.css';

import {Text, EditableText, Button} from '@blueprintjs/core'

class AuthView extends Component {
    constructor() {
        super();

        this.state = {
            textInput: ""
        };

        this.auth = new Auth();
    }

    updateText = (event) => {
        let text = event.target.value;

        this.setState({
            textInput: text
        })
    };

    authenticate = () => {
        if(this.state.textInput && this.state.textInput !== ""){
            this.auth.auth(this.state.textInput);
        }
        window.location.reload();
    };

    render(){
        return (
            <div className="AuthView">
                <Text tagName={"h1"}>Gib deine user ID ein</Text>
                <input
                    className={"input"}
                    value={this.state.textInput}
                    onChange={this.updateText}
                    autoFocus={true}
                />
                <Button rightIcon="arrow-right" intent="success" className={"button"} onClick={this.authenticate}/>
                <Text tagName={"p"}>Bei fragen, schick uns eine email.</Text>
            </div>
        );
    }

}

export default AuthView;
