import React, {PropTypes} from "react"

class Message extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (<div>
            <ul>
                <li><i>Who: </i>{this.props.message.who}</li>
                <li><i>Text: </i>{this.props.message.text}</li>
            </ul>
        </div>)
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message