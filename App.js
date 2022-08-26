import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cor: 'azul',
      ultimo: null,
      timer: 0,
      iniciar: 'Vai'
    }
    this.relogio = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai() {
    if(this.relogio != null) {
      clearInterval(this.relogio)
      this.relogio = null
      this.setState({iniciar: 'Vai'})
      this.setState({cor: 'azul'})
    } else {
      this.relogio = setInterval( () => {
        this.setState({timer: this.state.timer + 0.1})
      }, 100)
      this.setState({iniciar: 'Parar'})
      this.setState({cor: 'vermelho'})
    }
  }

  limpar() {
    if(this.state.timer > 0) {
      this.setState({ultimo: this.state.timer})
      this.setState({timer: 0})
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <View>
          <Text style={styles.tempo}>{this.state.timer.toFixed(1)}s</Text>
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.vai}
          >
            <View
            style={this.state.cor === 'azul' ? styles.buttonArea : styles.vermelho}
            >
              <Text style={styles.buttonText}>{this.state.iniciar}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.limpar}
          >
            <View style={styles.buttonArea}>
              <Text style={styles.buttonText}>Limpar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.ultimo}>{this.state.ultimo > 0 ? 'Ultimo tempo:' + this.state.ultimo.toFixed(1) : ''}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92E8F5',
  },
  tempo: {
    color: '#ffff',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: -140,
  },
  botoes: {
    flexDirection: 'row',
    padding: 10,
  },
  button: {
    padding: 10,
  },
  buttonArea: {
    borderWidth: 2,
    borderRadius: 20,
    width: 180,
    borderColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  vermelho: {
    borderWidth: 2,
    borderRadius: 20,
    width: 180,
    backgroundColor: '#F50701',
    borderColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 45,
    fontWeight: 'bold',
  },
  ultimo: {
    fontSize: 25,
    color: '#F55304',
  }
})

export default App
