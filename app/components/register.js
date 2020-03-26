import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'

export default class Register extends React.Component {
  state = {
    name: '', surname: '', username: '', password: '', email: '', phone_number: '', select_city: '', promo_code: '',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
          <Text>Let's start the registration</Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Surname'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('surname', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Select City'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('select_city', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Promo Code'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('promo_code', val)}
        />
        <Text style={styles.text}>By proceeding, I agree to Uber's Terms of Use and acknowledge that I have read the Privacy Policy.

I also agree that Uber or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.</Text>
        <Button
          title='Sign Up'
          onPress={() => navigate('TermsOfUse')}
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