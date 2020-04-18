import { getUserInfo, APIHelper } from "../../helpers"
import { Actions } from "react-native-router-flux";
import { store } from "../../store";
import { USER_CHANGED } from "../../reducers/Types";
import { socket } from "../../containers/socket";

/**
 * Initial function for this application
 * Sessions control making here
 * Language control making here
 * Notification directors making here
 */
export const initial = async () => {
    let user;
    const dispatch = store.dispatch;
    try{
        let user = await getUserInfo();
        if(!user){
            setTimeout(() => Actions.auth(), 1000); // 1 second delayfor nice shown
            return;
        }
        dispatch({type: USER_CHANGED, payload: user}); // Update user info from reducer
        APIHelper.setAccessToken(user.access_token); // Set token 
        socket.emit("user_connected", user.access_token);
        setTimeout(() => Actions.home(), 1000); // 1 second delay
    }catch(err){

    }
}