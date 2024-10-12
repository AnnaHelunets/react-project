import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { styleData } from './utils/style_data';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';

function App() {
  const [appState, setAppState] = useState(false);
  let styleProps = appState ? styleData.dark : styleData.light;

  return (
    <div className="App" style={{ backgroundColor: `${styleProps.background}`, color: `${styleProps.textColor}` }}>
      <Header appState={setAppState} styleProps={styleProps} />
      <Routes>
        <Route path='/menu-page' element={<Menu styleProps={styleProps} />}/>
        <Route path='/about-page' element={<AboutUs/>}/>
        <Route path='/contacts-page' element={<Contact/>}/>
        <Route path='/cart' element={<Cart styleProps={styleProps} />} />
      </Routes>
      <Footer styleProps={styleProps} />
    </div>
  );
}

export default App;