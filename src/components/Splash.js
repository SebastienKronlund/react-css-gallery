import React from 'react';
import SearchBar from './SearchBar';
import khajiit from "../khajiit.png";

import "./styling/Splash.css";

export default function Splash({ setAllData }) {
    return (
        <main>
          <SearchBar setAllData={setAllData} />
          <img src={khajiit} className="splash-BG" alt="khajiit" />
        </main>
    )
}
