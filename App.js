import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  const URL = 'https://api.otaviolube.com';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })
  }, []);


  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme => 
        <View style={styles.viewCartao}>
          <Image style={styles.imgFilme} source={{uri: URL + filme.attributes.poster.data.attributes.url}}/>
          <View style={styles.texto}>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
            <Button style={styles.botao} title='Comprar Ingresso' />
          </View>
        </View>) : <Text style={styles.carregando}>Carregando....</Text>}
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 5
  },
  viewCartao:{
    flexDirection: 'row',
    width: '100%',
    height: 320,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  imgFilme: {
    width: '30%',
    height: '100%',
    borderRadius: 10
  },
  texto:{
    width:'70%',
    flexDirection: 'column',
    padding: 5
  },
  titulo:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo:{
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center'
  },
  sinopse:{
    color: 'white',
    marginBottom: 10
  },
  botao:{
    borderRadius: 15,
    bottom: 10
  },
  carregando:{
    color: 'white'
  }
});
