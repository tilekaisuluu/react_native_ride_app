import React from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    static navigationOptions = {
        header: null,
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <KeyboardAvoidingView bahavior="padding" style={styles.wrapper}>
            <View 
            style={styles.container}
            >
                
                    <Text style={styles.header}>RIDE APP</Text>
                    <TextInput 
                    placeholder="username"
                    style={styles.input}
                    onChangeText={ (username) => this.setState({username})}
                    />
                    <TextInput 
                    placeholder="password"
                    style={styles.input}
                    onChangeText={ (password) => this.setState({password})}

                    secureTextEntry
                    />

                    <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => navigate('Profile')}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                
            </View>
            </KeyboardAvoidingView>
        );

    }
login = () => {
    alert('test');
}
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db'
    },
    header: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 60,
        fontWeight: 'bold',
        textAlign: "center",
    },
    input: {
        width: 300,
        padding: 16,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginHorizontal: 10,
        height: 50,
        color: '#fff'
    },
    buttonContainer:{
        width: 300,
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
});