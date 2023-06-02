import Link from 'next/link'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { DarkLayout } from '@/components/Layouts/DarkLayout'
import { ReactElement } from 'react'
export default function AboutPage() {
  return (
    <div>
      <h1>ABOUT</h1>
      <div className={'center'}>
        <h2>Welcome to <a href='https://nextjs.org'>Next.js!</a></h2>
      </div>
      <p className={'redirect'} >Go to <Link href='/'>Home</Link></p>
      <p>Get Started by editing{' '}</p>
    </div>
  )
}

AboutPage.getLayout = function(page:ReactElement) { 
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}