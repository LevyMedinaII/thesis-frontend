import React, { Component } from 'react'
import './App.css'

import CardGrid from './components/CardGrid'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const appBarStyle = {
  backgroundColor: '#9C27B0',
  titleStyle: {
    color: 'white',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  }
}

const TitleContent = () => {
  return (<div> Earthquake DB </div>)
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{
          height: '100vh',
          backgroundColor: '#212121'
        }}>
          <AppBar
            title={<TitleContent />}
            showMenuIconButton={false}
            style={appBarStyle}
            titleStyle={appBarStyle.titleStyle} />
            <CardGrid />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
