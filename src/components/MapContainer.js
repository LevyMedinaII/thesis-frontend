import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px'
}

const mapStyle = {
    width: '100%',
    height: '80%'
}
export class MapContainer extends Component {
    render() {
        
        return (
            <div style={mapContainerStyle}>
                <Map
                    style={mapStyle}
                    google={this.props.google}
                    zoom={5}
                    initialCenter={{
                        lat: this.props.earthquake_lat,
                        lng: this.props.earthquake_long
                    }}>
                    <Marker
                        name={this.props.earthquake_name}
                        position={{ lat: this.props.earthquake_lat, lng: this.props.earthquake_long }} />
                {
                    
                    // <InfoWindow onClose={this.onInfoWindowClose}>
                    //     <div>
                    //         <h1>{this.state.selectedPlace.name}</h1>
                    //     </div>
                    // </InfoWindow>
                }
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBrEbxas2QZaGrPz-S3vlf0mfJjkiBVBIc'
})(MapContainer)