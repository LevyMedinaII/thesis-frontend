import React, { Component } from 'react'
import axios from 'axios' 

import LoadingProgress from './LoadingProgress'
import EarthquakeCard from './EarthquakeCard'

const gridStyle = {
    display: 'flex'
}

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
                        <div style={gridStyle}>
                            {
                                this.state.earthquakeData.map((value, key) => {
                                    return(
                                        <EarthquakeCard
                                            key={key}
                                            earthquake_name={value.name}
                                            earthquake_lat={value.lat}
                                            earthquake_long={value.long}
                                            earthquake_pga={value.pga}
                                            earthquake_pgv={value.pgv}
                                            earthquake_pgd={value.pgd}
                                            earthquake_magnitude={value.magnitude}
                                        />
                                    )
                                })
                            }
                        </div>
                    :
                        <LoadingProgress />
                }
            </div>
        )
    }
}

export default CardGrid