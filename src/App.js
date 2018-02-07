import React, { Component } from 'react'
import './App.css'

import CardGrid from './components/CardGrid'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import StorageIcon from 'material-ui/svg-icons/device/storage'

const appBarStyle = {
  backgroundColor: '#424242',
  titleStyle: {
    color: 'white',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  }
}

// const storageIconStyle = {
//   color: 'white',
//   alignSelf: 'center',
//   width: 32,
//   height: '100%',
//   marginRight: 10
// }

const TitleContent = () => {
  return (<div> Earthquake DB </div>)
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
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
