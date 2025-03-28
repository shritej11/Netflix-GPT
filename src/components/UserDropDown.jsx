import { useState } from "react";
import UserSignOut from "./UserSignOut";
import { LOGO } from "../utils/constants";


const UserDropDown = () => {

    const [openProfile, setOpenProfile] = useState(false);

    return (
    
        <div className="absolute px-15 caret-transparent flex justify-between w-full bg-gradient-to-b from-black ">
          <img
            className="w-45 font-bold"
            src={LOGO}
            alt="logo"
          />
          <div className="flex mt-5">
    
            {
              openProfile && <UserSignOut />
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

export default UserDropDown;