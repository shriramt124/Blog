import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { Alert } from "flowbite-react"
  
const Signup = () => {
  const [errorMessage,setErrormessage] = useState(null)
   const[isLoading,setIsLoading] = useState(false);
 const [formData,setFormData] = useState({});
 const navigate = useNavigate()
  const handleChange = (e)=>{
  setFormData({...formData ,[e.target.id]:e.target.value.trim()})
  }
   

  console.log(formData);

  const handleSubmit = async (e)=>{
  e.preventDefault();
  if(!formData.username || !formData.email || !formData.password){
     return setErrormessage("all fields are required");
  }
   try{
    setIsLoading(true);
    setErrormessage(null);
   const res = await fetch("/api/auth/signup",{
 method:'POST',
 headers:{'Content-Type':'application/json'},
 body:JSON.stringify(formData)
   });
 const data = await res.json();
 console.log(data);
 setIsLoading(false);

 if(data.success === false){
  return setErrormessage(data.message);
 }

 if(res.ok){
  navigate("/sign-in")
 }
   }catch(error){
 return setErrormessage(error.message)
   }
  }
  return (
    <div className="">
       <div className= "flex flex-col justify-center items-center p-4" >
        <h1 className="text-3xl font-semibold mt-4">Signup</h1>
        <form className=" p-8 flex flex-col gap-4 w-[90%] md:w-[40%] "
        onSubmit={handleSubmit}
        >

          <div className="username-wrapper flex flex-col">
             <label htmlFor="username" className="capitalize mb-1">username</label>
        <input type="text" placeholder='Username' id="username"
         className="p-2 rounded-md border-2 border-blue-500 outline-zinc-700"
        onChange={handleChange}/>
          </div>
          <div className="email-wrapper flex flex-col">
            <label htmlFor="email" className="capitalize mb-1">Email:</label>
            <input type="email" placeholder='enter email' id='email'
              className="p-2 rounded-md border-2 border-blue-500 outline-zinc-700"
            onChange={handleChange}/>
          </div>
          <div className="password-wrapper flex flex-col">
            <label htmlFor="password" className="capitalize mb-1">Password : </label>
            <input type="password" placeholder='password..' id="password"
            className="p-2 rounded-md border-2 border-blue-500 outline-zinc-700"
           onChange={handleChange} />
          </div>
          <div className="button-wrapper flex flex-col">
            <button type='submit' 
            
            className='bg-blue-400 p-4 capitalize text-xl rounded-md disabled:bg-blue-200' disabled={isLoading}>
               {isLoading ? 'Loading..':"Signup"}
            </button>
          </div>
      
        </form>
        <div className="flex gap-2 capitalize">
          <span>already have an account?</span>
          <Link to='sign-in'  className="text-blue-700 font-semibold">
            Sign in
          </Link>
        </div>
        {
          errorMessage && (
            <Alert color="failure" className="mt-2 capitalize tex-sm ">
              {errorMessage}
            </Alert>
          )
           
        }
       </div>
    </div>
  )
}

export default Signup