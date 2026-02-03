import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()


	const deleteFavorito = (id) => {
		dispatch({ type: 'remove_fav', payload: id })
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Simpsons Character Guide</span>
				</Link>

				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
						>
							Favorites
							<span className="badge bg-secondary ms-2">
								{store.favorites.length}
							</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-end">
							{
								store.favorites.length === 0 ? (
									<li className="dropdown-item text-muted">No favorites</li>
								) : (
									store.favorites.map(fav => (
										<li
											key={fav.id}
											className="dropdown-item-text d-flex justify-content-between align-items-center"
										>
											{fav.name}

											<button
												className="btn"
												onClick={(e) => {
													e.stopPropagation();
													deleteFavorito(fav.id);
												}}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													className="bi bi-x-circle" viewBox="0 0 16 16"
												>
													<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
													<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
												</svg>
											</button>
										</li>
									))
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav >
	);
};
