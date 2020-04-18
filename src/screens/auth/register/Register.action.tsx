import { store } from "../../../store";
import {  REGISTER_LOADING } from "../../../reducers/Types";
import { APIHelper } from '../../../helpers';
import { Actions } from "react-native-router-flux";
import { showCutomToast, TOAST_ERROR, TOAST_SUCCESS } from "../../../helpers/ToastHelper";

export const clickRegisterButton = async (username: string, password: string, passwordConfirm: string) => {
    store.dispatch({type: REGISTER_LOADING, payload: true}); // Updating register loading
    
    if(!validation(username, password, passwordConfirm)) return; // Validation for given inputs
    
    try{
        let response = await APIHelper.postRequest('/api/user', {username, password});
        if(response.status == 201 && response.data.Status){
            //Show toast
            showCutomToast({type: TOAST_SUCCESS, message: 'Registeration is successfull!'});
            store.dispatch({type: REGISTER_LOADING, payload: false}); // Loading update
            Actions.pop();
            return;
        }
        store.dispatch({type: REGISTER_LOADING, payload: false}); // Loading update
        // If error show toast
        showCutomToast({type: TOAST_ERROR, message: response.data.Message});
    }catch(err){
        //Show unexpected toast
        showCutomToast({type: TOAST_ERROR, message: 'There is unexpected error!'});
    }
    
}

const validation = (username: string, password: string, passwordConfirm: string) => {
    if (username.trim().length < 6 || password.trim().length < 6 || passwordConfirm.trim().length < 6) {
        showCutomToast({type: TOAST_ERROR, message: 'Fields are invalid!'});
        store.dispatch({ type: REGISTER_LOADING, payload: false }); // Loading update
        return false;
    }
    else if(password !== passwordConfirm){ // If password don't match
        // Show toast
        showCutomToast({type: TOAST_ERROR, message: "Passwords don't match!"});
        store.dispatch({ type: REGISTER_LOADING, payload: false }); // Loading update
        return false;
    }
    return true
}

