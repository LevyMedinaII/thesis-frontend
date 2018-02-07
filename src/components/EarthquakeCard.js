import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import { Card, CardHeader, CardText } from 'material-ui/Card'

import MapContainer from './MapContainer'

const cardStyle = {
    maxWidth: '400px',
    margin: 20,
    cardHeader: {
        backgroundColor: '#00BCD4',
    },
    cardText: {
        fontSize: 14   
    }
}

const dialogStyle = {
    bodyStyle: {
        height: '75vh',
        padding: 0
    }
}

class EarthquakeCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            open: false
        }

        this.handleExpand = this.handleExpand.bind(this)
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleExpand(){
        this.handleOpen()
    }

    render() {
        return(
            <div>
                <Card
                    style={cardStyle}
                    expanded={true}
                    onExpandChange={() => this.handleExpand()}>
                    <CardHeader
                        className="earthquake-card-header"
                        title={this.props.earthquake_name}
                        subtitle={`${this.props.earthquake_lat}, ${this.props.earthquake_long}`}
                        actAsExpander={true}
                        style={cardStyle.cardHeader}
                    />
                    <CardText expandable={true} style={cardStyle.cardText}>
                        <strong> Magnitude: </strong> {this.props.earthquake_magnitude}
                        <br />
                        <strong> PGA (g): </strong> {this.props.earthquake_pga}
                        <br />
                        <strong> PGV (cm): </strong> {this.props.earthquake_pgv}
                        <br />
                        <strong> PGD (cm): </strong> {this.props.earthquake_pgd}
                    </CardText>
                </Card>
                <Dialog
                    title={this.props.earthquake_name}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    bodyStyle={dialogStyle.bodyStyle}
                >
                    <MapContainer
                        earthquake_name={this.props.earthquake_name}
                        earthquake_lat={this.props.earthquake_lat}
                        earthquake_long={this.props.earthquake_long}/>
                </Dialog>
            </div>
        )
    }
}

export default EarthquakeCard