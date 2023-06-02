import Link from 'next/link'
import { useRouter } from 'next/router'

const style:any = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink = ({text, href}:any) => {
   const { asPath }=  useRouter()
  return (
    <Link legacyBehavior href={href}>
        <a style={ asPath === href ? style: null} >{ text }</a>
    </Link>
  )
}
