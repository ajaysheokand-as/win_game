
 const readToken = () => {
    return localStorage.getItem("token")
}

const writeToken = (token) =>{
    localStorage.setItem("token",token)
}

const deleteToken = () => {
    localStorage.removeItem("token");
}

export {readToken, writeToken, deleteToken};