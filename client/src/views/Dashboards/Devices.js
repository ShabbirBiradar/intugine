import React, { Component } from "react";
import "./style.scss";

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ devices: this.props.devices });
    }
  }

  chnageDevice = device => {
    this.props.changeDevice(false, device);
  };

  onCheck=(e, device)=>{
    this.props.changeDevice(e.target.checked, device);
  }
  render() {
    const { devices } = this.state;
    return (
      <div className="device-list">
        <div className="title">
          <h4>Devices</h4>
        </div>
        <div className="device-body">
          {devices.map((i, k) => (
            <div key={k} className="device-content">
              <div className="name" onClick={() => this.chnageDevice(i.id)}>
                {i.id}
              </div>
              <div className="check" onChange={(e)=>this.onCheck(e, i.id)}>
                <input type="checkbox" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Devices;
