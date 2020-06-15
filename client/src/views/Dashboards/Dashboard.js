import React, { Component } from "react";
import { connect } from "react-redux";
import Maps from "./Maps";
import Devices from "./Devices";
import { getDevices } from "../../actions/devices";
import { getLocation } from "../../actions/location";
import "./style.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      locations: [],
      device: "",
      page: 1
    };
  }

  componentDidMount() {
    if (!this.props.auth.token) {
      this.props.history.push("/");
    } else {
      const { dispatch } = this.props;
      dispatch(getDevices());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.devices.devices.data !== this.props.devices.devices.data) {
      const { devices } = this.props.devices;
      this.setState(
        {
          deviceList: devices.data,
          device: devices.data ? devices.data[1].id : ""
        },
        () => this.getLocations()
      );
    }

    if (
      prevProps.devices.locations.data !== this.props.devices.locations.data
    ) {
      const { locations } = this.props.devices;
      this.setState({
        locations: locations.data
      });
    }
  }

  getLocations = (status = false) => {
    const { dispatch } = this.props;
    const { device, page } = this.state;
    dispatch(getLocation({ device, page, status }));
  };

  setPageValue = page => {
    this.setState({ page }, () => this.getLocations());
  };

  changeDevice = (status, device) => {
    this.setState({ device }, () => this.getLocations(status));
  };
  render() {
    const { deviceList, locations, device, page } = this.state;

    return (
      <div className="device-map-container">
        <div className="left-container map">
          {locations ? (
            <Maps
              locations={locations}
              device={device}
              page={page}
              setPageValue={page => this.setPageValue(page)}
            />
          ) : (
            ""
          )}
        </div>

        <div className="right-container devices">
          {deviceList ? (
            <Devices
              devices={deviceList}
              changeDevice={(status, device) =>
                this.changeDevice(status, device)
              }
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
