import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import toast from "react-hot-toast";
import Homepage from "./HomePage";
import Details from "./Details";
import ReactLoading from "react-loading";
import ErrorPage from "./ErrorPage";

const Navbar = ({ onHomeClick }) => {
	const navRef = useRef();
	const [page, setPage] = useState(false);
	const [refreshContact, setRefreshContact] = useState(false);
	const [refreshKey, setRefreshKey] = useState(0);
	const [shouldRefreshContact, setShouldRefreshContact] = useState(false); // Fl
	const refreshContactComponent = () => {
		if (!shouldRefreshContact) {
			setShouldRefreshContact(true);
			setRefreshKey(refreshKey + 6);
		}
	};

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const reloadPage = () => {
		window.location.reload();
	};

	const resreshdatastcock = () => {
		if (onHomeClick) {
			<ReactLoading type='spin' color='#f76d2b' height={200} width={100} />;

			setTimeout(() => {
				setRefreshContact(false);
			}, 6000);
		} else {
			setRefreshContact(false);
		}
	};

	return (
		<header className=' fixed-top'>
			<Link
				className='logo_siz'
				to='/'
				onClick={() => {
					onHomeClick();
				}}>
				<img className='logo_siz3' src='images/logo/logo-1.png' />
			</Link>
			<nav className='nv_rt' ref={navRef}>
				<Link
					href=''
					to='/'
					onClick={() => {
						showNavbar();
						onHomeClick();
					}}>
					<span>HOME</span>
				</Link>

				<Link
					to='/salecar'
					onClick={() => {
						showNavbar();
					}}>
					SELL CAR
				</Link>
				<Link
					to='/detailsdata '
					onClick={() => {
						showNavbar();
						onHomeClick();
						resreshdatastcock();
					}}>
					<span>BUY CAR</span>
				</Link>

				<Link
					to='/gellery'
					onClick={() => {
						showNavbar();
					}}>
					GALLERY
				</Link>
				<Link
					to='/about'
					onClick={() => {
						showNavbar();
					}}>
					ABOUT US
				</Link>
				<Link
					to='/contact'
					onClick={() => {
						showNavbar();
					}}>
					CONTACT US
				</Link>

				<button
					className='nav-btn nav-close-btn visible-xs'
					onClick={showNavbar}>
					<i class='fa-solid fa-xmark'></i>
				</button>
			</nav>
			<button className='nav-btn visible-xs' onClick={showNavbar}>
				<i class='fa-solid fa-bars'></i>
			</button>

			<div className='icon_rt'>
				<div className='b-topBarsocial-wrapper none'>
					<div className='b-topbar-social'>
						<ul>
							<li>
								<a href='' style={{ marginTop: "10px" }}>
									<span className='hedr_no'>
										<i class='fa-sharp fa fa-envelope iccnn_clr'></i>{" "}
										carzgallery3@gmail.com
									</span>
								</a>
							</li>

							<li>
								<a href='tel:+91 98739 1899' style={{ marginTop: "10px" }}>
									<span className='hedr_no'>
										<i class='fa-sharp fa-solid fa-phone iccnn_clr'></i> +91
										9873991899
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
