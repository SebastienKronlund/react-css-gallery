import React, { useState } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

	const [stateIndex, setIndex] = useState(6);

	return (
		<div className="App">
			<Header />
			<Main stateIndex={stateIndex} />
      		<Footer stateIndex={stateIndex} setIndex={setIndex} />
		</div>
	);
}

export default App;
