import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import axios from 'axios'

class ElementDisplay extends Component {
    constructor(props){
        super(props)

        this.state = {
            elementName: this.props.elementName,
            elementContent: this.props.elementContent
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Col lg={12}>
                        <strong>{ this.state.elementName }</strong>: {this.state.elementContent}
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Title