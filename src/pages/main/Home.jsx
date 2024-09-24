import React from 'react'
import HeroSection from '../../components/ui/Home/HeroSection'
import Recipes from '../../components/ui/Home/Recipes'
import Services from '../../components/ui/Home/Services'

export default function Home() {
  return (
    <div>
        <HeroSection />
        <Recipes />
        <Services />
    </div>
  )
}
