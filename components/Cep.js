import { React } from 'react';
import { StyleSheet, Text} from 'react-native';

export default function Cep(props){
	return(
	<>
		<Text>CEP: {props.data.cep}</Text>
		<Text>RUA: {props.data.logradouro}</Text>
		<Text>BAIRRO: {props.data.bairro}</Text>
		<Text>CIDADE: {props.data.localidade}</Text>
		<Text>ESTADO: {props.data.uf}</Text>
	</>
	);
}