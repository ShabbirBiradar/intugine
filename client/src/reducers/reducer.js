import { DeviceConstants, LocationConstants } from "../constants/constatns";
export default (state = [], actions) => {
  switch (actions.type) {
    case DeviceConstants.GET_DEVICE_SUCCESS:
      return {
        ...state,
        devices: actions.data
      };

    case DeviceConstants.GET_DEVICE_FAILED:
      return {
        ...state,
        error: actions.e
      };

    case LocationConstants.GET_LOCATION_SUCCESS:
      return {
        ...state,
        locations: actions.data
      };

    case LocationConstants.GET_LOCATION_FAILED:
      return {
        ...state,
        error: actions.e
      };

    default:
      return {
        devices: state,
        locations: []
      };
  }
};
