import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const IMCCalculator = () => {
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (nome !== '' && altura !== '' && peso !== '') {
      const valorIMC = (peso / (altura * altura)).toFixed(1);

      let classificacao = '';
      if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.';
      } else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
      } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.';
      } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau I.';
      } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau II';
      } else {
        classificacao = 'com obesidade grau III. Cuidado!!';
      }

      setResultado(`${nome} seu IMC é ${valorIMC} e você está ${classificacao}`);
    } else {
      setResultado('Preencha todos os campos!!!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora - IMC</Text>
      <View style={styles.input}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.textInput}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Digite seu nome"
        />
      </View>
      <View style={styles.input}>
        <Text>Altura:</Text>
        <TextInput
          style={styles.textInput}
          value={altura}
          onChangeText={(text) => setAltura(text)}
          keyboardType="numeric"
          placeholder="Digite sua altura"
        />
      </View>
      <View style={styles.input}>
        <Text>Peso:</Text>
        <TextInput
          style={styles.textInput}
          value={peso}
          onChangeText={(text) => setPeso(text)}
          keyboardType="numeric"
          placeholder="Digite seu peso"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={{ color: '#fff' }}>Calcular</Text>
      </TouchableOpacity>
      <View style={styles.result}>
        <Text style={{ color: '#fff' }}>{resultado}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.tableText}>Classificações:</Text>
        <Text style={styles.tableText}>- Abaixo de 18.5: Abaixo do peso</Text>
        <Text style={styles.tableText}>- 18.5 a 24.9: Peso normal</Text>
        <Text style={styles.tableText}>- 25 a 29.9: Sobrepeso</Text>
        <Text style={styles.tableText}>- 30 a 34.9: Obesidade grau 1</Text>
        <Text style={styles.tableText}>- 35 a 39.9: Obesidade grau 2</Text>
        <Text style={styles.tableText}>- Acima de 40: Obesidade grau 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6600cc',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    color: '#fff',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  result: {
    width: '100%',
    height: 150,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  table: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  tableText: {
    color: '#fff',
    marginBottom: 5,
  },
});

export default IMCCalculator;
