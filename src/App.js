import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.instagramLogo}
          source={require('./images/instagramTextLogo.png')}
        />

        <View style={styles.input1}>
          <TextInput
            placeholder="Phone number, username or email"
            keyboardType="email-address"
            style={styles.emailInput}
          />
        </View>

        <View style={styles.input2}>
          <TextInput placeholder="Password" style={styles.emailInput} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.or}>OR</Text>

        <View style={styles.facebook}>
          <Image
            style={styles.facebookImg}
            source={require('./images/facebook.png')}
          />
          <Text style={styles.facebookText}>Log in with Facebook</Text>
        </View>

        <Text style={styles.forgot}>Forgot password?</Text>

        <View style={styles.account}>
          <Text>Don't have an account?</Text>
          <Text style={styles.signup}>Sign Up</Text>
        </View>
      </ScrollView>

      <View>
        <Text style={styles.getapp}>Get the app.</Text>
        <View style={styles.stores}>
          <Image
            style={styles.store}
            source={require('./images/appStore.png')}
          />
          <Image
            style={styles.store}
            source={require('./images/playStore.png')}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.foot}>ABOUT</Text>
          <Text style={styles.foot}>HELP</Text>
          <Text style={styles.foot}>PRESS</Text>
          <Text style={styles.foot}>API</Text>
          <Text style={styles.foot}>JOBS</Text>
          <Text style={styles.foot}>PRIVACY</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.foot}>TERMS</Text>
          <Text style={styles.foot}>LOCATIONS</Text>
          <Text style={styles.foot}>TOP ACCOUNTS</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.foot}>HASHTAGS</Text>
          <Text style={styles.foot}>LANGUAGE</Text>
        </View>

        <Text style={styles.copyright}>© 2020 INSTAGRAM FROM FACEBOOK</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
  },

  emailInput: {
    fontSize: 10,
    padding: 0,
    marginLeft: 8,
    marginTop: 8,
  },

  instagramLogo: {
    width: '55%',
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: '30%',
  },

  input1: {
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '70%',
    height: 30,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 3,
    fontSize: 1,
  },

  input2: {
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '70%',
    height: 30,
    alignSelf: 'center',
    marginTop: 7,
    borderRadius: 3,
    marginBottom: 12,
  },

  button: {
    width: '70%',
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#80ccff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  or: {
    textAlign: 'center',
    margin: 15,
    color: 'gray',
    fontSize: 12,
  },

  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  facebookImg: {
    width: 17,
    height: 17,
    resizeMode: 'stretch',
    marginRight: 7,
  },

  facebookText: {
    color: '#385185',
    fontWeight: 'bold',
  },

  forgot: {
    fontSize: 12,
    color: '#486F94',
    textAlign: 'center',
    marginTop: 15,
  },

  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },

  signup: {
    color: '#0095F7',
    fontWeight: 'bold',
    marginLeft: 5,
  },

  getapp: {
    textAlign: 'center',
    marginTop: 35,
  },

  stores: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  store: {
    resizeMode: 'stretch',
    height: 32,
    width: 100,
    margin: 3,
    marginTop: 15,
    marginBottom: 25,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  foot: {
    fontSize: 9,
    margin: 12,
    marginBottom: 0,
    marginTop: 3.5,
    color: '#033A6D',
    fontWeight: 'bold',
  },

  copyright: {
    textAlign: 'center',
    color: '#AEAEAE',
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default App;
