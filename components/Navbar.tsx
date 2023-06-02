import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      {menuItems?.map((item, index)=>{
          return(
            <ActiveLink 
              key={`${item.text}-${index+1}`} 
              text={item.text} 
              href={item.href}
            />
          ) 
        })  
      }
    </nav>

  )
}
