import React, {Component} from 'react'
import ConfirmedFunListEntry from './ConfirmedFunListEntry'
class ConfirmedFunList extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <tr>
        {
          this.props.confirmedFunList.map((confirmedFunListEntry)=>(
            <ConfirmedFunListEntry confirmedFunListEntry={confirmedFunListEntry}/>
          ))
        }
      </tr>
    )
  }
}
export default ConfirmedFunList