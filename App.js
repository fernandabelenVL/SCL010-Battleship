import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Button } from 'react-native-elements';


//components
import LoginScreen from './components/LoginScreen'

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userName: '',
    }
  }

  render() {
  
  const usernameHandler = () => {
      console.log(this.state.userName)
   }
   
    return (
      <View style={styles.screen}>
         <Text style={{fontSize:20, textAlign: 'center'}}>¡Bienvenido a Battleship! </Text>
         <Text style={{marginBottom:20, textAlign: 'center'}}>Antes de empezar ingresa tu nombre</Text> 
        
         <View >
	        <TextInput 
	          placeholder="Ingresa tu nombre"
	          style={styles.input}
	          onChangeText={(userName) => this.setState({userName})}
	          value={this.state.text}
	        />
	        <Button
	          title="Comenzar a jugar"
				 buttonStyle={{paddingHorizontal: 30}}
	          onPress={() => { this.props.navigation.navigate('Login'); {usernameHandler()} }}
	         />
         </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: 'center'
  },
  
  
  input: {
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    textAlign: "center"
  }
});