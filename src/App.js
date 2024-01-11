import Navbar from './Navbar';
import Inicio from './Inicio';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App_Contenido">
        <Inicio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
