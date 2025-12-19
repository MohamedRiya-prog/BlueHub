"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {signIn} from "next-auth/react"
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const ButtonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5'
    const handleSignIn = async (provider: "github" | "google" | "linkedin") => {
        try {
            await signIn(provider, {
                redirectTo: ROUTES.HOME
            })
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button className={ButtonClass} onClick={()=>handleSignIn("github")}>
        <Image src="/icons/github.svg" alt="Github Icon" width={20} height={20} className='mr-2.5 object-contain'/>
        <span>Sign in with GitHub</span>
      </Button>
      <Button className={ButtonClass} onClick={()=>handleSignIn("google")}>
        <Image src="/icons/google.svg" alt="Google Icon" width={20} height={20} className='invert-colors mr-2.5 object-contain'/>
        <span>Sign in with Google</span>
      </Button>
    </div>
  )
}

export default SocialAuthForm