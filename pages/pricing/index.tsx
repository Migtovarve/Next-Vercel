import { MainLayout } from '@/components/Layouts/MainLayout'
import Link from 'next/link'
import React from 'react'

const PricingPage = () => {
  return (
    <MainLayout>
        <h1>Pricing Page</h1>
        <div className={'center'}>
            <h2>Welcome to <a href='https://nextjs.org'>Next.js!</a></h2>
        </div>
        <p className={'redirect'}>Go to <Link href='/'>Home</Link></p>
        <p>Get Started by editing{' '}</p>
    </MainLayout>
  )
}

export default PricingPage