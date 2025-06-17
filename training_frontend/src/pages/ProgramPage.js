import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ProgramPage = () => {

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

    return (
        <div>
            {program && (
                <>
                    <h3>{program.focus}</h3>
                    <ul>
                        <li>{program.emphasis} emphasis</li>
                        <li>{program.duration} weeks</li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default ProgramPage