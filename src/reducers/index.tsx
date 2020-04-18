/*
* Exporting our reducers for store
*/

import { combineReducers } from "redux";
import LoginReducer from './Login.reducer';
import RegisterReducer from './Register.reducer';
import ToastReducer from './Toast.reducer';
import UserInfoReducer from './UserInfo.reducer'
import UsersPageReducer from './Users.reducer';
import MessagesReducer from './Message.reducer';

export default combineReducers({
    LoginResponse: LoginReducer,
    RegisterResponse: RegisterReducer,
    ToastResponse: ToastReducer,
    UserInfoResponse: UserInfoReducer,
    UsersResponse: UsersPageReducer,
    MessageResponse: MessagesReducer
});
