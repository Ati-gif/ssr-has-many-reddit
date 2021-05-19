import React from 'react'
const Topics = (props) => {
    const { sub } = props
    return(
        <div>
            <h1>Topics Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>
        </div>
    )
}
export default Topics