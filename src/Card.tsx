import { useState } from "react";

const Card = () => {
	const params = new URLSearchParams(location.search);
	const src = params.get("src");
	const [showIframe, setShowIframe] = useState(false);
	const [loading, setLoading] = useState(true);

	if (!src) return <p>No image source provided.</p>;

	return (
		<button
			type="button"
			className="w-screen h-screen flex justify-center p-0 m-0 bg-transparent border-0"
			onClick={() => {
				setShowIframe(!showIframe);
				setLoading(true);
			}}
		>
			{loading && (
				<div className="absolute flex items-center justify-center">
					<div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin" />
				</div>
			)}

			{showIframe ? (
				<>
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setShowIframe(false);
						}}
						className="absolute top-2 right-12 z-10"
					>
						✖
					</button>
					<iframe
						src={src}
						title="Greeting Card"
						className="w-full h-full border-none"
						onLoad={() => setLoading(false)}
					/>
				</>
			) : (
				<img
					src={src}
					alt="Greeting Card"
					className="max-w-full max-h-full object-contain"
					onLoad={() => setLoading(false)}
				/>
			)}
		</button>
	);
};

export default Card;
