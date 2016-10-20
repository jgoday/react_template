import React, {PropTypes} from "react"

import Message from "./Message"
import MessageList from "./MessageList"

class App extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            messages: [
                {who: "Person1", text: "Hello"},
                {who: "Person2", text: "Goodbye"}
            ]
            , selectedMessage: null
        }
    }

    componentWillMount()
    {
        this.loadSelectedMessageFromParam(this.props.params.id)
    }

    componentWillReceiveProps(props)
    {
        this.loadSelectedMessageFromParam(props.params.id)
    }
    
    loadSelectedMessageFromParam(id)
    {   
        if (id)
        {
            this.setState({
                selectedMessage: this.state.messages[id]
            })
        }
    }
 
    renderSelectedMessage()
    {
        if (this.state.selectedMessage)
        {
            const message = this.state.selectedMessage

            return (<Message message={message} />)
        }
        else
        {
            return (<span>{"No message selected"}</span>)
        }
     }

    render()
    {
        return (<div>
            <h1>{"Messages"}</h1>
            <div className="column">
                <MessageList messages={this.state.messages} />
            </div>
            <div className="column">
                {this.renderSelectedMessage()}
            </div>
        </div>)
    }
}

App.propTypes = {
}

export default App