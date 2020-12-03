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
        <>
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
    </>
    )
}

//          <table border="1">
//             <tr>
//                 <th>
//                     <h1 className="card_confirmed">
//                         <p>Confirmed</p>
//                         <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
//                     </h1>
//                 </th>
//                 <th>
//                     <h1 className="card_recovered">
//                         <p>Recovered</p>
//                         <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
//                     </h1>
//                 </th>
//                 <th>
//                     <h1 className="card_death">
//                         <p>Death</p>
//                         <NumberFormat value={death} thousandSeparator={true} displayType={'text'}/>
//                     </h1>
//                 </th>
//             </tr>
//         </table>