import React from "react";
import { FaCompass, FaHome, FaImage, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
	return (
		<header>
			<div className="navigation-links">
				<a
					href="/"
					target="_blank"
					rel="noopener noreferrer"
					className="icon"
					style={{ color: "white" }}
					onMouseOver={(e) =>
						(e.currentTarget.style.color = "#1389fd")
					}
					onMouseOut={(e) => (e.currentTarget.style.color = "white")}
				>
					<FaHome />
				</a>
				<a
					href="/nasainfo"
					target="_blank"
					rel="noopener noreferrer"
					className="icon"
					style={{ color: "white" }}
					onMouseOver={(e) =>
						(e.currentTarget.style.color = "#1389fd")
					}
					onMouseOut={(e) => (e.currentTarget.style.color = "white")}
				>
					<FaImage />
				</a>
				<a
					href="https://exploreplanets.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="icon"
					style={{ color: "white" }}
					onMouseOver={(e) =>
						(e.currentTarget.style.color = "#1389fd")
					}
					onMouseOut={(e) => (e.currentTarget.style.color = "white")}
				>
					<FaCompass />
				</a>
				
			</div>
		</header>
	);
};

export default Navbar;
