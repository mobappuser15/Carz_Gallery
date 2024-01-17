import React, { useState, useEffect } from "react";
import "./detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import toast from "react-hot-toast";
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

function Details({ selectedProduct, product }) {
	const { uniquekey, vehOdometer } = useParams();
	// console.log(JSON.stringify(product), "useParams");

	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [contactName, setcontactName] = useState("");
	const [pincode, setpincode] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	const [userAnswer, setUserAnswer] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [changeimage, setchangeimage] = useState();
	const [zoom, setZoom] = useState(0);
	const [mobileError, setMobileError] = useState("");
	const [pincodeError, setPincodeError] = useState("");
	const [captchaError, setCaptchaError] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [captchaValid, setCaptchaValid] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [fomshow, setformshow] = useState(false);

	const showform = () => {
		setformshow(!fomshow);
	};

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
			const headers = {
				ApplicationMode: "ONLINE",
				EnvironmentType: "DEMO",
				BrandCode: "UC",
				CountryCode: "IN",
				"Content-Type": "application/json",
			};
			const data = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "CARZ",
				budgetFrom: 0,
				budgetTo: 0,
				vehBrandCode: "",
				vehModelCode: "",
				vehFuel: "",
				loginCompanyID: "ORBIT",
				loginUserId: "Manish",
				loginIpAddress: "192.168.10.32",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();
					responseData.UsedCarVehStockDetail.map((item) => {
						item.uniqueSerial == uniquekey && setStockdata(item);
					});
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`()
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);
	// console.log(stockdata.modelImages, "stockdatakkk [0]");

	const generateNumbers = () => {
		setNum1(Math.floor(Math.random() * 10));
		setNum2(Math.floor(Math.random() * 10));
	};

	const resetCaptcha = () => {
		setNum1(Math.floor(Math.random() * 10));
		setNum2(Math.floor(Math.random() * 10));
		setUserAnswer("");
		setCaptchaValid(false); // Clear captcha validation
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formIsValid = true;

		if (mobile.length !== 10) {
			setMobileError("Please enter 10 digit mobile number");
			formIsValid = false;
		} else {
			setMobileError("");
		}

		if (pincode.length !== 6) {
			setPincodeError("Please enter Pincode");
			formIsValid = false;
		} else {
			setPincodeError("");
		}

		if (parseInt(userAnswer) !== num1 + num2) {
			setCaptchaError("Captcha answer is incorrect");
			formIsValid = false;
		} else {
			setCaptchaError("");
			setCaptchaValid(true);
		}

		if (formIsValid && captchaValid) {
			setModalOpen(true);
		}
	};

	const handleImageClick = (image) => {
		setIsModalOpen(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setModalOpen(false);
	};

	const navigate = useNavigate();

	const reloadPage = () => {
		window.location.reload();
	};

	const HandleDataSave = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "CARZ",
			branchCode: "GGN01",
			prospectLocation: "GGN01",
			title: "",
			entity: "I",
			firstName: contactName,
			middleName: "",
			LastName: "",
			suffix: "",
			regnState: "",
			regnCity: "",
			pincode: pincode,
			email: email,
			contactName: contactName,
			mobile: mobile,
			assembly: "CKD",
			edition: "STD",
			source: "",
			usage: "02",
			refFrom: "10",
			firstAction: "",
			actionDate: "2020-11-10",
			actionComment: "Test",
			campaign: 0,
			dealerCompanyDocket: "0",
			corporateFlag: "N",
			dealType: "OEM_SELECT",
			approveFlag: "N",
			corporateComment: "",
			salesperson: "E10001", //API - create method to be implemented
			projectedClosureDate: "2020-11-15",
			hour: "2020-11-10T14:57:54.853Z",
			demoVehModel: stockdata.vehModelCode,
			demoVehVariant: stockdata.vehVariantCode,
			demoVehChassisNo: "",
			make: stockdata.vehBrandCode, //stock API make 1  ------   make
			subModel: stockdata.vehVariantCode, //stock API submodel 2  ----- varient
			model: stockdata.vehModelCode, //stock API mode 3     ---- model
			qty: 1,
			color: stockdata.exteriorColor, //stock API make exterior color 4
			interiorColor: "STD",
			style: "STD",
			my: stockdata.vehManufactureYear,
			vy: stockdata.vehManufactureYear,
			ActiveRate: "HOT",
			userId: "Manish",
			slotMins: "2020-11-10T14:30:00.853Z",
			slotCount: 1,
			valueString:
				"CUST_JOB_TYPE,SALARIED;PUR_INTENTION,LESS_THAN_2W;COMP_MODELS,AUDIA3;",
			testDriveZone: "GGN",
			teamCode: "A",
			createIP: "7C:46:85:53:E2:33",
		};

		fetch(
			"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/Prospect/SaveNewProspect",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(Datasecond),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast.success(data.result);
				navigate("/");
			})
			.catch((error) => {});
		closeModal();
	};

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		const numericValue = newValue.replace(/[^0-9]/g, "");

		if (numericValue.length <= 10) {
			setmobile(numericValue);
			setMobileError("");
		}
	};

	const handleInputChange1 = (event) => {
		const newValue1 = event.target.value;
		const numericValue1 = newValue1.replace(/[^0-9]/g, "");

		if (numericValue1.length <= 6) {
			setpincode(numericValue1);
			setMobileError("");
			setPincodeError("");
		}
	};

	// const Props = localStorage.getItem("homepagedata");
	// const PropsData = JSON.parse(Props);

	// const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
	// 	`Hi Carz Gallery, I want to know more about  ${window.location.href}`
	// )}`;

	// const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
	// 	`Hi Carz Gallery, I want to know more about the ${PropsData.year} ${PropsData.brand} ${PropsData.model}. Check it out: ${window.location.href}`
	// )}`;

	const isMobile =
		/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	let whatsappLink;
	if (isMobile) {
		// Mobile device
		whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
			`Hi Carz Gallery, I want to know more about the  ${window.location.href}`
		)}`;
	} else {
		// Desktop
		whatsappLink = `https://web.whatsapp.com/send?text=${encodeURIComponent(
			`Hi Carz Gallery, I want to know more about the  ${window.location.href}`
		)}`;
	}

	return (
		<>
			<PageScrollTop />
			<Navbar />
			<SocalMedia />
			<>
				<div
					style={{ position: "top" }}
					className='m-listTableTwo'
					data-scrolling-animation='true'
					data-equal-height='.b-tems_cell'>
					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className='wow ' data-wow-delay='0.5s'>
								Vehicle Details
							</h1>
						</div>
					</section>

					<div className='b-breadCumbs s-shadow'>
						<div className='container '>
							<Link to='/' className='b-breadCumbs__page' onClick={reloadPage}>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<a className='b-breadCumbs__page m-active'>Details</a>
						</div>
					</div>

					{/* test slider */}

					<div className='carousel-wrapper cor_mn'>
						{/* <Carousel breakPoints={breakPoints}>
							{stockdata.modelImages.map((item, index) => (
								<div key={item.uniqueSerial}>
									<a
										id='slider_img'
										class=' '
										href='#'
										data-toggle='modal'
										data-title={item.uri}
										data-target='#image-gallery'>
										<img
											className=' card '
											src={item.uri}
											onClick={(e) => {
												setZoom(index);
											}}
											alt='Another alt text'
											style={{ aspectRatio: "4/4" }}
										/>
									</a>
								</div>
							))}
						</Carousel> */}

						<Carousel breakPoints={breakPoints}>
							{stockdata.modelImages &&
								stockdata.modelImages.map((item, index) => (
									<div key={item.uniqueSerial}>
										<a
											id='slider_img'
											className='' // Use className instead of class
											href='#'
											data-toggle='modal'
											data-title={item.uri}
											data-target='#image-gallery'>
											<img
												className='card'
												src={item.uri}
												onClick={(e) => {
													setZoom(index);
												}}
												alt='Another alt text'
												style={{ aspectRatio: "4/4" }}
											/>
										</a>
									</div>
								))}
						</Carousel>

						{/* {stockdata.modelImages.map((item) => (
							<div key={item.uniqueSerial}>
								<img src={item.uri} alt='image url' />
							</div>
						))} */}
					</div>

					<div class=''>
						<div class='row'>
							<div
								class='modal fade bac_bg_clr '
								id='image-gallery'
								tabindex='-1'
								role='dialog'
								aria-labelledby='myModalLabel'
								aria-hidden='true'>
								<div class='modal-dialog modal-lg mdl_wd'>
									<div class='modal-content bdl_cl_non'>
										<div class='modal-header hd_pd2'>
											<h4 class='modal-title' id='image-gallery-title'></h4>
											<button
												type='button'
												class='close cls_btn'
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
													{stockdata.modelImages &&
														stockdata.modelImages.map((item, i) => (
															<div
																className={"carousel-item active"}
																key={item.uniqueSerial}>
																{zoom != 0 ? (
																	<>
																		<img
																			src={[zoom].uri}
																			alt='...'
																			className=''
																		/>
																		<>{setZoom(0)}</>
																	</>
																) : (
																	<>
																		<img
																			src={item.uri}
																			alt='...'
																			className=''
																		/>
																	</>
																)}
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

					{/* cars image slider model */}

					<section className='b-detail s-shadow'>
						<div className='container'>
							<div className='b-detail__main bac_clr_mn'>
								<div className=''>
									<div className='col-md-8 col-xs-12'>
										<div className='b-detail__main-info'>
											<div
												className='b-detail__main-info-images wow '
												data-wow-delay='0.5s'>
												<div className='row m-smallPadding'>
													<div className='col-xs-10'>
														<div className='d-flex'>
															<h1>{stockdata.vehBrandCode}</h1>

															<a href={whatsappLink} target='_blank'>
																<i
																	id='whatsup_icon'
																	className='fa fa-whatsapp fa-2x'>
																	{" "}
																</i>
															</a>
														</div>

														<aside className='b-detail__main-aside'>
															<div
																className='b-detail__main-aside-desc wow '
																data-wow-delay='0.5s'>
																<h2
																	className='s-titleDet'
																	style={{ marginTop: "40px" }}>
																	Description
																</h2>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Make
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehBrandCode}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Model
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehModelCode}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Fuel
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehFuelCode}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Variant
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehVariantDesc}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Exterior
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.exteriorColor}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Price
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehSellPriceRecommended}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Transmission
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.transmissionDesc}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Kilometres
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehOdometer} KM
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Owner Serial No.
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehOwnerSerial}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Manufacture Year
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.vehManufactureYear}
																		</p>
																	</div>
																</div>

																<div className='row boder_lin1'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Registration No.
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{stockdata.VehRegn1}
																		</p>
																	</div>
																</div>
															</div>
														</aside>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className=''>
										<div className='col-md-4 col-xs-12'>
											<aside className='b-detail__main-aside'>
												<div
													className='b-detail__main-aside-desc wow zoomInUp'
													data-wow-delay='0.5s'>
													<h2 className='s-titleDet'>
														INQUIRE ABOUT THIS VEHICLE
													</h2>
													<div className='b-detail__main-aside-about-call'>
														<span className='fa fa-phone'></span>
														<div> +91 9873991899</div>
														<p>Call the seller 24/7 and they would help you.</p>
													</div>
													<div className='b-detail__main-aside-about-seller dtl_clr1'>
														<p>Seller Info</p>
													</div>
													<div className='b-detail__main-aside-about-form'>
														<div className='b-detail__main-aside-about-form-links'>
															<button
																class='btn_call form_display'
																onClick={showform}>
																Reserve Now
															</button>

															<a
																class='btn_wht'
																href='https://api.whatsapp.com/send/?phone=919958241899&text= Hello Carz Gallery+Team%2C+I+would+like+to+know+more&type=phone_number&app_absent=0'
																target='_blank'>
																Whatsapp
															</a>

															<a
																href='#'
																className='j-tab m-active s-lineDownCenter in_siz'
																data-to='#form1'>
																GENERAL INQUIRY
															</a>
														</div>
														{fomshow && (
															<form
																class='form_display'
																id='form1'
																style={{ fontSize: "15px" }}>
																Name <span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='text'
																	placeholder='Please Enter Name'
																	name='contactName'
																	onChange={(e) =>
																		setcontactName(e.target.value)
																	}
																/>
																<br />
																Email <span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='email'
																	placeholder=' Please Enter Email Id'
																	onChange={(e) => setemail(e.target.value)}
																	name='email'
																/>
																<br />
																Mobile No.{" "}
																<span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='text'
																	placeholder='Please Enter Phone No.'
																	name='mobile'
																	value={mobile}
																	onChange={handleInputChange}
																/>
																{mobileError && (
																	<span style={{ color: "red" }}>
																		{mobileError}
																	</span>
																)}
																<br />
																Pincode <span style={{ color: "red" }}>*</span>
																<input
																	className='phone_number'
																	type='text'
																	placeholder=' Please Enter Pincode'
																	name='pincode'
																	value={pincode}
																	onChange={handleInputChange1}
																/>
																{pincodeError && (
																	<span style={{ color: "red" }}>
																		{pincodeError}
																	</span>
																)}
																<form>
																	<span
																		className='d-flex'
																		style={{
																			fontWeight: "600",
																			marginTop: "0",
																			height: "15px",
																			color: "green",
																		}}>
																		<span
																			style={{
																				fontSize: "25px",
																				marginLeft: "5px",
																				marginTop: "20px",
																				color: "red",
																				fontWeight: "800px ",
																			}}>
																			{num1} + {num2} = ?
																		</span>
																		<i
																			style={{
																				marginLeft: "15px",
																				marginTop: "30px",
																				fontSize: "19px",
																			}}
																			onClick={resetCaptcha}
																			class='fa fa-refresh fa-2x'
																			aria-hidden='true'></i>
																	</span>

																	<label
																		style={{
																			color: "black",
																			marginTop: "10px",
																		}}></label>
																	<div
																		className=''
																		style={{ marginTop: "-30px" }}>
																		Captcha{" "}
																		<span style={{ color: "red" }}>*</span>
																		<input
																			className='phone_number'
																			placeholder='Please Enter Captcha'
																			type='number'
																			value={userAnswer}
																			onChange={(event) =>
																				setUserAnswer(event.target.value)
																			}></input>
																	</div>
																</form>
																{captchaValid && (
																	<span style={{ color: "red" }}>
																		{captchaValid}
																	</span>
																)}
																<button
																	id=''
																	style={{
																		backgroundColor: "#c1272d Color:#fff",
																	}}
																	type='button'
																	data-toggle='modal'
																	onClick={handleSubmit}
																	href='#ignismyModal'
																	className='btn m-btn'>
																	RAISE ENQUIRY
																	<span
																		id='arrowiconbtn'
																		className='fa fa-ticket fa-5x'></span>
																</button>
																{/* popup message */}
																{!mobileError && captchaValid && (
																	<div className=''>
																		<div className='row'>
																			<div
																				className='modal fade'
																				id='ignismyModal'
																				role='dialog'>
																				<div
																					className='modal-dialog mod_top_spc'
																					style={{ margingTop: "90px" }}>
																					<div className='modal-content'>
																						<div className='modal-header mdl_hd'>
																							<button
																								type='button'
																								className='close cls_btn'
																								data-dismiss='modal'
																								aria-label=''>
																								<span>×</span>
																							</button>
																							<hr />
																						</div>

																						<div className='modal-body'>
																							<div className='thank-you-pop'>
																								<img
																									style={{
																										width: "50px",
																										marginLeft: "200px",
																									}}
																									src='http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png'
																									alt=''
																								/>
																								<h4
																									style={{
																										marginTop: "10px",
																										marginLeft: "150px",
																									}}>
																									Are you sure to raise enquiry?
																								</h4>
																								<p></p>
																								<div className='d-flex flx_mn_btn '>
																									<button
																										onClick={HandleDataSave}
																										style={{
																											backgroundColor: "green",
																											width: "60px",
																											color: "white",
																											fontSize: "15px",
																											margin: "5px",
																										}}
																										type='submit'
																										className='btn'
																										data-dismiss='modal'>
																										Yes
																									</button>

																									<button
																										style={{
																											backgroundColor:
																												"#c1272d",

																											width: "60px",
																											color: "white",
																											fontSize: "15px",
																											margin: "5px",
																										}}
																										type='button'
																										className='close no_btn'
																										data-dismiss='modal'
																										aria-label=''>
																										No
																									</button>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																)}
															</form>
														)}
													</div>
												</div>
											</aside>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div className='b-features'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<ul className='b-features__items itm_cen'>
									<li
										className='wow zoomInUp'
										data-wow-delay='0.3s'
										data-wow-offset='100'>
										We Offers Lower Cars Prices
									</li>
									<li
										className='wow zoomInUp'
										data-wow-delay='0.3s'
										data-wow-offset='100'>
										Largest Car Dealership
									</li>
									<li
										className='wow zoomInUp'
										data-wow-delay='0.3s'
										data-wow-offset='100'>
										Multipoint Safety Check
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</>
		</>
	);
}
export default Details;
