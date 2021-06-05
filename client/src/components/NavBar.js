import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
    const {pathname} = useLocation()
    return (
        <Menu>
            <Link to='/'>
                <Menu.Item active={pathname === '/'}>
                    Home
                </Menu.Item>
            </Link>
            <Link to='/category' >
                <Menu.Item active={pathname === '/category'}>
                    Category
              </Menu.Item>
            </Link>
            <Link to='/job'>
                <Menu.Item active={pathname ==='/job'}>
                    Jobs
              </Menu.Item>
            </Link>
            <Link to='/about' >
                <Menu.Item  active={pathname === '/about'}>
                    About
              </Menu.Item>
            </Link>

        </Menu>
    )
}

export default Navbar

