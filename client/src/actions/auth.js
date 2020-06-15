import {AuthConstants}  from "../constants/constatns";
import { AuthService } from "../services/auth.service"

export const AuthSetup = formData => {
  return (dispatch) =>{
    AuthService(formData)
    .then((response)=>{
      dispatch(success(response))
    
    })
    .catch((e)=>dispatch(error(e)))
  }
  function success(data){return {type: AuthConstants.LOGIN_SUCCESS, data }}
  function error(e){return {type: AuthConstants.LOGIN_FAILED, e }}
};
