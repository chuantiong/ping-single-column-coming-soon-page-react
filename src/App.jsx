import dashboardImage from "./assets/illustration-dashboard.png"
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

const App = () => {

  return (
    <main className="container">
      <Hero />
      <img className="dashboard-img" src={dashboardImage} alt="Illustration dashboard" />
      <Footer />
      <Attribution />
    </main>
  )
}

export default App;
