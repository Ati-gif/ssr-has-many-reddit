import React from 'react'
const Topic = (props) => {
    const { sub } = props
    return(
        <div>
            <h1>Topic Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>
        </div>
    )
}
export default Topic