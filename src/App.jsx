/* import { Container } from "@mui/material"; */
import { Container } from "@mui/material";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 5 }}></Container>
      <div>
        <h1>¡Bienvenido a HELLCAT SHOP!</h1>
        <h3>Donde encontraras los Mejores Polos Personalizados</h3>
        <ItemListContainer greeting="¡Hola! Esto es un ejemplo de prop greeting jejeje." />
      </div>
    </>
  );
}

export default App;
