import {React,useState} from 'react'

const Form=(props)=>{
    const [comments,setComments]=useState('')
    const{formSubmission}=props
    const handleArea=(e)=>{
        setComments(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            comments
        }
       
        formSubmission(formData)
        setComments('')
        
    }
 
  return(
    <div>
        <form onSubmit={handleSubmit}>
        <textarea type='text' value={comments} onChange={handleArea} placeholder='comments'/><br/>
        <input type='submit' value='submit'/>
        </form>
      
    </div>
  )
}

export default Form