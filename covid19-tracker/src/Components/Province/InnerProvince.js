import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NumberFormat from "react-number-format";

export default function InnerProvince (){
    const [prov, setProvince] = useState([])
    const [namaprov, setNameProvince] = useState([])
    const [confirmed, setConfirmed] = useState([])
    const [recovered, setRecovered] = useState([])
    const [death, setDeaths] = useState([])
    useEffect(() =>{
        axios
        .get("https://indonesia-covid-19.mathdro.id//provinsi")
        .then((response) => {
            setProvince (response.data.fid)
            setNameProvince (response.data.provinsi)
            setConfirmed (response.data.kasusPosi)
            setRecovered (response.data.kasusSemb)
            setDeaths (response.data.kasusMeni)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
            <table border="1">
                <tr>
                    <th>
                        Provinsi
                    </th>
                    <th>
                        Positif
                    </th>
                    <th>
                        Sembuh
                    </th>
                    <th>
                        Meninggal
                    </th>
                </tr>
                {prov.map((item) =>{
                    return(
                        <tr>
                            <th>
                                {namaprov}
                            </th>
                            <th>
                                {<NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>}
                            </th>
                            <th>
                                <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                            </th>
                            <th>
                                <NumberFormat value={death} thousandSeparator={true} displayType={'text'}/>
                            </th>
                        </tr>
                    )
                })}
            </table>
        </>    
    )
}