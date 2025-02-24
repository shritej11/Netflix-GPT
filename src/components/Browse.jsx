import React, { useState } from 'react'
import Header from './Header'
import UserAcc from './UserAcc'

const Browse = () => {

  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="flex justify-between absolute px-15 w-screen   bg-gradient-to-b from-black z-10">
      <img
        className="w-45 font-bold"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex mt-5">

        {
          openProfile && <UserAcc />
        }

        <button
          onClick={() => setOpenProfile
            ((prev) => !prev)
          }
          className='flex'>
          <img
            className='w-8 h-8 rounded-md '
            src="https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
            alt="userIcon" />
          <img className='w-3 h-3 rounded-md m-1 mt-2.5'
            src="https://cdn-icons-png.flaticon.com/512/318/318278.png"
            alt="drop-down-icon" />
        </button>
      </div>
    </div>
  )
}

export default Browse