import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponentArchitecture from './firstArchitecture.jsx'
import SecondComponentArchitecture from './secondArchitecture.jsx'
import ThirdComponentArchitecture from './thirdArchitecture.jsx'
import FourthComponentArchitecture from './fourthArchitecture.jsx'
import FifthComponentArchitecture from './fifthArchitecture.jsx'
import SixthComponentArchitecture from './sixthArchitecture.jsx'

let tableOfComponents = [<FirstComponentArchitecture/>,<SecondComponentArchitecture/>,<ThirdComponentArchitecture/>,<FourthComponentArchitecture/>,<FifthComponentArchitecture/>,<SixthComponentArchitecture/>]

class ContainerArchitecture extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }
  componentDidMount(){
    $('#architecture').find('.container').swiperight(()=>{
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
    $('#architecture').find('.container').swipeleft(()=>{
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



export default ContainerArchitecture
