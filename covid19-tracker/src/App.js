import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {international, local, province} from './link'

const App = () =>{
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://covid19.mathdro.id/api")
            .then((response) => setUsers(response.data))
    }, [])
    console.log(users)
    return(
        <div>
            <h1>International</h1>
        </div>
    )
}

export default App;