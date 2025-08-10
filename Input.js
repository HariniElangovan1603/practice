export default function Input({type,placeholder})
{
  return(
 
  <div class="container mt-3">
  
   <input 
   type= {type}
   placeholder={placeholder}/>



   
   


<div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="text"/>
   </div>
    <div class="mb-3">
      <label for="pwd">Password:</label>
      <input type="password" />
    </div>
   
  
  
</div>



       
    
 )}
