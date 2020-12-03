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
                    <th>
                        <div className="confirmed-container">
                            Positif
                        </div>
                    </th>
                    <th>
                        <div className="recovered-container">
                            Sembuh
                        </div>
                    </th>
                    <th>
                        <div className="death-container">
                            Meninggoy
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