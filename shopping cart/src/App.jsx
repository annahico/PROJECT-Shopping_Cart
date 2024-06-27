import { Component } from 'react'
import './App.css'


class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbeja', price: 2500, img: '/productos/arbeja.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.png' },
    ]
  }
  render() {
    return (
      <div>
        <p>Hola Mundo</p>
      </div>
    )
  }
}


 

export default App
