import React, {useEffect, useState} from 'react'
import axios from 'axios'
import list from 

const international = () =>{
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://covid19.mathdro.id/api")
            .then((response) => setUsers(response.data))
    }, [])
    return (
        <div>
            <h1>International</h1>
            <>
                {
                    users.map((item) =>{
                        return(
                            <Card

                            />
                        )
                    })
                }
            </>
        </div>
    )
}

export default international;
