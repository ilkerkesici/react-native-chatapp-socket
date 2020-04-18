import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Login.style';
import { CustomTextInput, Header, Logo, CustomButton } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { clickLoginButton, clickSignUp } from './Login.action';




export const Login = () => {
    const [state, setState] = useState<ILoginState>({
        username: '',
        password: '',
    })
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.LoginResponse.loading);
    return (
        <View style={styles.container}>
            <Header title={'Login'} />
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.form}>
                <CustomTextInput value={state.username} onChangeText={(text) => setState({ ...state, username: text })} placeholder={"Username"} />
                <CustomTextInput value={state.password} onChangeText={(text) => setState({ ...state, password: text })} secureTextEntry placeholder={"Password"} />
                <CustomButton name={'Login'} loading={loading} onPress={() => clickLoginButton(state.username, state.password)} />
            </View>
            <View style={styles.flexFill} />
            <View style={styles.footer}>
                <Text style={styles.text}> If you have not an acoount yet,  
                    <Text onPress={clickSignUp} style={styles.buttonText}> Sign Up! </Text> 
                </Text>
            </View>
        </View>
    );
}

interface ILoginState{
    username: string,
    password: string
}

