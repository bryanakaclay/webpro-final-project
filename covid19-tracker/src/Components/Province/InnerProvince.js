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
            <table border="1" className="table-container">
                <tr>
                    <th className="table-value-first">No</th>
                    <th className="table-value-second">Province</th>
                    <th className="table-value-third">Confirmed</th>
                    <th className="table-value-fourth">Recovered</th>
                    <th className="table-value-fifth">Death</th>
                </tr>
                {provinceData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table-value-first"scope="row" key={item.fid}>{index + 1}</th>
                            <th className="table-value-second">{item.provinsi}</th>
                            <th className="table-value-third"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-fourth"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-fifth"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}