import React from 'react'
import {useSelector} from 'react-redux'


const User = () => {
    const users = useSelector(state => state.users)

    // console.log(users)
    return (
        <div>
           {users.map(u => u.username)} 
            
        </div>
    )
}

export default User
