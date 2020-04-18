import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Register.style';
import { CustomTextInput, Header, Logo, CustomButton } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { clickRegisterButton } from './Register.action';




export const Register = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        passwordConfirm: ''
    })
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.RegisterResponse.loading);
    return (
        <View style={styles.container}>
            <Header back title={'Sign Up'} />
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.form}>
                <CustomTextInput value={state.username} onChangeText={(text) => setState({ ...state, username: text })} placeholder={"Username"} />
                <CustomTextInput value={state.password} onChangeText={(text) => setState({ ...state, password: text })} secureTextEntry placeholder={"Password"} />
                <CustomTextInput value={state.passwordConfirm} onChangeText={(text) => setState({ ...state, passwordConfirm: text })} secureTextEntry placeholder={"Confirm Password"} />
                <CustomButton name={'Sign Up'} loading={loading} onPress={() => clickRegisterButton(state.username, state.password, state.passwordConfirm)} />
            </View>
        </View>
    );

}

