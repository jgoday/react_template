import React, {PropTypes} from "react"
import {Link} from "react-router"

class MessageList extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    renderMessage(message, index)
    {
        return (<li key={index}>
            <Link to={`/message/${index}`}>{message.who}</Link>
        </li>)
    }

    render()
    {
        return (<div>
            <ul>
            {this.props.messages.map(this.renderMessage)}
            </ul>
        </div>)
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageList