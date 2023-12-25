import dashboardImage from "./assets/illustration-dashboard.png"
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

const App = () => {

  return (
    <>
      <main className="main">
        <Hero />
        <div className="container"><img className="dashboard-img" src={dashboardImage} alt="Illustration dashboard" /></div>
        <Footer />
      </main>
      <Attribution />
    </>
  )
}

export default App;
