// GET
export const fetchUsers = () => {
    return(dispatch) => {
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({type: "FETCH_USERS", payload: users}))
    } 
}
