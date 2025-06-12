import axios from "axios"
import { useState, useEffect } from "react"
import BackendUrl from "../Config/BackendUrl"
import Table from 'react-bootstrap/Table';
const Display = () => {
    const [mydata, setMydata] = useState([])
    const loadData = async () => {
        let api = `${BackendUrl}display`
        const response =await axios.get(api)
        setMydata(response.data)
    }
    useEffect(() => {
        loadData()
    }, [])
    const ans = mydata.map((key) => {
        return (
            <tr>
                <td>
                <img src={key.image} height={50}/> </td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                
            </tr>
        )

    })

    return (
        <>
            <Table>
                <thead>
                    <tr>
<th>Name</th>
<th>Name</th>
<th>Name</th>
<th>Name</th>
<th>images</th>
                    </tr>
                </thead>
                <tbody>

                    {ans}
                </tbody>
            </Table>

        </>
    )
}
export default Display