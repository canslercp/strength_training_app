import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ProgramPage = () => {

    let { id: programId } = useParams();
    let [program, setProgram] = useState(null)

    useEffect(() => {
        getProgram()
    }, [programId])

    let getProgram = async () => {
        try {
            console.log('Fetching program with ID:', programId)
            let response = await fetch(`/api/programs/${programId}/`)
            console.log('Response status:', response.status)
            let data = await response.json()
            console.log('Program data:', data)
            setProgram(data)
        } catch (error) {
            console.error('Error fetching program:', error)
        }
    }

    return (
        <div>
            <p>ProgramPage is rendering for ID: {programId}</p>
            {program ? (
                <>
                    <h3>{program.focus}</h3>
                    <ul>
                        <li>{program.emphasis} emphasis</li>
                        <li>{program.duration} weeks</li>
                    </ul>
                </>
            ) : (
                <p>Loading program or program not found...</p>
            )}
        </div>
    );
}

export default ProgramPage