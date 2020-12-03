import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../App.css'
import NumberFormat from "react-number-format"

export default function InnerInternational (){
    const [confirmed, getConfirmed] = useState("")
    const [recovered, getRecovered] = useState("")
    const [death, getDeaths] = useState("")
    useEffect(() =>{
        axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => {
            getConfirmed (response.data.confirmed.value)
            getRecovered (response.data.recovered.value)
            getDeaths (response.data.deaths.value)
        })
        .catch(err => {console.log(err)})
    }, [])

    return(
        <>
            <table className="table-container">
                <tr>
                    <th className="card_confirmed">
                        <p>Confirmed</p>
                        <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                    </th>
                    <th className="card_recovered">
                        <p>Recovered</p>
                        <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                    </th>
                    <th className="card_death">
                        <p>Death</p>
                        <NumberFormat value={death} thousandSeparator={true} displayType={'text'}/>
                    </th>
                </tr>
            </table>
        </>
    )
}