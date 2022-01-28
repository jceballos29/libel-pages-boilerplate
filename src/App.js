import './App.css';
import WhatWillYouLearn from './components/ WhatWillYouLearn';
import Awards from './components/Awards';
import Categories from './components/Categories';
import Counseling from './components/Counseling';
import DynamicAwards from './components/DynamicAwards';
import FAQ from './components/FAQ';
import FeaturedResults from './components/FeaturedResults';
import Financing from './components/Financing';
import Footer from './components/Footer';
import Header from './components/Header';
import Itinerary from './components/Itinerary';
import Memberships from './components/Memberships';
import Navbar from './components/Navbar';
import Trailer from './components/Trailer';
import TrainingsToDo from './components/TrainingsToDo';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TrainingsToDo />
      <Trailer />
      <Categories />
      <Awards />
      <DynamicAwards />
      <Itinerary />
      <WhatWillYouLearn />
      <Memberships />
      <Financing />
      <FeaturedResults />
      <Counseling />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
