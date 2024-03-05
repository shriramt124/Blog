 import {Link , useLocation} from 'react-router-dom';
 import {Button, Navbar, TextInput} from 'flowbite-react'
 import {AiOutlineSearch} from 'react-icons/ai'
 import {FaMoon} from 'react-icons/fa';
 function Header() {
    const path = useLocation().pathname;
  return (
      <Navbar   className='bg-white'>
         <Link to="/" className='text-center text-sm sm:text-xl font-semibold dark:text-white' >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-700 to-blue-500
            rounded-lg text-white
            '>ShriCode</span>
            
         </Link>
         <form >
             <TextInput type='text' placeholder='search..'
             rightIcon={AiOutlineSearch}
             className='hidden lg:inline'
             />
         </form>
         <Button className='w-12 h-10 lg:hidden' color='blue'> 
            <AiOutlineSearch />
         </Button>
         <div className="flex gap-3 md:order-2">
             <Button className='w-12 h-10 hidden sm:inline' color='blue' pill>
                <FaMoon />
             </Button>
             <Link to="sign-in">
             <Button gradientDuoTone="purpleToBlue" outline>
                Signin
             </Button>
             </Link>
            <Navbar.Toggle />
         </div>
         <Navbar.Collapse>
                <Navbar.Link active={path === "/"}>
                  <Link to="/">
                    Home
                  </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"}>
                  <Link to="/">
                    about
                  </Link>
                </Navbar.Link>
                <Navbar.Link  active={path === "/projects"}>
                  <Link to="/projects">
                    Projects
                  </Link>
                </Navbar.Link>
             </Navbar.Collapse>
      </Navbar>
  )
}

export default Header