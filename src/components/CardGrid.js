import React, { Component } from 'react'
import axios from 'axios' 

import LoadingProgress from './LoadingProgress'
import EarthquakeCard from './EarthquakeCard'
import MapContainer from './MapContainer'

import { Row, Col } from 'react-bootstrap'

class CardGrid extends Component{
    constructor(props){
        super(props)
        
        this.state = {  
            earthquakeData: null
        }

        this.handleExpand = this.handleExpand.bind(this)
    }

    componentDidMount() {
        const requestURL = `http://localhost:8080/data`
        axios.get(requestURL)
            .then(res => {
                this.setState({ earthquakeData: res.data.earthquake_data })
            }).catch(err => {
                
            })
    }

    handleExpand(){
        this.setState({ isExpanded: !this.state.isExpanded })
    }

    render() {
        return(
            <div>
                {
                    this.state.earthquakeData ?
                        <Row style={{margin: 0, height: '90vh' }}>
                            <Col lg={4} style={{ overflowY: 'scroll', height: '100%'}}>
                                {
                                    this.state.earthquakeData.map((value, key) => {
                                        return(
                                            <EarthquakeCard
                                                key={key}
                                                earthquake_name={value.name}
                                                earthquake_lat={parseFloat(value.lat)}
                                                earthquake_long={parseFloat(value.long)}
                                                earthquake_pga={value.pga}
                                                earthquake_pgv={value.pgv}
                                                earthquake_pgd={value.pgd}
                                                earthquake_magnitude={value.magnitude}
                                            />
                                        )
                                    })
                                }
                            </Col>
                            <Col lg={8}>
                                <MapContainer earthquake_data={this.state.earthquakeData}/>
                            </Col>
                        </Row>
                    :
                        <LoadingProgress />
                }
            </div>
        )
    }
}

export default CardGrid