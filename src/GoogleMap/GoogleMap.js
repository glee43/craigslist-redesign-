import React from "react";
import { compose, withProps } from "recompose";
import { Circle, GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const MapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDt45lWlpaoprgyfD2dzxOMaQjmgwfks8U&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    < GoogleMap defaultZoom={props.zoom} defaultCenter={{ lat: props.lat, lng: props.lon }}>
        {props.markers.map(m => (<Marker key={m.id}
            position={{ lat: m.lat, lng: m.lon }}
            title={m.venue}
            onClick={e => props.scrollTo(m.venue + ":" + m.id)} />))}
    </GoogleMap>
));

export default MapComponent;
