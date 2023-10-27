"use client"

import { FC } from 'react'

import { LandingWrapper, Image } from './styles'

const Landing: FC = () => {
  return (
    <LandingWrapper>
      <Image src='/images/logos/medium/logo-white-medium.png' width={30 * 12} fetchPriority='high'/>
    </LandingWrapper>
  )
}

export default Landing;