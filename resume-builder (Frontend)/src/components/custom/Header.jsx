import React from 'react'
import {Button} from '../ui/button'
import {Link} from 'react-router-dom'
import { UserButton,useUser } from '@clerk/clerk-react'

function Header() {
  const {user,isSignedIn}=useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
   <img src='/logo.svg' width={200} height={100} />

   {isSignedIn ? //if the user is signed in then we will show this button//
   <div className='flex gap-3 items-center'> 
   <Link to={'/dashboard'}>
   {/* link to dashboard page */}
   <Button variant="outline">DashBoard</Button>
   </Link>
    
    <UserButton/>
    </div>:
    <Link to={'../../auth/sign-in'}>
    <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
    {/* if not signed in then show this get started button */}
    </Link>
    }

   
    </div>
  )
}

export default Header
