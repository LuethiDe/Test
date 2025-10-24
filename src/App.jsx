import { useState } from "react";
import "./App.css";
import { Header } from "./Header.jsx";
import { MainArea } from "./MainArea.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Footer } from "./Footer.jsx";

export function App() {
  const [gift, setGift] = useState(false);
  const [meme, setMeme] = useState(false);

  return (
    <div className="app">
      <Header gift={gift} setGift={setGift} meme={meme} setMeme={setMeme} />
      <Sidebar />
      <MainArea gift={gift} setGift={setGift} meme={meme} setMeme={setMeme} />
      <Footer />
    </div>
  );
}
