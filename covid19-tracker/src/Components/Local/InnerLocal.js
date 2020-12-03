import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NumberFormat from "react-number-format"
import '../../App.css'

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
        .catch(err => {console.log(err)})
    }, [])

    return(
        <div className="table-container">
            <table border="1">
                <tr>
                    <th className="confirmed-container">Confirmed</th>
                    <th className="recovered-container">Recovered</th>
                    <th className="death-container">Death</th>
                </tr>
                <tr>
                    <th className="confirmed-container"><NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/></th>
                    <th className="recovered-container"><NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/></th>
                    <th className="death-container"><NumberFormat value={death} thousandSeparator={true} displayType={'text'}/></th>
                </tr>
            </table>
        </div>    
    )
}