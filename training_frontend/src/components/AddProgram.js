import React from 'react'
import { link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const AddProgram = () => {
    return (
        <link to="/program/new">
            <AddIcon/>
        </link>
    )
}
export default AddProgram