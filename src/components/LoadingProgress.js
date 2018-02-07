import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const loaderStyle = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}
const LoadingProgress = () => {
    return(
        <div style={loaderStyle}>
            <CircularProgress size={80} thickness={7}/>
        </div>
    )
}

export default LoadingProgress