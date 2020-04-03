import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: '', 
      email: ''
    }
  }

UserRegistrationFunction = () => {
  const { username } = this.state;
  const { password } = this.state;
  const { email } = this.state;

fetch('http://192.168.1.8:8080/api/v1/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        })

            .then((response) => {
              if(response.statusText == "OK" && response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                throw new Error("Server can't be reached!")
          }
      })
            .then((responseJson) => {
              Alert.alert(responseJson);
              this.props.navigation.navigate('TermsOfUse')

            }).catch((error) => {
              console.error(error);
            });
          }
 
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
          <Text>Let's start the registration</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={password => this.setState({password})}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={email => this.setState({email})}
        />
        
        <Text style={styles.text}>By proceeding, I agree to Uber's Terms of Use and acknowledge that I have read the Privacy Policy.

I also agree that Uber or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.</Text>
        <Button
          title='Sign Up'
          onPress={this.UserRegistrationFunction}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#42A5F5',
    margin: 5,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 14,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
      fontSize: 12,
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      marginLeft: 20,
  }
})