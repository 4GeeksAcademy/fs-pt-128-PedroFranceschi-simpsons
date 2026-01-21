import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Simpsons Character Guide</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button
								className="btn btn-primary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
							>
								Favorites <span className="badge bg-secondary ms-2">0</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li className="dropdown-item text-muted">No favorites</li>
							</ul>
						</div>
					</Link>
				</div>


			</div>
		</nav>
	);
};