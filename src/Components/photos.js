import React from 'react'
function Photo(props){
  
    function updateProfile(index){
        const id=`image${index}`
      const x=document.getElementById(id).src; 
      props.onUpdate(x);
  }
    
    
        return (<div>
            <h1 class="heading">Select profile</h1>
            <div className="photoGrid">
            {props.posts.map((post,index) => <img className="photo" id={`image${index}`} src={post} alt="new" onClick={()=>updateProfile(index)}/>)}
            </div>
               </div>
               )
        
    
    
    
}
export default React.memo(Photo)