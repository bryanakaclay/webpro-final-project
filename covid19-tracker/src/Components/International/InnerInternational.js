import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NumberFormat from "react-number-format"
import '../../App.css'

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
        .catch(err => {console.log(err)})
    }, [])

    return(
        <div className="table-container">
            <table border="1">
                <tr>
                    <th>
                        <div className="confirmed-container">
                            Confirmed
                        </div>
                    </th>
                    <th>
                        <div className="recovered-container">
                            Recovered
                        </div>
                    </th>
                    <th>
                        <div className="death-container">
                            Death
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="confirmed-container">
                            <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                        </div>
                    </th>
                    <th>
                        <div className="recovered-container">
                            <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                        </div>
                    </th>
                    <th>
                        <div className="death-container">
                            <NumberFormat value={death} thousandSeparator={true} displayType={'text'}/>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
    )
}