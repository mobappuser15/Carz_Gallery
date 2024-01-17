import React, { useState, useEffect } from "react";
import CarLoan from "./CarLoan";
import Gellery from "./Gellery";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import PageScrollTop from "./PageScrollTop";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";
import { useParams } from "react-router-dom";

const breakPoints = [
	{ width: 2, itemsToShow: 2 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 3 },
];

const breakPoints2 = [
	{ width: 2, itemsToShow: 2 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

export default function HomePage() {
	const [detailspage, setDetailspage] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);
	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [source, setSource] = useState([]);
	const [typedata, setDatatype] = useState([]);
	const [varient, setVarient] = useState([]);
	const [vyear, setVechileYear] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [transmission, setTransmission] = useState([]);
	const [selectedItem, setSelectedItem] = useState("");
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selecttransmission, setSelecttransmission] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState("");
	const [selectedModel, setSelectedModel] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [showdata, setShowdata] = useState(false);
	const [methu, setMethu] = useState([]);
	var [homepage, setHomepage] = useState(false);

	const handleHomeClick = () => {
		setDetailspage(false);
	};

	// make list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MAKE",
			loginUserId: "MANISH",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setData(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// model list

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MODEL",
			vehMake: codemodel,

			loginUserId: "MANISH",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setModel(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemodel(event.target.value);
		setcodemake(event.target.value);
	};

	const handleSelectChangeminprize = (event) => {
		setMinRange(event.target.value);
	};

	const handleSelectChangemaxnprize = (event) => {
		setMaxRange(event.target.value);
	};

	const navigate = useNavigate();

	// stock details

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
					setStockdata(responseData?.UsedCarVehStockDetail);
					setMethu(responseData?.UsedCarVehStockDetail);

					// setDemo(responseData?.UsedCarVehStockDetail);
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

	let { paramData } = useParams();

	const singleProducthandle = (uniqueSerial, vehOdometer) => {
		const product = stockdata.find(
			(item) => item.uniqueSerial === uniqueSerial,
			(item) => item.vehOdometer === vehOdometer
		);

		navigate(
			`/detailsparticular/${product.uniqueSerial}/${product.vehOdometer}`
		);
		setSelectedProduct(product);
		setDetailspage((prevDetailspage) => !prevDetailspage);
	};

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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "CARZ",
			loginUserId: "MANISH",
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const filterDataCars = (e) => {
		e.preventDefault();
		fetchData();

		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const reSet = () => {
		setDemo(stockdata);
	};

	const reloadPage = () => {
		window.location.reload(false);
		// toast.success("meaage");
	};

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);

	const Amountdatamax = [
		{
			id: 100000,
			img: " 1 Lac",
		},
		{
			id: 500000,
			img: " 5 Lac",
		},
		{
			id: 1000000,
			img: " 10 Lac",
		},
		{
			id: 1100000,
			img: " 11 Lac",
		},

		{
			id: 1500000,
			img: "15 Lac",
		},

		{
			id: 2000000,
			img: " 20 Lac",
		},

		{
			id: 2500000,
			img: "25 Lac",
		},

		{
			id: 3000000,
			img: "30 Lac",
		},
		{
			id: 4000000,
			img: "40  Lac",
		},

		{
			id: 5000000,
			img: "50 Lac",
		},

		{
			id: 6000000,
			img: "60  Lac",
		},
		{
			id: 7000000,
			img: "70 Lac",
		},
	];
	const Amountdatamin = [
		{
			id: 100000,
			img: " 1 Lac",
		},
		{
			id: 500000,
			img: " 5 Lac",
		},
		{
			id: 1000000,
			img: " 10 Lac",
		},
		{
			id: 1100000,
			img: " 11 Lac",
		},

		{
			id: 1500000,
			img: "15 Lac",
		},

		{
			id: 2000000,
			img: " 20 Lac",
		},

		{
			id: 2500000,
			img: "25 Lac",
		},

		{
			id: 3000000,
			img: "30 Lac",
		},
		{
			id: 4000000,
			img: "40  Lac",
		},

		{
			id: 5000000,
			img: "50 Lac",
		},

		{
			id: 6000000,
			img: "60  Lac",
		},
		{
			id: 7000000,
			img: "70 Lac",
		},
	];
	const reset = () => {
		setShowdata(false);
		setSelectedItem("");
		setSelectmodel("");
		setMinRange("");
		setMaxRange("");
		setStockdata(methu);
	};

	return (
		<div className=''>
			<Navbar onHomeClick={handleHomeClick} />
			<PageScrollTop />
			<SocalMedia />

			<>
				<div>
					<div
						className='m-home'
						data-scrolling-animations='true'
						data-equal-height='.b-auto__main-item'>
						<section class='jk-slider'>
							<div
								id='carousel-example'
								class='carousel slide'
								data-ride='carousel'>
								<ol class='carousel-indicators'>
									<li
										data-target='#carousel-example'
										data-slide-to='0'
										class='active'></li>
									<li data-target='#carousel-example' data-slide-to='1'></li>
									<li data-target='#carousel-example' data-slide-to='2'></li>
								</ol>

								<div class='carousel-inner'>
									<div class='item active'>
										<a href='#'>
											<img className='sli_pic1' src='images/slider1.jpg' />
										</a>
										<div class='hero'>
											<hgroup>
												<img
													className='logo_siz2'
													src='images/logo/logo-2.png'
												/>
												<h3>For the Lover of Cars</h3>
											</hgroup>
										</div>
									</div>
									<div class='item'>
										<a href='#'>
											<img className='sli_pic2' src='images/slider2.jpg' />
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>
									<div class='item'>
										<a href='#'>
											<img className='sli_pic2' src='images/slider3.jpg' />
										</a>
										<div class='hero'>
											<hgroup></hgroup>
										</div>
									</div>
								</div>

								<a
									class='left carousel-control'
									href='#carousel-example'
									data-slide='prev'>
									<span
										class='glyphicon fa fa-angle-left lft_aro'
										style={{ marginLeft: "50%" }}></span>
								</a>

								<a
									class='right carousel-control'
									href='#carousel-example'
									data-slide='next'>
									<span class='glyphicon fa fa-angle-right lft_aro'></span>
								</a>
							</div>
						</section>

						{/* <div class='wrapper'>
							<p class='demo-1'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
								odio temporibus voluptas error distinctio hic quae corrupti vero
								doloribus optio! Inventore ex quaerat modi blanditiis soluta
								maiores illum, ab velit.
							</p>
						</div>

						<div class='wrapper'>
							<p class='demo-2'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
								odio temporibus voluptas error distinctio hic quae corrupti vero
								doloribus optio! Inventore ex quaerat modi blanditiis soluta
								maiores illum, ab velit.
							</p>
						</div> */}

						<div class='serc_sec1'>
							<div class='container'>
								<div class='row'>
									<div class='col-md-12'>
										<div class='section-advantages-1'>
											<section class='b-advantages-1'>
												{" "}
												<img className='icn_sz' src='images/logo/ic1.png' />
												<h3 class='b-advantages-1__title'>
													Largest Dealership of Cars
												</h3>
												<div class='b-advantages-1__info'>
													At Carz Gallery, we take pride in being the one of the
													largest dealership of cars in Faridabad. With our
													extensive inventory, you'll find a wide range of new
													and pre-owned vehicles from all the top brands. When
													you choose Carz Gallery, you can trust that you're
													getting the highest quality vehicles.
												</div>
												<span class='ui-decor-2'></span>
											</section>

											<section class='b-advantages-1 active'>
												<img className='icn_sz' src='images/logo/ic2.png' />
												<h3 class='b-advantages-1__title'>
													We Offers Lower Cars Prices
												</h3>
												<div class='b-advantages-1__info'>
													At Carz Gallery, we understand that buying a car is a
													big decision. That's why we work tirelessly to offer
													you the lowest prices in the market, ensuring you get
													the best value for your money. Whether you're looking
													for a compact sedan, a spacious SUV, or a
													fuel-efficient hatchback, we have an extensive
													collection of cars to choose from.
												</div>
												<span class='ui-decor-2'></span>
											</section>

											<section class='b-advantages-1'>
												<img className='icn_sz' src='images/logo/ic3.png' />
												<h3 class='b-advantages-1__title'>
													Multipoint Safety Checks
												</h3>
												<div class='b-advantages-1__info'>
													When you choose Carz Gallery, you can trust that
													you're getting the highest quality vehicles. We
													thoroughly inspect and certify all our pre-owned cars
													to ensure they meet our strict standards for
													performance and reliability.
												</div>
												<span class='ui-decor-2'></span>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* filter form search bar */}
						<section className='b-search' id='search_sect'>
							<div className='container'>
								<div className='row'>
									<div
										className='b-search__main'
										style={{
											marginTop: "-70px",
											borderRadius: "30px",
											backgroundColor: "white",
										}}>
										<h4 onClick={reloadPage}>Search Your Dream Car</h4>
										<form
											id='form1'
											className='b-search__main-form'
											onSubmit={filterDataCars}>
											<div className='row'>
												<div className=' col-md-12 col-xs-12'>
													<div>
														<div
															className='col-xs-12 col-md-3 col-lg-3'
															id='searchdata'>
															<Select
																className='selectdataf'
																value={selectedItem}
																onChange={handleSelectChange}
																displayEmpty>
																<MenuItem value='' className='selectoption'>
																	Select Make
																</MenuItem>
																{data.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>

															<div class='col-xs-12 col-md-3 col-lg-3'></div>
														</div>
														<div
															className='col-xs-12 col-md-3 col-lg-3'
															id='searchdata'>
															<Select
																className='selectdataf'
																value={selectmodel}
																onChange={handleSelectChange3}
																displayEmpty
																inputProps={{
																	"aria-label": "Without label",
																}}>
																<MenuItem value='' className='selectoption'>
																	Select Model
																</MenuItem>
																{model.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
														</div>

														<div
															className='col-xs-12 col-md-3 col-lg-3 '
															id='searchdata'>
															<Select
																className='selectdataf'
																value={minRange}
																onChange={handleSelectChangeminprize}
																displayEmpty
																inputProps={{
																	"aria-label": "Without label",
																}}>
																<MenuItem value='' className='selectoption'>
																	Select Min Price
																</MenuItem>
																{Amountdatamin.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.id}>
																		{item.img}
																	</MenuItem>
																))}
															</Select>
														</div>

														<div
															className='col-xs-12 col-md-3 col-lg-3'
															id='searchdata'>
															<Select
																className='selectdataf'
																value={maxRange}
																onChange={handleSelectChangemaxnprize}
																displayEmpty
																inputProps={{
																	"aria-label": "Without label",
																}}>
																<MenuItem value='' className='selectoption'>
																	Select Max Price
																</MenuItem>
																{Amountdatamax.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.id}>
																		{item.img}
																	</MenuItem>
																))}
															</Select>
														</div>
													</div>
												</div>
												<div className='col-md-12 col-xs-12'>
													<div className='b-search__main-form-submit '>
														<button
															style={{
																backgroundColor: "#c1272d",
																textAlign: "center",
															}}
															type='submit'
															id='searcgbtn'
															className='  btn btn-lg'>
															<span
																style={{
																	backgroundColor: "#c1272d",
																}}>
																Search
															</span>
														</button>

														<button
															style={{
																marginLeft: "40px",
																backgroundColor: "#555555",
																textAlign: "start",
																color: "white",
															}}
															id='searcgbtn'
															onClick={reset}
															type='reset'
															className='btn    btn-lg'>
															<span>Reset</span>
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</section>

						{/* Render the list of products */}

						{showdata === false ? (
							<>
								{/* vechile Stock home data on sale section */}

								<section
									className='b-homeAuto  hidden-xs  '
									style={{ marginTop: "0" }}>
									<div className='container'>
										<div className='col-xs-12   visible-xs-horizental-scroll'>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title tx_clr'
													// '0.9s'
													style={{ fontFamily: "Segoe UI" }}>
													Discover the Perfect Car
												</h2>

												<div className='bag_clr1' id='cardrow'>
													<Row xs={12} md={4} id='cardrow'>
														{stockdata.length === 0 ? (
															<>
																<div
																	className='loader hidden-xs'
																	style={{ marginLeft: "600px" }}>
																	<PageScrollTop />
																	<ReactLoading
																		type='spin'
																		color='#c1272d'
																		height={200}
																		width={100}
																	/>
																</div>

																<div className='loader visible-xs'>
																	<ReactLoading
																		style={{ marginLeft: "-300px" }}
																		type='spin'
																		color='#c1272d'
																		height={200}
																		width={50}
																	/>
																</div>
															</>
														) : (
															<>
																{stockdata
																	?.filter(
																		(item) =>
																			item.programCode ===
																			"SHORT_LIST_WEBSITE_HOME_PAGE"
																	)

																	.map((item) => (
																		<div
																			className='cd_wd4'
																			key={item.uniqueSerial}
																			id='cardrow'>
																			<Col>
																				<div
																					onClick={() => {
																						singleProducthandle(
																							item.uniqueSerial
																						);
																						setHomepage(true);
																					}}
																					className='card2 b-auto__main-item hidden-xs '>
																					{item?.bookingFlag === "Y" ? (
																						<>
																							<div className='bokd_pic'>
																								<img
																									className=''
																									src='images/booked.png'
																								/>
																							</div>
																						</>
																					) : (
																						<p
																							className='newtext2'
																							style={{ color: "white" }}>
																							<i class='fa fa-check-circle ver_icn'></i>{" "}
																							<>OLX Verified</>
																						</p>
																					)}

																					{item?.modelImages.length === 0 ? (
																						<>
																							<img
																								className=' img-responsive center-block'
																								src='images/logo/defaulimag.png'
																								style={{
																									aspectRatio: "2/2",
																									width: "100%",
																								}}
																							/>
																						</>
																					) : (
																						<>
																							{item?.modelImages.some(
																								(image) =>
																									image.imageName === "Front"
																							) && (
																								<img
																									style={{
																										aspectRatio: "2/2",
																										width: "100%",
																									}}
																									className='img-responsive center-block'
																									src={
																										item?.modelImages.find(
																											(image) =>
																												image.imageName ===
																												"Front"
																										)?.uri
																									}
																									alt='Front View'
																								/>
																							)}
																						</>
																					)}

																					<div
																						className=' d-flex b-items__cars-one-info-title'
																						style={{
																							fontSize: "16px",
																							marginLeft: "20px",
																							marginTop: "10px",
																						}}>
																						{" "}
																						<div>
																							{item.vehManufactureYear}{" "}
																						</div>
																						<div style={{ marginLeft: "5px" }}>
																							{" "}
																							{item.vehBrandCode}
																						</div>{" "}
																						<div style={{ marginLeft: "5px" }}>
																							{item.vehModelCode}{" "}
																						</div>
																					</div>

																					<div class='rate_ts_mn'>
																						<ul className='wrapper'>
																							<li class='demo-1'>
																								{" "}
																								KMS {item.vehOdometer}{" "}
																							</li>

																							<li class='demo-1'>
																								{item.exteriorColor}
																							</li>
																							<li class='demo-1'>
																								{item.vehFuelCode}
																							</li>
																							<li className='demo-1'>
																								{item.transmissionDesc}
																							</li>
																						</ul>
																					</div>
																					<span
																						style={{
																							marginLeft: "20px",
																						}}
																						className='d-flex ml-6'>
																						<i className=''></i>{" "}
																						<div
																							className='b-items__cars-one-info-title'
																							style={{ fontSize: "21px" }}>
																							<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
																							{item.vehSellPriceRecommended}
																						</div>
																					</span>
																				</div>
																				{/* phone View */}

																				<div
																					style={{ borderRadius: "20px" }}
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
																					}
																					className='  visible-xs'>
																					<div className=''>
																						<div className=''>
																							<img
																								style={{
																									marginLeft: "10px",
																									height: "165px",
																									aspectRatio: " 2 / 2",
																									width: "70%",
																									borderRadius: "10px",
																								}}
																								className=' img-responsive center-block '
																								src={
																									item?.modelImages.length >
																										0 &&
																									item?.modelImages[0].uri
																								}
																								alt='nissan'
																							/>
																						</div>
																						<div className=''>
																							<div
																								className=' d-flex b-items__cars-one-info-title'
																								style={{
																									fontSize: "16px",
																									marginLeft: "20px",
																									marginTop: "5px",
																								}}>
																								{" "}
																								<div>
																									{item.vehManufactureYear}{" "}
																								</div>
																								<div
																									style={{
																										marginLeft: "5px",
																									}}>
																									{" "}
																									{item.vehBrandCode}
																								</div>{" "}
																								<div
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.vehModelCode}{" "}
																								</div>
																							</div>
																							<br />

																							<div
																								className='d-flex'
																								style={{
																									marginTop: "-20px",
																								}}>
																								<ul className='d-flex'>
																									<div className='b'>
																										kms || {item.vehOdometer}
																									</div>

																									<div
																										className=''
																										style={{
																											marginLeft: "15px",
																										}}>
																										{item.exteriorColor}
																									</div>
																									<div
																										className=''
																										style={{
																											marginLeft: "15px",
																										}}>
																										{item.vehFuelCode}
																									</div>

																									<div
																										className=''
																										style={{
																											marginLeft: "15px",
																										}}>
																										{item.transmissionDesc}
																									</div>
																								</ul>
																							</div>

																							<span
																								style={{
																									marginLeft: "20px",
																									marginTop: "-5px",
																								}}
																								className='d-flex ml-6'>
																								<i className=''></i>{" "}
																								<div
																									className='b-items__cars-one-info-title'
																									style={{
																										fontSize: "15px",
																									}}>
																									Rs{" "}
																									{item.vehSellPriceRecommended}
																								</div>
																							</span>
																						</div>
																					</div>
																				</div>
																			</Col>
																		</div>
																	))}
															</>
														)}
													</Row>

													{/* testing details */}
												</div>
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>
								{/* phone view */}

								<section
									className='b-homeAuto   visible-xs'
									style={{ marginTop: "-38px" }}>
									<div className='container'>
										<div className=''>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title'
													// '0.9s'
													style={{ fontFamily: "Segoe UI" }}>
													LATEST VEHICLES ON SALE
												</h2>

												<div className='row crd_full' id='cardrow'>
													{/* testing details */}
													{stockdata
														?.filter(
															(item) =>
																item.programCode ===
																"SHORT_LIST_WEBSITE_HOME_PAGE"
														)

														.map((item) => (
															<div className='vehicles_mn'>
																<div key={item.uniqueSerial}>
																	<div>
																		{/* phone View */}

																		<div
																			style={{ borderRadius: "20px" }}
																			onClick={() =>
																				singleProducthandle(item.uniqueSerial)
																			}
																			className='  visible-xs'>
																			<div className=''>
																				<div className='moble_res1'>
																					{item?.bookingFlag === "Y" ? (
																						<>
																							<div className='bokd_pic'>
																								<img
																									className=''
																									src='images/booked.png'
																								/>
																							</div>
																						</>
																					) : (
																						<p
																							className='newtext2'
																							style={{ color: "white" }}>
																							<i class='fa fa-check-circle ver_icn'></i>{" "}
																							<>OLX Verified</>
																						</p>
																					)}

																					{item?.modelImages.length === 0 ? (
																						<>
																							<img
																								className=' img-responsive center-block'
																								src='images/logo/defaulimag.png'
																								style={{
																									marginLeft: "1px",

																									aspectRatio: " 3/4",
																									width: "100%",
																									maxHeight: "230px",
																									objectFit: "cover",
																									borderRadius: "10px",
																								}}
																							/>
																						</>
																					) : (
																						<>
																							{item?.modelImages.some(
																								(image) =>
																									image.imageName === "Front"
																							) && (
																								<img
																									style={{
																										marginLeft: "1px",

																										aspectRatio: " 3/4",
																										width: "100%",
																										maxHeight: "230px",
																										objectFit: "cover",
																										borderRadius: "10px",
																									}}
																									className='img-responsive center-block'
																									src={
																										item?.modelImages.find(
																											(image) =>
																												image.imageName ===
																												"Front"
																										)?.uri
																									}
																									alt='Front View'
																								/>
																							)}
																						</>
																					)}
																				</div>
																				<div className=''>
																					<div
																						className=' d-flex b-items__cars-one-info-title'
																						style={{
																							fontSize: "16px",
																							marginLeft: "5px",
																							marginTop: "5px",
																						}}>
																						{" "}
																						<div>
																							{item.vehManufactureYear}{" "}
																						</div>
																						<div style={{ marginLeft: "5px" }}>
																							{" "}
																							{item.vehBrandCode}
																						</div>{" "}
																						<div style={{ marginLeft: "5px" }}>
																							{item.vehModelCode}{" "}
																						</div>
																					</div>
																					<br />

																					<div
																						className='d-flex'
																						style={{
																							marginTop: "-20px",
																							marginLeft: "-16px",
																						}}>
																						<ul className='d-flex clr_ull1'>
																							<div className='b'>
																								{item.vehOdometer}
																							</div>

																							<div
																								className=''
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.exteriorColor}
																							</div>
																							<div
																								className=''
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.vehFuelCode}
																							</div>

																							<div
																								className=''
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.transmissionDesc}
																							</div>
																						</ul>
																					</div>

																					<span
																						style={{
																							marginLeft: "10px",
																							marginTop: "-5px",
																						}}
																						className='d-flex ml-6'>
																						<i className=''></i>{" "}
																						<div
																							className='b-items__cars-one-info-title'
																							style={{ fontSize: "15px" }}>
																							<i class='fa fa-rupee'></i>{" "}
																							{item.vehSellPriceRecommended}
																						</div>
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														))}
												</div>
												<br />
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>
							</>
						) : (
							<>
								{/* Search Stock data on sale section */}

								<section
									className='b-homeAuto hidden-xs'
									style={{ marginTop: "-38px" }}>
									<div className='container'>
										<div className='col-xs-12   visible-xs-horizental-scroll'>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg  '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title  '
													style={{ fontFamily: "Segoe UI" }}>
													LATEST VEHICLES ON SALE Search
												</h2>

												<div className=' bag_clr1' id='cardrow'>
													<Row xs={12} md={4} id='cardrow'>
														{demo.length === 0 ? (
															<div className='notdatafound23'>
																<h2>Vehicle not Available</h2>
															</div>
														) : (
															<>
																{demo?.map((item) => (
																	<div
																		class='cd_wd4'
																		key={item.uniqueSerial}
																		id='cardrow'>
																		<Col>
																			<div
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className=' card2 b-auto__main-item '>
																				{item?.bookingFlag === "Y" ? (
																					<div className='bokd_pic'>
																						<img
																							className=''
																							src='images/booked.png'
																						/>
																					</div>
																				) : (
																					<>
																						<p
																							className='newtext dis_nn'
																							style={{ color: "white" }}>
																							<i class='fa fa-check-circle ver_icn'></i>{" "}
																							OLX Verified
																						</p>
																					</>
																				)}
																				{item?.modelImages.length === 0 ? (
																					<>
																						<img
																							style={{ width: "100%" }}
																							className='  img-responsive center-block'
																							src='images/logo/defaulimag.png'
																							alt='nissan'
																						/>
																					</>
																				) : (
																					<>
																						{item?.modelImages.some(
																							(image) =>
																								image.imageName === "Front"
																						) && (
																							<img
																								style={{
																									width: "100%",
																								}}
																								className='img-responsive center-block'
																								src={
																									item?.modelImages.find(
																										(image) =>
																											image.imageName ===
																											"Front"
																									)?.uri
																								}
																								alt='Front View'
																							/>
																						)}
																					</>
																				)}

																				<div
																					className=' d-flex b-items__cars-one-info-title'
																					style={{
																						fontSize: "16px",
																						marginLeft: "20px",
																					}}>
																					{" "}
																					<div>{item.vehManufactureYear} </div>
																					<div style={{ marginLeft: "5px" }}>
																						{" "}
																						{item.vehBrandCode}
																					</div>{" "}
																					<div style={{ marginLeft: "5px" }}>
																						{item.vehModelCode}{" "}
																					</div>
																				</div>

																				<div class='rate_ts_mn'>
																				<ul className='wrapper'>
																							<li class='demo-1'>
																								{" "}
																								KMS {item.vehOdometer}{" "}
																							</li>

																							<li class='demo-1'>
																								{item.exteriorColor}
																							</li>
																							<li class='demo-1'>
																								{item.vehFuelCode}
																							</li>
																							<li className='demo-1'>
																								{item.transmissionDesc}
																							</li>
																						</ul>
																				</div>

																				<span
																					style={{
																						marginLeft: "20px",
																					}}
																					className='d-flex ml-6'>
																					<i className=''></i>{" "}
																					<div
																						className='b-items__cars-one-info-title'
																						style={{ fontSize: "18px" }}>
																						<i class='fa fa-rupee'></i>{" "}
																						{item.vehSellPriceRecommended}
																					</div>
																				</span>
																			</div>
																		</Col>
																	</div>
																))}
															</>
														)}
													</Row>

													{/* testing details */}
												</div>
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>

								{/* phone View */}

								<section
									className='b-homeAuto   visible-xs'
									style={{ marginTop: "-38px" }}>
									<div className='container'>
										<div className=''>
											<div className='b-homeAuto__latest'>
												<h5
													className='s-titleBg '
													style={{ fontFamily: "Segoe UI" }}>
													GIVING OUR CUSTOMERS BEST DEALS
												</h5>
												<br />

												<h2
													className='s-title'
													// '0.9s'
													style={{ fontFamily: "Segoe UI" }}>
													LATEST VEHICLES ON SALE
												</h2>

												<div className='row crd_full' id='cardrow'>
													{demo.length === 0 ? (
														<div className='notdatafound23'>
															<h2>Vehicle not Available</h2>
														</div>
													) : (
														<>
															{demo?.map((item) => (
																<div
																	className=' bag_clr2'
																	style={{
																		width: "70%",
																		borderRadius: "15px",
																		marginLeft: "15px",
																		height: "70%",
																		padding: "2px",
																		border: "1px solid black",
																	}}>
																	{item?.bookingFlag === "Y" ? (
																		<>
																			<div className='bokd_pic'>
																				<img
																					className=''
																					src='images/booked.png'
																				/>
																			</div>
																		</>
																	) : (
																		<p
																			className='newtext2'
																			style={{ color: "white" }}>
																			<i class='fa fa-check-circle ver_icn'></i>{" "}
																			<>OLX Verified</>
																		</p>
																	)}

																	<div key={item.uniqueSerial}>
																		<div>
																			{/* phone View */}

																			<div
																				style={{ borderRadius: "20px" }}
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className='  visible-xs'>
																				<div className=''>
																					<div className=''>
																						{item?.modelImages.length === 0 ? (
																							<>
																								<img
																									style={{
																										marginLeft: "1px",

																										aspectRatio: " 3/4",
																										width: "100%",
																										maxHeight: "230px",
																										objectFit: "cover",
																										borderRadius: "10px",
																									}}
																									className=' img-responsive center-block '
																									src='images/logo/defaulimag.png'
																									alt='nissan'
																								/>
																							</>
																						) : (
																							<>
																								{item?.modelImages.some(
																									(image) =>
																										image.imageName === "Front"
																								) && (
																									<img
																										style={{
																											marginLeft: "1px",

																											aspectRatio: " 3/4",
																											width: "100%",
																											maxHeight: "230px",
																											objectFit: "cover",
																											borderRadius: "10px",
																										}}
																										className='img-responsive center-block'
																										src={
																											item?.modelImages.find(
																												(image) =>
																													image.imageName ===
																													"Front"
																											)?.uri
																										}
																										alt='Front View'
																									/>
																								)}
																							</>
																						)}
																					</div>
																					<div className=''>
																						<div
																							className=' d-flex b-items__cars-one-info-title'
																							style={{
																								fontSize: "16px",
																								marginLeft: "5px",
																								marginTop: "5px",
																							}}>
																							{" "}
																							<div>
																								{item.vehManufactureYear}{" "}
																							</div>
																							<div
																								style={{ marginLeft: "5px" }}>
																								{" "}
																								{item.vehBrandCode}
																							</div>{" "}
																							<div
																								style={{ marginLeft: "5px" }}>
																								{item.vehModelCode}{" "}
																							</div>
																						</div>
																						<br />

																						<div
																							className='d-flex'
																							style={{
																								marginTop: "-20px",
																								marginLeft: "-16px",
																							}}>
																							<ul className='d-flex clr_ull1'>
																								<div className='b'>
																									{item.vehOdometer}
																								</div>

																								<div
																									className=''
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.exteriorColor}
																								</div>
																								<div
																									className=''
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.vehFuelCode}
																								</div>

																								<div
																									className=''
																									style={{
																										marginLeft: "5px",
																									}}>
																									{item.transmissionDesc}
																								</div>
																							</ul>
																						</div>

																						<span
																							style={{
																								marginLeft: "10px",
																								marginTop: "-5px",
																							}}
																							className='d-flex ml-6'>
																							<i className=''></i>{" "}
																							<div
																								className='b-items__cars-one-info-title'
																								style={{ fontSize: "15px" }}>
																								<i class='fa fa-rupee'></i>{" "}
																								{item.vehSellPriceRecommended}
																							</div>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															))}
														</>
													)}
												</div>
												<br />
											</div>
										</div>
									</div>
									<div className='clearfix'></div>
								</section>
							</>
						)}

						{/* Exclusive offers slider */}
						<section className='b-featured hidden-xs'>
							<div className='container-fluid'>
								<h5 className='s-titleBg ' style={{ fontFamily: "Segoe UI" }}>
									Drive away with a great deal today
								</h5>
								<br />

								<h2
									className='s-title tx_clr cr_clr1'
									// '0.9s'
									style={{ fontFamily: "Segoe UI" }}>
									Popular Listings
								</h2>

								<div className='carousel-wrapper'>
									<Carousel breakPoints={breakPoints}>
										{stockdata
											?.filter(
												(item) =>
													item.programCode ===
													"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
											)
											.map((item) => (
												<div key={item.uniqueSerial}>
													<div>
														<div
															onClick={() =>
																singleProducthandle(item.uniqueSerial)
															}
															className=' card3 b-auto__main-item1 '>
															{item?.bookingFlag === "Y" ? (
																<>
																	<div className='bokd_pic'>
																		<img className='' src='images/booked.png' />
																	</div>
																</>
															) : (
																<p
																	className='newtext2'
																	style={{ color: "white" }}>
																	<i class='fa fa-check-circle ver_icn'></i>{" "}
																	<>OLX Verified</>
																</p>
															)}
															{item?.modelImages.length === 0 ? (
																<>
																	{" "}
																	<img
																		src='images/logo/defaulimag.png'
																		style={{
																			aspectRatio: "/2",
																			width: "100%",
																		}}
																	/>
																</>
															) : (
																<>
																	{item?.modelImages.some(
																		(image) => image.imageName === "Front"
																	) && (
																		<img
																			style={{
																				aspectRatio: "/2",
																				width: "100%",
																			}}
																			// className='hidden-xs '
																			src={
																				item?.modelImages.find(
																					(image) => image.imageName === "Front"
																				)?.uri
																			}
																			alt='nissan'
																		/>
																	)}
																</>
															)}
															<div
																className=' d-flex b-items__cars-one-info-title  hidden-xs '
																style={{
																	fontSize: "16px",
																	marginLeft: "20px",
																	color: "white",
																}}>
																{" "}
																<div>{item.vehManufactureYear} </div>
																<div style={{ marginLeft: "5px" }}>
																	{" "}
																	{item.vehBrandCode}
																</div>{" "}
																<div style={{ marginLeft: "5px" }}>
																	{item.vehModelCode}{" "}
																</div>
															</div>
															<div
																id='textitem'
																className='d-flex  hidden-xs'
																style={{
																	marginTop: "-4px",
																	color: "white",
																}}>
																<ul className='d-flex' style={{ fontSize: "" }}>
																	<div className='b'>
																		kms {item.vehOdometer}
																	</div>

																	<div
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.exteriorColor}
																	</div>
																	<div
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.vehFuelCode}
																	</div>

																	<div
																		className=''
																		style={{ marginLeft: "15px" }}>
																		{item.transmissionDesc}
																	</div>
																</ul>
															</div>
															<span
																style={{
																	marginLeft: "20px",
																	color: "white",
																}}
																className='d-flex ml-6  hidden-xs'>
																<i className=''></i>{" "}
																<div
																	className='b-items__cars-one-info-title'
																	style={{
																		fontSize: "21px",
																		color: "white",
																	}}>
																	<i class='fa fa-rupee'></i>{" "}
																	{item.vehSellPriceRecommended}
																</div>
															</span>
															<div
																className='visible-xs'
																style={{ marginLeft: "5px", color: "white" }}>
																{" "}
																{item.vehBrandCode}
															</div>{" "}
														</div>
													</div>
												</div>
											))}
									</Carousel>
								</div>

								{/* slide checking */}
							</div>
						</section>

						{/* phone View Show */}
						<section className='b-featured visible-xs'>
							<div className='container-fluid'>
								<h2 className='s-title '>Popular Listings </h2>

								<div
									id='carouselExampleIndicators'
									class='carousel slide'
									data-ride='carousel'>
									<ol class=''></ol>
									<div class='carousel-inner'>
										<div class='carousel-item active'>
											<div className='row' id='cardrow'>
												{/* testing details */}
												{stockdata
													?.filter(
														(item) =>
															item.programCode ===
															"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
													)

													.map((item) => (
														<div
															className=''
															style={{
																width: "70%",
																borderRadius: "15px",
																marginLeft: "15px",
																height: "70%",
																padding: "2px",
																border: "1px solid black ",
															}}>
															<div key={item.uniqueSerial}>
																<div>
																	{/* phone View */}

																	<div
																		style={{ borderRadius: "20px" }}
																		onClick={() =>
																			singleProducthandle(item.uniqueSerial)
																		}
																		className='  visible-xs clr_mol1'>
																		<div className=''>
																			<div className=''>
																				{item?.bookingFlag === "Y" ? (
																					<>
																						<div className='bokd_pic'>
																							<img
																								className=''
																								src='images/booked.png'
																							/>
																						</div>
																					</>
																				) : (
																					<p
																						className='newtext2'
																						style={{ color: "white" }}>
																						<i class='fa fa-check-circle ver_icn'></i>{" "}
																						<>OLX Verified</>
																					</p>
																				)}

																				{item?.modelImages.length === 0 ? (
																					<>
																						<img
																							style={{
																								marginLeft: "1px",

																								aspectRatio: " 3/4",
																								width: "100%",
																								maxHeight: "230px",
																								objectFit: "cover",
																								borderRadius: "10px",
																							}}
																							className=' img-responsive center-block '
																							src='images/logo/defaulimag.png'
																							alt='nissan'
																						/>
																					</>
																				) : (
																					<>
																						{item?.modelImages.some(
																							(image) =>
																								image.imageName === "Front"
																						) && (
																							<img
																								style={{
																									marginLeft: "1px",

																									aspectRatio: " 3/4",
																									width: "100%",
																									maxHeight: "230px",
																									objectFit: "cover",
																									borderRadius: "10px",
																								}}
																								className=' img-responsive center-block '
																								src={
																									item?.modelImages.find(
																										(image) =>
																											image.imageName ===
																											"Front"
																									)?.uri
																								}
																								alt='nissan'
																							/>
																						)}
																					</>
																				)}
																			</div>
																			<div className=''>
																				<div
																					className=' d-flex b-items__cars-one-info-title'
																					style={{
																						fontSize: "16px",
																						marginLeft: "5px",
																						marginTop: "5px",
																						color: "white",
																					}}>
																					{" "}
																					<div>{item.vehManufactureYear} </div>
																					<div style={{ marginLeft: "5px" }}>
																						{" "}
																						{item.vehBrandCode}
																					</div>{" "}
																					<div style={{ marginLeft: "5px" }}>
																						{item.vehModelCode}{" "}
																					</div>
																				</div>
																				<br />

																				<div
																					className='d-flex clr_ull122'
																					style={{
																						marginTop: "-20px",
																						marginLeft: "-16px",
																						color: "white",
																					}}>
																					<ul className='d-flex'>
																						<div className='b'>
																							{item.vehOdometer}
																						</div>

																						<div
																							className=''
																							style={{
																								marginLeft: "5px",
																							}}>
																							{item.exteriorColor}
																						</div>
																						<div
																							className=''
																							style={{
																								marginLeft: "5px",
																							}}>
																							{item.vehFuelCode}
																						</div>

																						<div
																							className=''
																							style={{
																								marginLeft: "5px",
																							}}>
																							{item.transmissionDesc}
																						</div>
																					</ul>
																				</div>

																				<span
																					style={{
																						marginLeft: "10px",
																						marginTop: "-5px",
																					}}
																					className='d-flex ml-6'>
																					<i className=''></i>{" "}
																					<div
																						className='b-items__cars-one-info-title'
																						style={{
																							fontSize: "15px",
																							color: "white",
																						}}>
																						<i class='fa fa-rupee'></i>{" "}
																						{item.vehSellPriceRecommended}
																					</div>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* switch to go mobile */}

						<div class='info-group block-table block-table_md'>
							<div class='info-group__section col-md-6 col-xs-12'>
								<section class='b-info b-info_mod-a area-bg area-bg_op_80 area-bg_prim parallax'>
									<h2 class='b-info__title'>
										<strong class='b-info__title_lg'>
											ARE YOU LOOKING FOR A CAR?
										</strong>
									</h2>
									<div class='b-info__desc'>
										Search Our Inventory With Thousands Of Cars And More Cars
										Are Adding On Daily Basis
									</div>
									<Link to='/detailsdata' className='btn btn-white'>
										{" "}
										Click for More{" "}
									</Link>
								</section>
							</div>
							<div class='info-group__section col-md-6 col-xs-12'>
								<section class='b-info b-info_mod-b area-bg area-bg_op_80 area-bg_dark-2 parallax'>
									<div class='area-bg__inner'>
										<h2 class='b-info__title'>
											<strong class='b-info__title_lg'>
												DO YOU WANT TO SELL A CAR?
											</strong>
										</h2>
										<div class='b-info__desc'>
											{" "}
											Simply fill out a form with all the necessary information
											and we'll take care of the rest.
										</div>
										<Link to='/salecar' className='btn btn-white'>
											{" "}
											Click for More{" "}
										</Link>
									</div>
								</section>
							</div>
						</div>

						<section className='gallery_mn gallery_mn2'>
							<div className='container'>
								<div className='row'>
									<div className='gallery_pic'>
										<h4>Gallery</h4>
										<div className='gallery_wd row'>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g1.jpg' />
											</div>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g2.jpg' />
											</div>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g3.jpg' />
											</div>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g4.jpg' />
											</div>

											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g5.jpg' />
											</div>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g18.jpg' />
											</div>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g9.jpg' />
											</div>
											<div class='col-md-3 col-sm-6 col-xs-12'>
												<img className='' src='images/gallery/g8.jpg' />
											</div>
										</div>
									</div>

									<div className='view_btn'>
										<Link to='/gellery'>View More</Link>
									</div>
								</div>
							</div>
						</section>

						<section className='count_mn1'>
							<div className='container'>
								<div className='row'>
									<div
										className='col-md-11 col-xs-12 percent-blocks'
										data-waypoint-scroll='true'>
										<div className='row'>
											<div className='col-sm-4 col-xs-12'>
												<div className='b-count__item'>
													<div className='b-count__item-circle'>
														<Link to='/detailsdata'>
															<span className='fa fa-car'></span>
														</Link>
													</div>
													<div className='chart' data-percent='5000'>
														<h2 className='percent'>150</h2>
													</div>
													<h5>vehicles in stock</h5>
												</div>
											</div>
											<div className='col-sm-4 col-xs-6'>
												<div className='b-count__item'>
													<div className='b-count__item-circle'>
														<span className='fa fa-users'></span>
													</div>
													<div className='chart' data-percent='3100'>
														<h2 className='percent'>2000+</h2>
													</div>
													<h5>HAPPY CUSTOMER REVIEWS</h5>
												</div>
											</div>
											<div className='col-sm-4 col-xs-6'>
												<div className='b-count__item'>
													<div className='b-count__item-circle'>
														<span className='fa fa-building-o'></span>
													</div>
													<div className='chart' data-percent='500'>
														<h2 className='percent'>1</h2>
													</div>
													<h5>DEALER BRANCHES</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className='b-brands s-shadow'>
							<div className='container'>
								<h2 className='s-title wow zoomInUp brd_padg'>
									BRANDS WE OFFER
								</h2>

								<div className='brnd_bdr'>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/mg.jpg' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/kia.png' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/volvo.png' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/merc.jpg' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/audi.jpg' alt='brand' />
									</div>
									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/hunda.jpg' alt='brand' />
									</div>

									<div className='b-brands__brand wow rotateIn'>
										<img src='images/logo/bmw.jpg' alt='brand' />
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</>

			<Footer />
		</div>
	);
}
