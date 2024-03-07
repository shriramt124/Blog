import { Link } from "react-router-dom"

  
const Signup = () => {
  return (
    <div className="">
       <div className= "flex flex-col justify-center items-center p-4" >
        <h1 className="text-3xl font-semibold mt-4">Login</h1>
        <form className=" p-8 flex flex-col gap-4 w-[90%] md:w-[40%] ">

          <div className="username-wrapper flex flex-col">
             <label htmlFor="username" className="capitalize mb-1">username</label>
        <input type="text" placeholder='Username' id="username"
         className="p-2 rounded-md border-2 border-blue-500 outline-zinc-700"
        />
          </div>
          <div className="email-wrapper flex flex-col">
            <label htmlFor="email" className="capitalize mb-1">Email:</label>
            <input type="email" placeholder='enter email' id='email'
              className="p-2 rounded-md border-2 border-blue-500 outline-zinc-700"
            />
          </div>
          <div className="password-wrapper flex flex-col">
            <label htmlFor="password" className="capitalize mb-1">Password : </label>
            <input type="text" placeholder='password..' 
            className="p-2 rounded-md border-2 border-blue-500 outline-zinc-700"
            />
          </div>
          <div className="button-wrapper flex flex-col">
            <button type='submit' 
            
            className='bg-blue-400 p-4 capitalize text-xl rounded-md '>Signup</button>
          </div>
      
        </form>
        <div className="flex gap-2 capitalize">
          <span>already have an account?</span>
          <Link to='sign-in'  className="text-blue-700 font-semibold">
            Sign in
          </Link>
        </div>
       </div>
    </div>
  )
}

export default Signup