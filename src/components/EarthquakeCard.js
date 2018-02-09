import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { Col } from 'react-bootstrap'

const cardStyle = {
    width: '100%',
    marginTop: 20,
    cardHeader: {
        backgroundColor: '#00BCD4',
    },
    cardText: {
        fontSize: 14   
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
            <Col lg={12}>
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
            </Col>
        )
    }
}

export default EarthquakeCard