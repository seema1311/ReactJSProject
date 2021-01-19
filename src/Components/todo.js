import React, {Component, useEffect} from 'react'; 
import Button from 'react-bootstrap/Button'; 
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
function Todo(props){
const [list, setList]=React.useState([{id:1,value:"read a book",checked:false}])
const [add,setAdd]=React.useState(false)
const [searchList,setSearchList]=React.useState(list)
const item=React.useRef("")

const addItem = (evt)=>{ 
	console.log("addItem")
	evt.preventDefault();
	const input=item.current.value;	
	if(input !== '' ){       
		const li = list.filter((item)=>item.value.toLowerCase().startsWith(input.toLowerCase())) 
        if(li.length===0){
	    const userInput = { 	
		id : Math.random(), 
		value : input,
		checked: false
	    }; 
		setList([...list,userInput])
		setAdd(true)
        } 
	else { 
		   setSearchList(li)
		   setAdd(false)
	     }
	}
	evt.target.elements.text.value=""
}

const updateList=()=> {
	console.log("update")
	setAdd(false)
	const input=item.current.value;
	if(input==="")
	setSearchList(list)
	else
	{
     const li = list.filter((item)=>item.value.toLowerCase().startsWith(input.toLowerCase()))
	setSearchList(li)
	}
}

// const handleCheck=(index) =>{
	
// 	const li = [...list]; 
// 	li[index].checked=!li[index].checked
// 	const status=li[index].checked
// 	setList(li)
// 	if(status===true)
// 	document.getElementById(index).style.textDecoration="line-through"
// 	else
// 	document.getElementById(index).style.textDecoration="none"
// }

const deleteItem=(key)=>{ 
	setList((pre)=>pre.filter(item => item.id !=key))
	setSearchList((pre)=>pre.filter(item => item.id !=key))
	console.log("delete"+ JSON.stringify(list))
} 
	return(  <div className="todo">
             <h1>TODO LIST</h1>
		
		     <form onSubmit={addItem}> 
             <input placeholder="search" name="text" ref={item} onChange={(evt)=>{evt.preventDefault();updateList()}}/>
             <button 
			 variant="dark"
			 size="lg"
			 > 
			  <SearchIcon/>
			</button> 
		</form> 
		
		 
		<ul>
		{add  && list.map(((item,index)=><div className="toList">
		 <input type="checkbox" className="check" />
		 <li id={`${index}`} key={index}>{item.value}</li>
		 <ClearIcon className="clearIcon" onClick={(evt)=>{deleteItem(item.id)}}/>
		 </div>))
		}
        {!add && searchList.map(((item,index)=><div className="toList">
		<input type="checkbox" className="check" />
		<li id={`${index}`} key={index}>{item.value}</li>
		<ClearIcon className="clearIcon" onClick={(evt)=>{ deleteItem(item.id)}}/>
		</div>))
       }

        </ul>
	    
        </div>)


}

export default Todo; 
//onChange={(evt)=>{evt.preventDefault(); handleCheck(`${index}`)}}
