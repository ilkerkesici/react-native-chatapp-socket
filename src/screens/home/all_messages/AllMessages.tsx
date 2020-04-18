import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './AllMessage.style';
import { Header, ListItem } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { getAllMessagesList } from './AllMessage.action';
import { Actions } from 'react-native-router-flux';




export const AllMessages = () => {

    useEffect(() => {
        // ComponentDidMount
        getAllMessagesList();
    }, []);
    const messages = useSelector<IRootState, any>((r_state: IRootState) => r_state.MessageResponse.all_messages);
    return (
        <View style={styles.container}>
            <Header title={'Messages'} />
            <View style={styles.container}>
            <FlatList
                    data={messages}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.username}
                            avatarSource={'https://randomuser.me/api/portraits/lego/0.jpg'}
                            subtitle={item.last_message}
                            rightDot={item.am_i_read == 1 ? false : true}
                            onPress={() => Actions.messaging({data: item})}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={styles.flatlist}
                />
            </View>
        </View>
    );
}