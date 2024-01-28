import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar_Details = [
  {
    name: "Home",
    iconUrl: "[iconURL]",
  },
  {
    name: "To-Do List",
    iconUrl: "[iconURL]",
  },
  {
    name: "Projects",
    iconUrl: "[iconURL]",
  },
  {
    name: "Directoreis",
    iconUrl: "[iconURL]",
  },
  {
    name: "Messages",
    iconUrl: "[iconURL]",
  },
  {
    name: "Clients",
    iconUrl: "[iconURL]",
  },
  {
    name: "Notifications",
    iconUrl: "[iconURL]",
  },
  {
    name: "News",
    iconUrl: "[iconURL]",
  },
  {
    name: "Settings",
    iconUrl: "[iconURL]",
  }
]

function SideBar() {
  
  const [isSidebarShrink, setSidebarShrink] = useState(true);

  return (
    
    <section className="bg-neutral-800 py-2 border-2 border-neutral-400 w-fit h-fit rounded-md fixed top-1 left-1" >
  
      <div className='absolute bg-neutral-800 border-2 flex justify-center items-center border-neutral-400 h-7 w-7 -right-4 top-7 rounded-full' onClick={()=> setSidebarShrink(!isSidebarShrink)}>
        {
          isSidebarShrink===true?<img src="[iconURL]" className='h-3 w-3'/>:<img src="[iconURL]" className='h-3 w-3'/>
        }
      </div>

      <div className='px-2'> 

        <header>
          <Link to={`/`} className="flex gap-2 items-center p-2 mx-2 my-4 rounded-md hover:bg-neutral-700 ">
            <img className="h-5 max-w-xs" src="[iconURL]" alt="ok" />
          {
                    isSidebarShrink===true? "":<h1 className='text-white text-lg font-bold'>[Name]</h1>
                   }
          </Link>
        </header>

        <ul className='grid gap-1 py-1'>
          {
            SideBar_Details.map((e,i)=>{
              return(
                <li key={i}>
                  <Link to={`/${e.name}`} className='flex gap-2 items-center p-3 text-white rounded-md hover:bg-neutral-700 ' style={isSidebarShrink==true?{justifyContent:"center"}:{}}>
                  <img className='h-5 w-5' src={e.iconUrl} alt={e.name} />
                    {
                    isSidebarShrink===true? "":<p className='text-sm font-semibold'>{e.name}
                </p>
                   }
                  </Link>
                </li>
              )
            })
          }
        </ul>

      </div>
    </section>
  )
}

export default SideBar
