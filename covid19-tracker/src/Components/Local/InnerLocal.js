import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NumberFormat from "react-number-format";

export default function InnerLocal () {
    const [confirmed, setConfirmed] = useState("")
    const [recovered, setRecovered] = useState("")
    const [death, setDeaths] = useState("")
    useEffect(() =>{
        axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => {
            setConfirmed (response.data.jumlahKasus)
            setRecovered (response.data.sembuh)
            setDeaths (response.data.meninggal)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
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