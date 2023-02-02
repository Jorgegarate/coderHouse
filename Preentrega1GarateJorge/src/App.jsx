import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <ItemListContainer>
            <div>pantalon</div>
            <div>camisa</div>
            <div>gorro</div>
            </ItemListContainer>

            <Footer />

        </>
    )

}
export default App
