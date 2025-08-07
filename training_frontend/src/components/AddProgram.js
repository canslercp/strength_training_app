import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const AddProgram = () => {
    return (
        <Link to="/programs/new">
            <AddIcon/>
        </Link>
    )
}
export default AddProgram