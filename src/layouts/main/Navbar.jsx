import { Link, useLocation } from "react-router-dom"


export default function Navbar() {
    const {pathname} = useLocation()
    console.log(pathname)
  const navItems = <div className="flex text-lg gap-7">
   <Link to={'/home'} className={pathname === '/home'?"text-success font-bold":" font-semibold"}> <li>Home</li></Link>
   <Link to={'/foods'} className={pathname === '/foods'?"text-success font-semibold":" font-semibold"}> <li>Food</li></Link>
   <Link to={'/bookaTable'} className={pathname === '/bookaTable'?"text-success font-semibold":" font-semibold"}> <li> Book a Table </li></Link>
  
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  )
}

