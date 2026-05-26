import Container  from './Container'
import React from 'react'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
        <Container className='flex items-center justify-between'>
            {/* Logo */}
            <Logo/>
            
            <HeaderMenu/>

            <div>
              <SearchBar/>
            </div>
            {/* NavButton */}

            {/* Navicon */}

            {/*  */}
        </Container>
    </header>
  )
}

export default Header