import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';


export default class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Ionicons 
                name="md-menu" 
                size={32}
                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                />
                <Text style={styles.title}>Settings screen</Text>
            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db'
    },
    title: {
        fontSize: 24,
        color: 'red',
        marginBottom: 60,
        fontWeight: 'bold',
        textAlign: "center",
    }
})
