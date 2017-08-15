import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponentLandscape from './firstLandscape.jsx'
import SecondComponentLandscape from './secondLandscape.jsx'


let tableOfComponents = [<FirstComponentLandscape/>,<SecondComponentLandscape/>]

class ContainerLandscape extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }
  componentDidMount(){
    $('#landscape').find('.container').swiperight(()=>{
      if(this.state.counter>0)
      this.setState({
        counter: this.state.counter-1
      })
      else{
        this.setState({
          counter: tableOfComponents.length-1
        })
      }
    })
    $('#landscape').find('.container').swipeleft(()=>{
      if (this.state.counter<tableOfComponents.length-1) {
        this.setState({
          counter: this.state.counter + 1
        })
      }
      else {
        this.setState({
          counter: 0
        })
      }
    })
  }
  handleClickNext = () =>{
    if (this.state.counter<tableOfComponents.length-1) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    else {
      this.setState({
        counter: 0
      })
    }

  }
  handleClickPrev = () =>{
    if(this.state.counter>0)
    this.setState({
      counter: this.state.counter-1
    })
    else{
      this.setState({
        counter: tableOfComponents.length-1
      })
    }

  }

  render(){
    return  <div className="container">
                <h2>Sekcja {this.state.counter + 1} z {tableOfComponents.length}</h2>
                <div className="left"><p onClick={this.handleClickPrev}>&lt;</p></div>
                {
                  tableOfComponents[this.state.counter]
                }
                <div className="right"><p  onClick={this.handleClickNext}>&gt;</p></div>
            </div>


  }
}


export default ContainerLandscape
