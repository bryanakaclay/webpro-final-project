import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NumberFormat from "react-number-format"
import Card from 'react-native-elements'

export default function InnerInternational (){
    const [confirmed, setConfirmed] = useState("")
    const [recovered, setRecovered] = useState("")
    const [death, setDeaths] = useState("")
    useEffect(() =>{
        axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => {
            setConfirmed (response.data.confirmed.value)
            setRecovered (response.data.recovered.value)
            setDeaths (response.data.deaths.value)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
        <Card>
            <Card.Title>Confirmed</Card.Title>
        </Card>
            <ul>
                <li>
                    <h2>Confirmed</h2>
                </li>
                <li>
                    <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                </li>
            </ul>
            <ul>
                <li>
                    <h2>Recovered</h2>
                </li>
                <li>
                    <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                </li>
            </ul>  
            <ul>
                <li>
                    <h2>Death</h2>
                </li>
                <li>
                    <NumberFormat value={death} thousandSeparator={true} displayType={'text'}/>
                </li>
            </ul>
        </>
    )
}