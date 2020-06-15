import { DeviceConstants }  from "../constants/constatns";
import { getDeviceList } from "../services/devices.service";

export const getDevices=()=>{
    return (dispatch)=>{
        getDeviceList()
        .then(res=>dispatch(success(res)))
        .catch(e=>dispatch(error(e)));
    }

    function success(data){return {type: DeviceConstants.GET_DEVICE_SUCCESS, data}};
    function error(e){return {type: DeviceConstants.GET_DEVICE_FAILED, e}}
}