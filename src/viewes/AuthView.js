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

    updateText = (text) => {
        console.log(text)
        this.setState({
            textInput: text
        })
    };

    authenticate = () => {
        if(this.state.textInput && this.state.textInput !== ""){
            this.auth.auth(this.state.textInput);
        }
    };

    render(){
        return (
            <div className="AuthView">
                <Text tagName={"h1"}>Gib deine user ID ein</Text>
                <EditableText multiline={false}
                              minLines={1}
                              maxLines={1}
                              placeholder={"68273"}
                              className={"textInput"}
                              value={this.state.textInput}
                              onConfirm={this.authenticate}
                              onChange={this.updateText}
                              onCancel={() => this.setState({textInput: ""})}
                />
                <Button rightIcon="arrow-right" intent="success" className={"button"} onClick={this.authenticate}/>
                <Text tagName={"p"}>Bei fragen, schick uns eine email.</Text>
            </div>
        );
    }

}

export default AuthView;
