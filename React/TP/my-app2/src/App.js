import Footer from "./composants/footer/footer";
import Navbar from "./composants/navbar/navbar";
import Bonjour from "./fonctions/bonjour";

function App() {
  
    return (
    <>
        <Navbar />
        <Bonjour pseudo="Ultimat" titre=" Le Challenger"/>
        <Footer />
    </>
      );
    }
    
    export default App;
