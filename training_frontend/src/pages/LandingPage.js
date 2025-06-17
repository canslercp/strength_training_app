import React, {useState, useEffect} from'react'
import ListItem from '../components/ListItem'
import AddProgram from '../components/AddProgram'

const LandingPage = () => {

    let [programs, setPrograms] = useState([])

    useEffect(() => {
        getPrograms()
    }, [])

    let getPrograms = async () => {
        let response = await fetch('http://127.0.0.1:8000/weightlifting/programs/')
        let data = await response.json()
        console.log('data: ', data)
        setPrograms(data)
    }



    return (
        <div>
            <h3>Programs</h3>
            <ul>
                {programs.map((program, index) => (
                    <ListItem key={index} program={program} />
                ))}
            </ul>
            <AddProgram />
        </div>
    )
}

export default LandingPage