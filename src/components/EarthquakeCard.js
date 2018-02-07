import React, { Component } from 'react'
import axios from 'axios'

class EarthquakeCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            earthquakeId: this.props.earthquakeId
        }
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
                <Grid>
                    {
                        this.state.earthquakeId ?
                            <Col xs={10} xsOffset={1}>
                                <Row> Placeholder Name </Row>
                            </Col>
                        :   
                            <div> Loading .. </div>
                    }
                </Grid>
            </div>
        )
    }
}

export default EarthquakeCard