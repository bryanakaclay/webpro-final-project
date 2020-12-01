import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Province = () =>{
    const [prov, setProvince] = useState([])
    const [confirmed, setConfirmed] = useState([])
    const [recovered, setRecovered] = useState([])
    const [death, setDeaths] = useState([])
    useEffect(() =>{
        axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => {
            setProvince (response.data.fid.value)
            setConfirmed (response.data.kasusPosi.value)
            setRecovered (response.data.kasusSemb.value)
            setDeaths (response.data.kasusMeni.value)
        })
    }, [])
}

export default Province