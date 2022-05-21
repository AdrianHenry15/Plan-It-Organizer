import React from 'react';
import { CarryOutTwoTone, FolderAddTwoTone, HomeTwoTone } from '@ant-design/icons';

const Nav = () => {
  return (
    <div className="mt-auto sticky bottom-0 bg-slate-400 py-1 flex justify-center items-center">
        <div className="mx-auto">
          <HomeTwoTone className="mobile-btn" />
        </div>
        <div className="mx-auto bg-slate-300 hover:bg-slate-100 transition-all ease-in-out duration-300 p-4 rounded-full">
          <FolderAddTwoTone className="new-aspiration" />
        </div>
        <div className="mx-auto">
          <CarryOutTwoTone className="mobile-btn" />
        </div>
    </div>
  )
}

export default Nav