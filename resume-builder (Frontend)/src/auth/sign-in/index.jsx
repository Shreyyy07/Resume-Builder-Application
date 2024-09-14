import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
  return (
    <div className='flex justify-center items-center my-20'>
      <img src='/public/bg1.png'/>
   <SignIn/>
    </div>
  )
}

export default SignInPage
