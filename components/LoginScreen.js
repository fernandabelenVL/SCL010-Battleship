import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

class LoginScreen extends React.Component {
   render() {
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	         <Text style={styles.mainTitle}>Bienvenido</Text>
	         <Text style={styles.subtitle}>Usuario</Text>
	         
	         <View style={{marginTop: 30}}>
	            <Button 
	               title="Jugar online"
	               type="outline"
	               buttonStyle={{marginBottom: 10}}
	            />
					<Button title="Jugar contra la computadora" type="outline" style={{marginBottom:10}}/>
	            <Button title="Invita a un amigo a jugar" style={{marginBottom:10}}/>
	         </View>
          
         
         </View>
      );
   }
}
 
export default LoginScreen;

const styles = StyleSheet.create({
	screen: {
	  padding: 40, 
	  flex: 1, 
	  justifyContent: "center", 
	  alignItems: 'center'
	},
	
	input: {
	  width: '100%',
	  margin: 10,
	  borderBottomColor: 'black',
	  borderBottomWidth: 1,
	  padding: 10
	},
	
	mainTitle: {
		fontSize: 20,
	},
	
	subtitle: {
		fontSize: 25,
		color: "#1F89DC",
	}
	
 });