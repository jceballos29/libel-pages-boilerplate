import './App.css';
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
import Master from "./components/Master"
import FloatingSidebar from './components/FloatingSidebar';


function App() {
  return (
    <main className="App">
      <Navbar />
      <FloatingSidebar />
      <Header />
      <Trailer />
      <Master />
      <Memberships />
      <Financing />
      <Itinerary />
      <Categories />
      <Awards />
      <DynamicAwards />
      <Counseling />
      <FeaturedResults />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
