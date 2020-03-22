// Core
import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Auth from "../storage/Auth";

// Components
import {Text, Button, Intent, ProgressBar} from '@blueprintjs/core'

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

const UPDATE_TOTAL_BEDS = gql`
mutation updateNumberOfBeds($input: UpdateNumberOfBedsInput!){
      updateNumberOfBeds(input: $input) {
        success
      }
    }
`;

const UPDATE_AVAILABLE_BEDS = gql`
mutation updateNumberOfAvailableBeds($input: UpdateNumberOfAvailableBedsInput!){
      updateNumberOfAvailableBeds(input: $input) {
        success
      }
    }
`;

const valueTypes = {
    TOTAL: 'total',
    AVAILABLE: 'available'
};

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
    const [updateTotalBeds, {s_1}] = useMutation(UPDATE_TOTAL_BEDS);
    const [updateAvailableBeds, {s_2}] = useMutation(UPDATE_AVAILABLE_BEDS);


    useEffect(() => {
        if(data && data.getHospital) {
            setTotal(data.getHospital.hospital.totalBeds);
            setAvailable(data.getHospital.hospital.availableBeds);
        }
    }, [data])

    const updateType = {
        'total': (total) => {
            updateTotalBeds({
                variables: {
                    input: {
                        hospitalId: auth.getKey(),
                        numberOfBeds: parseInt(total)
                    }
                }
            });
            console.log(s_1);
            setTotal(total)
        },
        'available': (total) => {
            updateAvailableBeds({
                variables: {
                    input: {
                        hospitalId: auth.getKey(),
                        numberOfAvailableBeds: parseInt(total)
                    }
                }
            });
            console.log(s_2);
            setAvailable(total)
        },
    };

    const valueType = {
        'total': total,
        'available': available
    };

    const updateText = (type) => (event) => {
        let val = event.target.value;

        val = prune_text(val);
        if(!validate_value(val, type)) return;

        updateType[type](val);
    };

    const increment = (type) => () => {
        let val = valueType[type] + 1;

        if(!validate_value(val, type)) return;

        updateType[type](val);
    };

    const decrement = (type) => () => {
        let val = valueType[type] - 1;

        if(!validate_value(val, type)) return;

        updateType[type](val);
    };

    const prune_text = (text) => {
        try{
            return parseInt(text);
        } catch (e) {
            return false
        }
    };

    const validate_value = (value, type) => {
        if(type === valueTypes.AVAILABLE){
            return value > -1 && value <= total;
        } else {
            return value > -1;
        }
    };

    return (
        <div className="BedView">
            <div className={"section"}>
                <input
                    className={"input"}
                    value={total}
                    onChange={updateText('total')}
                /> <Text tagName={"h1"}>Insgesamt</Text>

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
            <Text tagName={"p"}>Belastung {parseInt((1-available/total)*100)}%</Text>
            <ProgressBar animate={false} value={1-(available/total)} intent={(1-(available/total) < .8 ? Intent.SUCCESS : Intent.DANGER)}/>
            <br/><br/><br/><br/><br/><br/><br/>
            <Button rightIcon="log-out"
                    intent={Intent.WARNING}
                    onClick={() => auth.logoff() && window.location.reload()}
                    text={"Log out"}
                    loading={loading}
            />
            <br/><br/><br/><br/><br/><br/><br/>
            <Text tagName={"p"}>Bei fragen, schick uns eine email.</Text>
        </div>
    );
}

export default BedView;
