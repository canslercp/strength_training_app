import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({program}) => {
    return (
        <Link to={`/programs/${program.id}`}>
            <h3>{program.focus}</h3>
        </Link>
    )
}

export default ListItem