import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../App.css'
import NumberFormat from "react-number-format"

export default function InnerProvince (){
    const [provinceData, getProvince] = useState([]);
    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(response => {getProvince(response.data.data)})
            .catch(err => {console.log(err)})
    }, []);
    console.log(provinceData)
    return(
        <div>
            <table border="1">
                <tr>
                    <th>No</th>
                    <th>Province</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                </tr>
                {provinceData.map((item, index) => {
                    return(
                        <tr>
                            <th scope="row" key={item.fid}>{index + 1}</th>
                            <th>{item.provinsi}</th>
                            <th><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                   )
                })}
            </table>
        </div>    
    )
}