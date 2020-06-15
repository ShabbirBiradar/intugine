import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { GOOGLE_API_KEY } from "../../config";
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      device: "",
      page: 1
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        locations: this.props.locations,
        device: this.props.device,
        page: this.props.page
      });
    }
  }

  next = () => {
    let page = this.state.page + 1;
    this.setState({ page });
    this.props.setPageValue(page);
  };

  prev = () => {
    let page = this.state.page - 1;
    if (page < 1) {
      alert("Less then 0 page not allowed!");
    } else {
      this.setState({ page });
      this.props.setPageValue(page);
    }
  };

  render() {
    return (
      <div className="map-content">
        <div className="map-header">
          <div className="map-title">
            <h4>Maps ({this.state.device})</h4>
          </div>
          <div className="map-btn">
            <h4>
              <span className="page prev" onClick={this.prev}>
                &lt;
              </span>
              <span className="page page">Page : {this.state.page}</span>
              <span className="page next" onClick={this.next}>
                &gt;
              </span>
            </h4>
          </div>
        </div>

        <div className="map-body">
          <Map className="containerStyle" zoom={0} google={this.props.google}>
            {this.state.locations.map((i, k) => (
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={k}
                position={{
                  lat: i.gps ? i.gps[0] : 0,
                  lng: i.gps ? i.gps[1] : 0
                }}
              />
            ))}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
