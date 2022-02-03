import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavbarMain from './NavbarMain';
import Explorer from './Explorer';
import Navigation from './Navigation';
import NetmedsCarousel from './NetmedsCarousel';
import Section1 from './Section1';
import PayOffers from './PayOffer';
import Section2 from './Section2';
import Trending from './Trending';
import Category from './Category';
import Topbrands from './Topbrands';
import Membership from './Membership';
import CategoriesFocus from './CategoriesFocus';
import ExploreBeauty from './ExploreBeauty';
import BestinBeauty from './BestinBeauty';
import PersonalCare from './PersonalCare';
import MensGrooming from './MensGrooming';
import MedicineRefil from './MedicineRefil';
import HealthConcerns from './HealthConcerns';
import Articles from './Articles';
import Section3 from './Section3';
import Footer from './Footer';
import ProductsList from './ProductsList';
import Productpage from './Productpage';
import Register from './Register';
import Login from './Login';
import NotFound from './NotFound';
import Cart from './Cart';


function App() {

  return (
    <>
    <ToastContainer autoClose={3000}/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavbarMain/>
      <Explorer/>
      <Navigation />
      <Router>
        <Routes>
      <Route path="/" exact element={
        <>
        <NetmedsCarousel />
      <Section1 />
      <PayOffers />
      <Section2 />
      <Trending />
      <Category />
      <Topbrands />
      <Membership />
      <CategoriesFocus />
      <ExploreBeauty />
      <BestinBeauty />
      <PersonalCare />
      <MensGrooming />
      <MedicineRefil />
      <HealthConcerns />
      <Articles />
      </>
      }/>
      <Route path="/products/:category" exact element={<ProductsList />}/>
      <Route path="/product/:productId" exact element= {<Productpage />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/register" exact element= {<Register />} />
      <Route path="/login" exact element= {<Login />} />
      <Route path='*' exact element= {<NotFound />}/>
      </Routes>
      </Router>
      <Section3 />
      <Footer />
      </PersistGate>
      </Provider>
    </>
  )
}

export default App;
