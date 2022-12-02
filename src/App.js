import React from "react";
import Center from "./Components/Center/Center";
import Work from "./Components/Work/Work";
import Yangi from "./Components/Yangi/Yangi";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Yangi/>
      <Work/>
      <Center/>
      <Footer/>
    </div>
  );
}

export default App;
