import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import{ MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize}=useStateContext();

  const handleCloseSideBar=()=>{
    if(activeMenu && screenSize<=900)
      setActiveMenu(false);
  }

const activeLink='flex item-center gap-5 pl-4 pt-3 pb-2.5 bg-sky-900 text-white text-md m-2';
const normalLink='flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:border-solid hover:border-1 hover:border-sky-900 text-black dark:text-gray-200 dark:hover:text-black hover:bg-sky-200'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex font-extrabold tracking-tight dark:text-white text-slate-900'>
                <SiShopware/> <span>SHOPPY</span>
            </Link>
            <TooltipComponent content='Menu' position="BottomCenter">
                  <button type='button' onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className='text-2xl rounded-full p-3 hover:bg-gray-200 mt-4 block '>
                    <MdOutlineCancel/>
                  </button>
            </TooltipComponent>
        </div>
        <div className='mt-10'> 
            {links.map((item)=>(
              <div key={item.title}>
                <p className='text-black-400 font-bold m-3 mt-4 uppercase'>{item.title}</p>
                {item.links.map((Link)=>(
                  <NavLink to={`/${Link.name}`} key={Link.name} onClick={handleCloseSideBar} className={({isActive})=> isActive?activeLink:normalLink}>
                    {Link.icon}
                    <span>{Link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar