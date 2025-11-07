import { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		document.body.classList.toggle("dark", theme === "dark");
	}, [theme]);

	return (
		<>
			<div className="flex justify-end">
				<button
					type="button"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					className="px-3 py-2 cursor-pointer"
				>
					{theme === "light" ? "🌙" : "☀️"}
				</button>
			</div>
			<Card />
			<Footer />
		</>
	);
};
export default App;
