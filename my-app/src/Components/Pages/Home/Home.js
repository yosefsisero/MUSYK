import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import Search from '../../Search/Search';

function Home() {
    return (
        <>
           <Header/>
            <p>Pagina Home </p>
            <Search />
            <Footer/>
        </>
    )
}

export default Home
