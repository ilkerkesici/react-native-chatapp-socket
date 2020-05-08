/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  View,
  AppState,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Provider } from "react-redux";
import { store } from './src/store';
import { RouterComponent, socket } from './src/containers';
import { PRIMARY_DARK_COLOR, WHITE_COLOR } from './src/styles/Colors';
import {Toast} from './src/components';
import {handleAppStateChange, decrypt, TOAST_MESSAGE} from './src/helpers';
import { Actions } from 'react-native-router-flux';
import { getAllMessagesList } from './src/screens/home/all_messages/AllMessage.action';
import { showCutomToast } from './src/helpers';

AppState.addEventListener('change', handleAppStateChange); // Listener for app states


socket.on("mesage_general", (msg: any) => {
  if(Actions.currentScene !== "messaging"){
    if(Actions.currentScene != "_all_messages"){
      showCutomToast({
          message: decrypt(msg.data), 
          type: TOAST_MESSAGE, 
          title: msg.username,
          onPress: () => Actions.messaging({data: {username: msg.username, id: msg.sender_id}})
        });
      }
    getAllMessagesList();
  }
})



const App = () => {
  return (
    <View style={{flex: 1, alignSelf:'stretch'}}>
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_DARK_COLOR} />
      <View style={{flex: 1, backgroundColor: WHITE_COLOR}}>
        <RouterComponent />
        <Toast />
      </View>
    </Provider>
    </View>);
};


const styles = StyleSheet.create({
  buttonContaienr: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center'
  },
  thirdLayer:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondLayer:{
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstLayer:{
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;

