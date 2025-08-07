import React, {useState, useEffect} from'react'
import ListItem from '../components/ListItem'

const LandingPage = () => {

    let [programs, setPrograms] = useState([])

    useEffect(() => {
        getPrograms()
    }, [])

    let getPrograms = async () => {
        try {
            console.log('Fetching programs...')
            let response = await fetch('/api/programs/')
            console.log('Response status:', response.status)
            let data = await response.json()
            console.log('data: ', data)
            setPrograms(data)
        } catch (error) {
            console.error('Error fetching programs:', error)
        }
    }



    return (
        <div>
            <h3>Programs</h3>
            <p>LandingPage is rendering!</p>
            <ul>
                {programs.length > 0 ? (
                    programs.map((program, index) => (
                        <ListItem key={index} program={program} />
                    ))
                ) : (
                    <p>No programs available or still loading...</p>
                )}
            </ul>
        </div>
    )
}

export default LandingPage