import "./Button.css"

const Button = ({id, text, action}) =>{
   
   //Helper function to get the event from some button and apply the function
   const handleAction = (e) =>{
      action(e)
   }
   
   return(
   <button id={id} onClick={handleAction}>
      {text}
   </button>
   )
}

export default Button