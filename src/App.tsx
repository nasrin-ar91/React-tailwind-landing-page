import Body from "./components/body/Body";
import Footer from "./components/shared/footer/Footer";
import Header from "./components/shared/header/Header";

function App() {
	return (
		<div className="flex flex-col w-full min-h-screen ">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
