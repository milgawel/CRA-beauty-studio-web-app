import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.927255,
      lng: 22.229455
    },
    zoom: 16
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%', marginTop: '40px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyD5FrAePpNubawU0lD3yg1idHrNl8MYd6Y"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.927255}
            lng={22.229455}
            text={<i class="fas fa-map-marker-alt"></i>}
          />
        </GoogleMapReact>
      </div>
    );
  }
} 
export default GoogleMap;