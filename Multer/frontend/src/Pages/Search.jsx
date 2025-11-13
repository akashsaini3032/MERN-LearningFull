import { useState } from "react"
import axios from "axios"
import BackendUrl from "../Config/BackendUrl"
const Search = () => {
    const [mydata, setMydata] = useState([])
    const [rno, setRno] = useState("")
    const handleSubmit = async () => {
        let api = `${BackendUrl}search/?rno=${rno}`
        const response = await axios.get(api)
        // console.log(response.data)
        setMydata(response.data)
    }
    const ans = mydata.map((key) => {
        return (
            <>
                <h1>Rollno: {key.rollno}</h1>
                <h1>name: {key.name}</h1>
                <h1>city: {key.city}</h1>
                <h1>fees: {key.fees}</h1>
            </>
        )
    })
    return (
        <>
            {/* <h1>Search Data</h1>
            <input type="text" onChange={(e) => { setRno(e.target.value) }} />
            <button onClick={handleSubmit}>Search</button>
            {ans} */}
        </>
    )
}
export default Search