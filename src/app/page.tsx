import { Features } from '@/sections/Features'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import LogoTicker from '@/sections/LogoTicker'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Features/>
    </>
  )
}

export default page

