import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker } from "react-google-maps"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ marginTop: 20, height: `100%` }} />,
        containerElement: <div style={{ marginTop: 20, height: `85vh` }} />,
        mapElement: <div style={{ marginTop: 20, height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
    )((props) =>
    <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 10, lng: 10 }}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {
                props.earthquake_data.map((value, key) => (
                    <Marker
                        key={key}
                        position={{
                            lat: parseFloat(value.lat),
                            lng: parseFloat(value.long)
                        }}
                    />
                ))
            }
        </MarkerClusterer>
    </GoogleMap>
)

class MapContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <MyMapComponent
                isMarkerShown={true}
                earthquake_data={this.props.earthquake_data}
            />
        )
    }
}
export default MapContainer