import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
      <Image style={styles.imagem} source={require('./assets/logo_facebook.png')} />
      <TextInput style={styles.email} placeholder="Número de Telefone ou E-mail"/>
      <TextInput style={styles.senha} placeholder="Senha"/>
      <Button style={styles.botao}>Entrar</Button>
      <Text style={styles.esqueci}>Esqueci minha senha</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem:{
    width: 80,
    height: 80,
  }
});
