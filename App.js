import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
      <Image style={styles.imagem} source={require('./assets/logo_facebook.png')} />
      <TextInput style={styles.email} placeholder="Número de Telefone ou E-mail"/>
      <TextInput style={styles.senha} placeholder="Senha"/>
      <TouchableOpacity style={styles.botao}>Entrar</TouchableOpacity>
      <Text style={styles.esqueci}>Esqueci minha senha?</Text>
      <TouchableOpacity style={styles.criar}>Criar nova conta</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    fontFamily: 'Arial',
  },
  imagem:{
    width: 70,
    height: 70,
  },
  email: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 9,
    marginTop: 80,
  },
  senha: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 9,
    marginTop: 10,
  },
  botao: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877f2',
    color: 'white',
    borderRadius: 35,
    marginTop: 10,
    
  },
  esqueci: {
    color: '#2e2e2e',
    marginTop: 10,
  },
  criar: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1877f2',
    color: '#1877f2',
    borderWidth: 1,
    borderRadius: 35,
    marginTop: 100,
  },
});
