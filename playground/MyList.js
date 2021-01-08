import React, {Component} from 'react';
import ReactDOM from 'react-dom'
class MyList extends Component{
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }
    render()
    {   
        return (<ol>{this.props.temp.map((a,index)=><li key={index}>{a}</li>)}</ol>)
         //return (<li>lin1</li>)
    }
}

export default MyList