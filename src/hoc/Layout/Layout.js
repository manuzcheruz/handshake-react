import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Aux from '../Aux'

function Layout(props) {
    return (
        <Aux>
            <Navbar />
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout
