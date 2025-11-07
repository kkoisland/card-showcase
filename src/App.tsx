import { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
	const [theme, setTheme] = useState("light");
	const params = new URLSearchParams(window.location.search);
	const src = params.get("src") ?? "";

	useEffect(() => {
		document.body.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const downloadFile = (src: string) => {
		const a = document.createElement("a");
		a.href = src;
		a.download = src.split("/").pop() || "card.pdf";
		a.click();
	};

	return (
		<>
			<div className="flex justify-end">
				<button
					type="button"
					className="px-3 py-2 cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						downloadFile(src);
					}}
				>
					⬇️
				</button>
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
