import { LocationConstants }  from "../constants/constatns";
import { getLocations } from "../services/location.service";

export const getLocation=(params)=>{
    return (dispatch)=>{
        getLocations(params)
        .then(res=>dispatch(success(res)))
        .catch(e=>dispatch(error(e)));
    }

    function success(data){return {type: LocationConstants.GET_LOCATION_SUCCESS, data}};
    function error(e){return {type: LocationConstants.GET_LOCATION_FAILED, e}}
}