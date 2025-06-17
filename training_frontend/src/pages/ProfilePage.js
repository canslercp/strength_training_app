import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ProgramPage = ({ match, history }) => {

    let { id: programId } = useParams();
    let [program, setProgram] = useState(null)

    useEffect(() => {
        getProgram()
    }, [programId])

    let getProgram = async () => {
        let response = await fetch(`/weightlifting/programs/${programId}/`)
        let data = await response.json()
        setProgram(data)
    }

    let deleteProgram = async () => {
        fetch(`/weightlifting/programs/${programId}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
            },
        })
        history.push('/')
    }

    return (
        <div>
            {program && (
                <>
                    <h3>{program.focus}</h3>
                    <ul>
                        <li>{program.emphasis} emphasis</li>
                        <li>{program.duration} weeks</li>
                    </ul>
                    <button onClick={deleteProgram}>Delete Program</button>
                </>
            )}
        </div>
    );
}

export default ProgramPage