import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Input.style';
import { SECONDARY_COLOR } from '../../../../../styles/Colors';
import { SendIcon } from '../../../../../components';
import { sendMessage } from '../../Messaging.actions';


export const MessagingInput = (props: IMessageInput) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput
                    value={text}
                    onChangeText={(text) => setText(text)}
                    placeholder={"Write..."}
                    style={styles.textInput}
                    placeholderTextColor={SECONDARY_COLOR}
                    multiline
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    sendMessage(text, props.user_id);
                    setText('');
                }}
                style={styles.iconWrapper}
            >
                <SendIcon />
            </TouchableOpacity>
        </View>
    );
}

interface IMessageInput {
    user_id: number
}