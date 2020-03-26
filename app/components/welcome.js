import React from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';

export default class Welcome extends React.Component {
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


                    <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => navigate('Login')}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => navigate('Register')}
                    >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => navigate('Profile')}
                    >
                        <Text style={styles.buttonText}>Become a rider</Text>
                    </TouchableOpacity>



                
            </View>
            </KeyboardAvoidingView>
        );

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

    buttonContainer:{
        width: 300,
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        margin: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
});