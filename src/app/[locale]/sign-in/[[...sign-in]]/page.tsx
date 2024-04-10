import { SignIn } from '@clerk/nextjs'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (SignInPage):'

const SignInPage: FC = () => {
  return (
    <div>
      <SignIn />
    </div>
  )
}
export default SignInPage
