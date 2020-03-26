import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerNavigator } from 'react-navigation'

import Login from './app/components/login';
import Profile from './app/components/profile';
import Settings from './app/components/settings';



const Navigator = createStackNavigator({
    Home: { screen: Login },
    Profile: { screen: Profile },

});




const App = createAppContainer(Navigator);

export default App;




import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { render } from 'react-dom';

import MenuButton from './app/components/menubutton';

export default class Profile extends React.Component {

    static navigationOptions = {
        header: null,
        
    };


    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <MenuButton />
                <Text style={styles.title}>Profile screen</Text>
                <Button
                title="go to login"
                onPress={() => navigate('Home')}
                />
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



import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { render } from 'react-dom';

export default class Settings extends React.Component {

    static navigationOptions = {
        header: null,
        
    };


    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Settings screen</Text>
                <Button
                title="go to login"
                onPress={() => navigate('Home')}
                />
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