import { IconButton } from '@mui/material';
import React from 'react';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { MdAccountCircle, MdOutlineDataUsage } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { VscAccount } from 'react-icons/vsc';


const SidebarHeader: React.FC = () => {
  return (
    <div  className="flex justify-evenly items-center px-2 py-4 h-20 border-r border-r-solid border-r-gray-200 border-b border-b-solid border-b-gray-200 bg-white z-10">
     <div className='pl-2'>
     <VscAccount   className="rounded-full cursor-pointer hover:opacity-70" />
    
     </div>
     <IconButton>
      <MdGroups2 />
      </IconButton>
      <IconButton>
      <MdOutlineDataUsage />
      </IconButton>
      <IconButton>
      <BsFillChatLeftDotsFill />
      </IconButton>
    </div>
  )
}

export default SidebarHeader
