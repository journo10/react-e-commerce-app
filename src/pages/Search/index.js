import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className="d-flex">
            <input
                name='search'
                value={search}
                className="form-control me-sm-2"
                type="text" placeholder="Ara"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark sm-0 mx-2" type="submit">Ara</button>
        </div>
    )
}

export default Search