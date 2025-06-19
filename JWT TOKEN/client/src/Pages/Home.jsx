import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
    const usrAuthentication = async () => {
        const token = localStorage.getItem("Token")
        if (!token) {
            navigate("/login")
        }
        let api = "http://localhost:8000/usr/auth"
        try {
            const response = await axios.post(api, null, {
                headers: {
                    "auth-token": token
                }
            })
            console.log(response.data)
            localStorage.setItem("usrName",response.data.name)
            localStorage.setItem("usrEmail",response.data.email)
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        usrAuthentication()
    }, [])
    return (
        <>
            Home Page
        </>
    )
}
export default Home