// page.js
// Assuming the Header component is in the same directory as page.js
import Footer from "./components/Footer";
import Header from "./components/Header"; // Assuming the Header component is in the same directory as page.js
import Hero from "./components/Hero";
const Home = () => {
  return (
    <div>
      <Header />
      
      <Hero />
      <Footer />
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
