import React, { Component } from 'react'

export default class ListOfGlasses extends Component {
  render() {
    let {item} = this.props;
    let {changeGlass} = this.props
    return (
      <div>
          <img onClick={()=>{changeGlass(item)}} src={item.url} style={{cursor:'pointer'}} className="p-2 mr-3 border border-width-1" width={110}/>
      </div>
    )
  }
}

