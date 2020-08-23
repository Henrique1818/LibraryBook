import React, { useEffect, useState } from 'react';

import api from '../../services/api';


function Book(props) {
    const category = props.location.search
    const [filters, setFilter] = useState([])

    useEffect(() => {
        api.get(`/library/book${category}`)
        .then(response => {
            setFilter(response.data)
            console.log(response.data)
        })
    },[])
    return (
    <div>{filters.map(filter => (
        <div key={filter._id}>
            <h2 >{filter.title}</h2>
            <h2>{filter.description}</h2>
        </div>
    ))}</div>
    )
}

export default Book;