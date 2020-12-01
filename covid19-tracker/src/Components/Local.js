import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Local = () =>{
    const [confirmed, setConfirmed] = useState([])
    const [recovered, setRecovered] = useState([])
    const [death, setDeaths] = useState([])
    useEffect(() =>{
        axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => {
            setConfirmed (response.data.jumlahKasus.value)
            setRecovered (response.data.sembuh.value)
            setDeaths (response.data.meninggal.value)
        })
    }, [])
}

export default Local