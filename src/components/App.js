import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Splash from "./Splash";
import About from "./About";

function App() {
	const [stateIndex, setIndex] = useState(6);
	const [allData, setAllData] = useState();

	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				<Switch>
					<Route exact path="/" >
						<Splash setAllData={setAllData} />
					</Route>

					<Route exact path="/search" >
						<Main
							stateIndex={stateIndex}
							allData={allData}
							setAllData={setAllData}
						/>
					</Route>

					<Route exact path="/about">
						<About />
					</Route>

				</Switch>

				<Footer stateIndex={stateIndex} setIndex={setIndex} />
			</div>
		</BrowserRouter>
	);
}

export default App;
