import { Link, useLocation } from "react-router-dom"


export default function Navbar() {
    const {pathname} = useLocation()
    console.log(pathname)
  const navItems = <div className="flex text-lg gap-12">
   <Link to={'/home'} className={pathname === '/home'?"text-success font-bold":"  hover:text-success font-semibold"}> <li>Home</li></Link>
   <Link to={'/foods'} className={pathname === '/foods'?"text-success font-bold":" hover:text-success font-semibold"}> <li>Food</li></Link>
   <Link to={'/bookaTable'} className={pathname === '/bookaTable'?"text-success font-bold":"hover:text-success  font-semibold"}> <li> Book a Table </li></Link>
   <Link to={'/uploadProduct'} className={pathname === '/uplaodProduct'?"text-success font-bold":"hover:text-success  font-semibold"}> <li> UploadProduct </li></Link>
  
  </div>
  return (
    <div className="container mx-auto">
      <div className="navbar fixed z-10 container mx-auto  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


              {navItems}
            </ul>
          </div>
          <div className="btn btn-ghost text-xl"> <img src="https://i.ibb.co.com/Fz2Ydh0/Group-1.png" alt="" /> </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}

          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link to={'/auth/login'}><button className="btn px-9 bg-primary rounded-xl hover:btn-warning text-white font-semibold text-lg ">Login</button></Link>
          <Link to={'/dashboard'} className="btn px-5 btn-outline rounded-xl font-semibold text-lg">My Profile</Link>
        </div>
      </div>
    </div>
  )
}

