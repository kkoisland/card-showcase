import Card from "./Card";
import Footer from "./Footer";

const App = () => {
	const params = new URLSearchParams(window.location.search);
	const src = params.get("src") ?? "";

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
					title="Download"
					onClick={(e) => {
						e.stopPropagation();
						downloadFile(src);
					}}
				>
					⬇️
				</button>
			</div>
			<Card />
			<Footer />
		</>
	);
};
export default App;
