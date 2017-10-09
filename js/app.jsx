import React from 'react';
import ReactDOM from 'react-dom';
import ContainerArchitecture from './architectureComponents/ContainerArchitecture.jsx'
import ContainerLandscape from './landscapeComponents/ContainerLandscape.jsx'
$(()=>{


class Architecture extends React.Component{
  render(){
    return <ContainerArchitecture />

  }
}

class Landscape extends React.Component{
  render(){
    return <ContainerLandscape />
  }
}

ReactDOM.render(
  <Architecture />,
  document.querySelector('#architecture')
)
ReactDOM.render(
  <Landscape />,
  document.querySelector('#landscape')
)

})
