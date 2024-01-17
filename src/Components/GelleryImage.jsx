import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import PageScrollTop from "./PageScrollTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 3 },
];

const breakPointss = [
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

function GelleryImage({ detailspage, setDetailspage }) {
	const [zoom, setZoom] = useState(null);
	const galleryImage = [
		{
			id: 1,
			img: "images/gallery/g1.jpg",
		},
		{
			id: 2,
			img: " images/gallery/g2.jpg",
		},
		{
			id: 1000000,
			img: " images/gallery/g3.jpg",
		},
		{
			id: 1100000,
			img: " images/gallery/g4.jpg",
		},

		{
			id: 1500000,
			img: "images/gallery/g5.jpg",
		},

		{
			id: 2000000,
			img: " images/gallery/g6.jpg",
		},

		{
			id: 2500000,
			img: "images/gallery/g8.jpg",
		},

		{
			id: 3000000,
			img: "images/gallery/g9.jpg",
		},
		{
			id: 4000000,
			img: "images/gallery/g1010.jpg",
		},

		{
			id: 5000000,
			img: "images/gallery/g17.jpg",
		},

		{
			id: 50,
			img: "images/gallery/g52.jpg",
		},

		{
			id: 53,
			img: "images/gallery/g53.jpg",
		},

		{
			id: 54,
			img: "images/gallery/g54.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g55.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g56.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g57.jpg",
		},

		{
			id: 55,
			img: "images/gallery/g58.jpg",
		},
	];
	const handleHomeClick = () => {
		setDetailspage(false);
	};
	return (
		<>
			<Navbar onHomeClick={handleHomeClick} />
			<SocalMedia />
			<div>
				<PageScrollTop />
				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow ' data-wow-delay='0.5s'>
							Gallery
						</h1>
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container '>
						<Link to='/' className='b-breadCumbs__page'>
							Home
						</Link>
						<span className='fa fa-angle-right'></span>
						<a className='b-breadCumbs__page m-active'>Gallery</a>
					</div>
				</div>

				<div className='carousel-wrapper cor_mn'>
					{galleryImage.map((item) => (
						<div key={item.id}>
							<a
								id='slider_img'
								class=' '
								href='#'
								data-toggle='modal'
								data-title={item.img}
								data-target='#image-gallery'>
								{/* <img
								className=' card '
								src={item.img}
								onClick={(e) => setZoom(item.img)}
								alt='Another alt text'
								style={{ aspectRatio: "4/4" }}
							/> */}
							</a>

							<div class=''>
								<div class='row'>
									<div
										class='modal fade'
										id='image-gallery'
										tabindex='-1'
										role='dialog'
										aria-labelledby='myModalLabel'
										aria-hidden='true'>
										<div class='modal-dialog modal-lg mdl_wd'>
											<div class='modal-content'>
												<div class='modal-header'>
													<h4 class='modal-title' id='image-gallery-title'></h4>
													<button
														type='button'
														class='close'
														data-dismiss='modal'>
														<span aria-hidden='true'>×</span>
														<span class='sr-only'>Close</span>
													</button>
												</div>

												<section className='b-slider'>
													<div
														id='carouselExampleFade'
														class='carousel slide carousel-fade'
														data-bs-ride='carousel'>
														<Carousel breakPointss={breakPointss}>
															{galleryImage.map((item) => (
																<div class='carousel-item active' key={item.id}>
																	<img src={item.img} alt='...' className='' />

																	{/* <ThreeSixty
                                                    amount={75}
                                                    imagePath={item.uri}
                                                    fileName='output_{index}.jpeg'
                                                    spinReverse
                                                /> */}
																</div>
															))}
														</Carousel>
													</div>
												</section>

												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div class='gallery_mn'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title=''
									data-image='images/gallery/g1.jpg'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g1.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title=''
									data-image='images/gallery/g2.jpg'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g2.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title=''
									data-image='images/gallery/g3.jpg'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g3.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Test1'
									data-image='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g4.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g5.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g6.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g8.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g9.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g10.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='images/gallery/g1010.jpg'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g1010.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>
							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g17.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g38.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g52.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g53.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g54.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g55.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g56.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g57.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div class='col-lg-3 col-md-4 col-xs-6 thumb thum_pd'>
								<a
									class='thumbnail'
									href='#'
									data-image-id=''
									data-toggle='modal'
									data-title='Im so nice'
									data-image='https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src='images/gallery/g58.jpg'
										alt='Another alt text'
									/>
								</a>
							</div>

							<div
								class='modal fade'
								id='image-gallery'
								tabindex='-1'
								role='dialog'
								aria-labelledby='myModalLabel'
								aria-hidden='true'>
								<div class='modal-dialog modal-lg'>
									<div class='modal-content'>
										<div class='modal-header'>
											<h4 class='modal-title' id='image-gallery-title'></h4>
											<button type='button' class='close' data-dismiss='modal'>
												<span aria-hidden='true'>×</span>
												<span class='sr-only'>Close</span>
											</button>
										</div>
										<div class='modal-body'>
											<img
												id='image-gallery-image'
												class='img-responsive col-md-12'
												src='images/gallery/g1.jpg'
											/>
										</div>
										<div class='modal-footer'>
											<button
												type='button'
												class='btn btn-secondary float-left'
												id='show-previous-image'>
												<i class='fa fa-arrow-left'></i>
											</button>

											<button
												type='button'
												id='show-next-image'
												class='btn btn-secondary float-right'>
												<i class='fa fa-arrow-right'></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='youtube_mn'>
					<div class='container'>
						<div class='row'>
							<div class='youtube_tx'>
								<h2>Youtube Vlogs</h2>

								<div class='row'>
									<div class='col-md-4 col-sm-6'>
										<a
											href='https://www.youtube.com/watch?si=HNppf0eq_KF1x7ky&v=Wm6DztYfuQg&feature=youtu.be'
											target='_blank'>
											<div class='service-content'>
												<span class='service-image'>
													<img className='' src='images/about/b1.jpg' />
												</span>
												<h3>
													2014 Toyota Fortuner For Sale | Used Fortuner in Delhi
													| Carz Gallery
												</h3>
											</div>
										</a>
									</div>

									<div class='col-md-4 col-sm-6'>
										<a
											href='https://www.youtube.com/watch?v=Er6efrw1qj0'
											target='_blank'>
											<div class='service-content'>
												<span class='service-image'>
													<img className='' src='images/about/b2.jpg' />
												</span>
												<h3>
													सबसे सस्ती पर सबसे अच्छी कार ले जाओ | आंख बंद करके ले
													जाओ कार | Meri wali Carr
												</h3>
											</div>
										</a>
									</div>

									<div class='col-md-4 col-sm-6'>
										<a
											href='https://www.youtube.com/watch?v=PFzCHTYKKYE'
											target='_blank'>
											<div class='service-content'>
												<span class='service-image'>
													<img className='' src='images/about/b3.jpg' />
												</span>
												<h3>
													3 लाख़ में कार ख़रीदें | Buy i20, Thar, Baleno, Xuv
													500, Venue | Carz Gallery | #mSharifVlogs
												</h3>
											</div>
										</a>
									</div>

									<div class='col-md-4 col-sm-6'>
										<a
											href='https://www.youtube.com/watch?v=RzlXtO2GzAY'
											target='_blank'>
											<div class='service-content'>
												<span class='service-image'>
													<img className='' src='images/about/b4.jpg' />
												</span>
												<h3>
													Used Cars In Only 2 Lakh | Second Hand Cars | Buy i10,
													I20, Wagnor, Amaze, SX4 | Carz Gallery
												</h3>
											</div>
										</a>
									</div>

									<div class='col-md-4 col-sm-6'>
										<a
											href='https://www.youtube.com/watch?v=b5o8xmrIp5U'
											target='_blank'>
											<div class='service-content'>
												<span class='service-image'>
													<img className='' src='images/about/b5.jpg' />
												</span>
												<h3>
													Used BMW X1 For Sale | BMW Most Affordable Car | Carz
													Gallery
												</h3>
											</div>
										</a>
									</div>

									<div class='col-md-4 col-sm-6'>
										<a
											href='https://www.youtube.com/watch?v=kUclBopsfdo'
											target='_blank'>
											<div class='service-content'>
												<span class='service-image'>
													<img className='' src='images/about/b6.jpg' />
												</span>
												<h3>Thar Hi #Thar | #meriwalicarr</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default GelleryImage;
