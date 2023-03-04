import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import { FoodProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <FoodProvider>
        <main className="container content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </main>
      </FoodProvider>
      <Footer />
    </>
  );
}

export default App;
