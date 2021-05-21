import React from 'react'
import Topic from './Topic'

const TopicEdit = (props) => {
    const { sub } = props
    return(
        <div>
            <h1>TopicEdit Page</h1>
            <form action={`/subs/${sub.id}/topics/${topic.id}`} method='post'>
                <p>body</p>
                <input defaultValue={topic.body} name='topic[body]' />
                <p>name</p>
                <input defaultValue={topic.body} name='topic[body]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default TopicEdit