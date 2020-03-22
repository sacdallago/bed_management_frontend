// Core
import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Auth from "../storage/Auth";

// Components
import {Text, Button, Intent} from '@blueprintjs/core'

// Styles
import './BedView.css';

// Queries
const GET_BEDS = gql`
query getHospital($input: GetHospitalInput!) {
  getHospital(input: $input) {
    hospital{
      totalBeds
      availableBeds
      unavailableBeds
    }
      
    }
  }
`;

function BedView(){
    const auth = new Auth();
    const [total, setTotal] = useState(0);
    const [available, setAvailable] = useState(0);
    const {data, loading, error} = useQuery(GET_BEDS, {
        variables: {
            input: {
                hospitalId: auth.getKey()
            }
        }
    });

    useEffect(() => {
        if(data && data.getHospital) {
            console.log(data)
            setTotal(data.getHospital.hospital.totalBeds);
            setAvailable(data.getHospital.hospital.availableBeds);
        }
    }, [data])

    const updateType = {
        'total': setTotal,
        'available': setAvailable
    };

    const valueType = {
        'total': total,
        'available': available
    };

    const updateText = (type) => (event) => {
        let val = event.target.value;

        val = prune_text(val);
        if(!validate_value(val)) return;

        updateType[type](val);
    };

    const increment = (type) => () => {
        let val = valueType[type] + 1;

        updateType[type](val);
    };

    const decrement = (type) => () => {
        let val = valueType[type] - 1;

        if(!validate_value(val)) return;

        updateType[type](val);
    };

    const prune_text = (text) => {
        try{
            return parseInt(text);
        } catch (e) {
            return false
        }
    };

    const validate_value = (value) => {
        return value > -1;
    };

    return (
        <div className="BedView">
            <div className={"section"}>
                <input
                    className={"input"}
                    value={total}
                    onChange={updateText('total')}
                /> <Text tagName={"h1"}>Total</Text>

                <br/>
                <Button rightIcon="plus"
                        intent={Intent.SUCCESS}
                        className={"buttonL"}
                        onClick={increment('total')}
                        large={true}
                        loading={loading}
                />
                <Button rightIcon="minus"
                        intent={Intent.DANGER}
                        className={"buttonR"}
                        onClick={decrement('total')}
                        large={true}
                        loading={loading}
                />
            </div>
            <div className={"section"}>
                <input
                    className={"input"}
                    value={available}
                    onChange={updateText('available')}
                /> <Text tagName={"h1"}>Verfügbar</Text>
                <br/>
                <Button rightIcon="plus"
                        intent={Intent.SUCCESS}
                        className={"buttonL"}
                        onClick={increment('available')}
                        large={true}
                        loading={loading}
                />
                <Button rightIcon="minus"
                        intent={Intent.DANGER}
                        className={"buttonR"}
                        onClick={decrement('available')}
                        large={true}
                        loading={loading}
                />
            </div>

            <Text tagName={"p"}>Bei fragen, schick uns eine email.</Text>
        </div>
    );
}

export default BedView;
