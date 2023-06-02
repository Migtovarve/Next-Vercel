import Link from 'next/link'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
        <h1>Contact</h1>
        <div className={'center'}>
            <h2>Welcome to <a href='https://nextjs.org'>Next.js!</a></h2>
        </div>
        <p className={'redirect'}>Go to <Link href='/'>Home</Link></p>
        <p>Get Started by editing{' '}</p>
    </MainLayout>
  )
}