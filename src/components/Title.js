import React, { Component } from 'react'

class Title extends Component {
    constructor(props){
        super(props)

        this.state = {
            isChristSupot: false
        }

        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick() {
        this.setState({ isChristSupot: !this.state.isChristSupot })
    }

    render(){
        return(
            <div>
                <h1>
                    { this.state.isChristSupot ? "Supot si Christ" : "Supot si Janzrel" }
                </h1>
                <button onClick={() => this.onButtonClick() }>
                    Change Supotness
                </button>
            </div>

        )
    }

}

export default Title