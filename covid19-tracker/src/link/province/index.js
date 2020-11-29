import React, {useEffect, useState} from 'react'
import axios from 'axios'
import card from '../../component'

const province = () =>{
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get("https://covid19.mathdro.id/api")
            .then((response) => setUsers(response.data))
    }, [])
    return (
        <div>
            <h1>Province Case</h1>
        </div>
    )
}

export default province;