import React, { Component } from 'react';
import './BedView.css';

import {Text, Button, Intent} from '@blueprintjs/core'

class BedView extends Component {
    constructor() {
        super();

        this.state = {
            total: 0,
            available: 0
        };
    }

    updateText = (type) => (event) => {
        let val = event.target.value;

        val = this.prune_text(val);
        if(!this.validate_value(val)) return;

        let res = {};

        res[type] = val;
        this.setState(res);
    };

    increment = (type) => () => {
        let val = this.state[type] + 1;

        let res = {};
        res[type] = val;
        this.setState(res);
    };


    decrement = (type) => () => {
        let val = this.state[type] - 1;

        if(!this.validate_value(val)) return;

        let res = {};
        res[type] = val;
        this.setState(res);
    };

    prune_text(text){
        try{
            return parseInt(text);
        } catch (e) {
            return false
        }
    }

    validate_value(value){
        if(value > -1){
            return true;
        } else {
            return false;
        }
    }


    render(){
        return (
            <div className="BedView">
                <div className={"section"}>
                    <input
                        className={"input"}
                        value={this.state.total}
                        onChange={this.updateText('total')}
                    /> <Text tagName={"h1"}>Total</Text>

                    <br/>
                    <Button rightIcon="plus"
                            intent={Intent.SUCCESS}
                            className={"buttonL"}
                            onClick={this.increment('total')}
                            large={true}
                    />
                    <Button rightIcon="minus"
                            intent={Intent.DANGER}
                            className={"buttonR"}
                            onClick={this.decrement('total')}
                            large={true}
                    />
                </div>
                <div className={"section"}>
                    <input
                        className={"input"}
                        value={this.state.available}
                        onChange={this.updateText('available')}
                    /> <Text tagName={"h1"}>Verfügbar</Text>
                    <br/>
                    <Button rightIcon="plus"
                            intent={Intent.SUCCESS}
                            className={"buttonL"}
                            onClick={this.increment('available')}
                            large={true}
                    />
                    <Button rightIcon="minus"
                            intent={Intent.DANGER}
                            className={"buttonR"}
                            onClick={this.decrement('available')}
                            large={true}
                    />
                </div>

                <Text tagName={"p"}>Bei fragen, schick uns eine email.</Text>
            </div>
        );
    }

}

export default BedView;
