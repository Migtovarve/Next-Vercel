
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>HOME</h1>
      <div className={'center'}>
        <h2>Welcome to <a href='https://nextjs.org'>Next.js!</a></h2>
      </div>
      <p className={'redirect'}>Go to <Link href='/about'>About</Link></p>
      <p>Get Started by editing{' '}</p>
    </MainLayout>
  )
}
