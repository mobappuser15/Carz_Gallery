import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import "./detail.css";
import styled from "./Item";
import toast from "react-hot-toast";
import "./about.css";
import ReactLoading from "react-loading";
import PageScrollTop from "./PageScrollTop";
import Details from "./Details";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";
import Searchdata from "./Searchdata";

function About({ detailspage, setDetailspage }) {
	const modalRef = useRef(null);
	const [slideIndex, setSlideIndex] = useState(1);

	const openModal = () => {
		if (modalRef.current) {
			modalRef.current.style.display = "block";
		}
	};

	const closeModal = () => {
		if (modalRef.current) {
			modalRef.current.style.display = "none";
		}
	};

	const plusSlides = (n) => {
		setSlideIndex((prevIndex) => prevIndex + n);
	};

	const currentSlide = (n) => {
		setSlideIndex(n);
	};

	useEffect(() => {
		showSlides(slideIndex);
	}, [slideIndex]);

	const showSlides = (n) => {
		const slides = document.getElementsByClassName("mySlides");
		const dots = document.getElementsByClassName("demo");
		const captionText = document.getElementById("caption");

		if (slides.length === 0) {
			return; // Check if elements are available
		}

		if (n > slides.length) {
			setSlideIndex(1);
		} else if (n < 1) {
			setSlideIndex(slides.length);
		} else {
			setSlideIndex(n);
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = i + 1 === slideIndex ? "block" : "none";
		}

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove("active");
		}

		dots[slideIndex - 1].classList.add("active");
		captionText.innerHTML = dots[slideIndex - 1].alt;
	};

	const handleHomeClick = () => {
		setDetailspage(false);
	};
	return (
		<>
			<Navbar onHomeClick={handleHomeClick} />
			<SocalMedia />
			<div className=''>
				<PageScrollTop />
				<>
					<div className='m-about'>
						<section className='b-pageHeader'>
							<div className='container'>
								<h1 className=' '>About Us</h1>
							</div>
						</section>
						<div className='b-breadCumbs s-shadow'>
							<div className='container'>
								<Link to='/' className='b-breadCumbs__page '>
									Home
								</Link>
								<span className='fa fa-angle-right'></span>
								<Link className='b-breadCumbs__page m-active'>About Us</Link>
							</div>
						</div>

						<div className='abot_new1'>
							<div className='container'>
								<div className='col-md-6 col-sm-12 col-xs-12 row abt3_tx'>
									<img
										id=''
										className='img-responsive center-block  '
										alt='best'
										src='images/about/boss.jpg'></img>

									<p className='md_nam'>Mr. Manish Jain MD</p>
								</div>

								<div className=''>
									<div className='col-md-6 col-sm-12 col-xs-12 abt2_tx'>
										<h4>Who we are...</h4>
										<p>
											Established in 2010, Carz Gallery has built a strong
											reputation for our customer-oriented approach. Over the
											past 13 years, we have always prioritized total customer
											satisfaction as our main motive. We take pride in offering
											a wide selection of high-quality preowned cars, ensuring
											that our customers find the perfect vehicle to meet their
											needs.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class='service_sec_mn'>
							<div class='container'>
								<h2>
									<b>WHY</b> CHOOSE US
								</h2>

								<div class='row'>
									<div class='col-md-4 col-sm-6'>
										<div class='serviceBox'>
											<a href='#/carloans'>
												<div class='service-icon'></div>
											</a>
											<h3 class='title'>Auto Loans</h3>
											<p class='description'>
												Are you in need of a reliable and affordable auto loan?
												Look no further! We will help in providing auto loans to
												help you get behind the wheel of your dream car.
											</p>
										</div>
									</div>
									<div class='col-md-4 col-sm-6'>
										<div class='serviceBox purple'>
											<a href='#/insurence'>
												<div class='service-icon'></div>
											</a>
											<h3 class='title'>Auto Insurance</h3>
											<p class='description'>
												We understand the importance of protecting your valuable
												asset - your car. With reliable car insurance coverage,
												you can drive with peace of mind, knowing that you are
												financially protected.
											</p>
										</div>
									</div>

									<div class='col-md-4 col-sm-6'>
										<div class='serviceBox red'>
											<a href='#/emical'>
												{" "}
												<div class='service-icon'></div>
											</a>
											<h3 class='title'>EMI calculator</h3>
											<p class='description'>
												I wanted to introduce you to our latest tool that will
												simplify your financial planning - our EMI Calculator!
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='b-features'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-12 '>
										<ul className='b-features__items itm_cen'>
											<li className=' '>We Offers Lower Cars Prices</li>
											<li className=' '>Largest Car Dealership</li>
											<li className=' '>Multipoint Safety Check</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			</div>

			<Footer />
		</>
	);
}

export default About;
