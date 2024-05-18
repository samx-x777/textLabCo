import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div>
      <div className="nav w-full h-20 flex flex-row-reverse justify-center items-center" style={{ backgroundColor: props.mode === 'black' ? '#171717' : '#4a4a4a' }}>
        <div className="switch w-52 h-16 flex justify-center items-center">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={props.toggle} />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.mode === 'black' ? "Enable light" : "Enable dark"}</span>
          </label>
        </div>
        <nav className='w-full h-16 flex flex-row justify-center items-center'>
          <ul className='text-[#757575] flex flex-row justify-center items-center gap-32'>
            {/* <NavLink */}
              {/* exact
              to='/'
              activeClassName='active'
              className='nav-link'
            > */}
              <li className='group hover:cursor-pointer hover:text-white flex flex-col'>Home
                <div className="block hoverx1 w-0 h-[2px] group-hover:w-10 bg-white my-[50px] absolute hover:transition ease-in-out delay-150 duration-100"></div>
              </li>
            {/* </NavLink>
            <NavLink */}
            {/* to='/about' 
            activeClassName='active'
            className='nav-link' */}
            {/* > */}
              <li className='group hover:cursor-pointer hover:text-white flex flex-col'>About us
                <div className="block hoverx1 w-0 h-[2px] group-hover:w-16 bg-white my-[50px] absolute hover:transition ease-in-out delay-150 duration-100"></div>
              </li>
            {/* </NavLink> */}
            {/* <li className='group hover:cursor-pointer flex flex-col'>Contact
              <div className="block hoverx1 w-0 h-[2px] group-hover:w-14 bg-white my-[50px] absolute hover:transition ease-in-out delay-150 duration-100"></div>
            </li>
            <li className='group hover:cursor-pointer flex flex-col'>Product
              <div className="block hoverx1 w-0 h-[2px] group-hover:w-14 bg-white my-[50px] absolute hover:transition ease-in-out delay-150 duration-100"></div>
            </li>
            <li className='group hover:cursor-pointer flex flex-col'>More
              <div className="block hoverx1 w-0 h-[2px] group-hover:w-10 bg-white my-[50px] absolute hover:transition ease-in-out delay-150 duration-100"></div>
            </li> */}
            {/* <li className='group hover:cursor-pointer'>Colors
              <div className="block hoverx1 w-40 h-44 invisible absolute bg-slate-500 group-hover:visible my-[50px]  hover:transition ease-in-out delay-150 duration-100 rounded-lg">
                <div className='w-full h-full flex justify-center items-center'>
                  <div className="colors-switches-boxes w-32 h-40">
                    <ul>
                      <li>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" onClick={props.colorx} />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.modeColor === '#03050f' ? "Yellow" : "dark"}</span>
                        </label>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </nav>
        <div className="logo w-52 h-16 flex justify-center items-center text-white">
          <p className='font-fontx2'>
            {/* not for github */}
            {/* <Link to='/'>{props.title}</Link> */}
            <a href='/'>{props.title}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
