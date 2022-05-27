import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
  const [cep, setCep] = useState(0);
	async function carregaCep(){ 	
	const response = await Api.get('ws/'+cep+'/json/');
		setCep(response);
	}
	return (

	<View style={styles.container}>
    <View style={styles.bloco}>
	<Text style={styles.TextoBloco}>Digite seu Cep: </Text>
		  <TextInput
			  placeholder="Digite seu cep..."
			  style={styles.input}
			  onChangeText={(data)=>setCep(data)}/>
		  <TouchableOpacity style={styles.botao}
			  onPress={carregaCep}>
		  <Text style={styles.TextoB}>Buscar</Text>
		  </TouchableOpacity>
		  
		  <Cep data={cep}/>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
