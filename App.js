
import { StyleSheet, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.azulClaro} />

      <View style={styles.pcLaranja}>
        <View style={styles.laranja} />

        <View style={styles.retanguloLaranja} />
      </View>

      <View style={styles.roxoAzul}>
        <View style={styles.roxo} />

        <View style={styles.azul} />

        <View style={styles.ciano} />
      </View>

      <View style={styles.caixas}>
        <View style={styles.laranjas} />

        <View style={styles.laranjas} />

        <View style={styles.laranjas} />

        <View style={styles.laranjas} />

        <View style={styles.laranjas} />

        <View style={styles.laranjas} />
      </View>

      <View style={styles.azulFinal} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  pcLaranja: {
    height: '17%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  roxoAzul: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '12%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  caixas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '40%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-around',
  },

  azulClaro: {
    height: '2.5%',
    width: '100%',
    backgroundColor: 'cyan'
  },

  laranja: {
    height: '63%',
    width: '45%',
    backgroundColor: 'orange'
  },

  retanguloLaranja: {
    height: '23%',
    width: '70%',
    backgroundColor: 'orange'
  },

  roxo: {
    height: '80%',
    width: '50%',
    backgroundColor: 'blueviolet'
  },

  azul: {
    height: '80%',
    width: '50%',
    backgroundColor: 'skyblue'
  },

  ciano: {
    height: '20%',
    width: '100%',
    backgroundColor: 'cyan'
  },

  laranjas: {
    height: '29%',
    width: '22.5%',
    backgroundColor: 'orange',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '4%',
    marginBottom: '4%'
  },

  azulFinal: {
    height: '8%',
    width: '100%',
    backgroundColor: 'skyblue'
  }


});
