import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../App.css'

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
            {provinceData?.map((item, index) => {
                <tr key={index}>
                    <th scope="row" key={item.fid}>{index + 1}</th>
                    <td>{item.provinsi}</td>
                    <td>{item.kasusPosi}</td>
                    <td>{item.kasusSemb}</td>
                    <td>{item.kasusMeni}</td>
                </tr>
            })}
        </div>    
    )
}