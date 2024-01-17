import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import Details from "./Details";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slider";
import "./prizerange.css";
import PageScrollTop from "./PageScrollTop";
import ReactLoading from "react-loading";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import toast from "react-hot-toast";

import { Typography, makeStyles, TablePagination } from "@material-ui/core";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";

const MIN = 50000;
const MAX = 6000000;

const StockCars = ({ detailspage, setDetailspage, refreshData }) => {
	const [openfueltype, setOpenfueltype] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);

	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [selectedItem, setSelectedItem] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState([]);
	const [selectedModel, setSelectedModel] = useState("");
	const [showdata, setShowdata] = useState(false);

	const [inputvalue, setInputvalue] = useState("");
	const [typedata, setDatatype] = useState([]);
	// const [detailspage, setdetailspage] = useState(false);
	const [methu, setMethu] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [prizevalue, setprizevalue] = useState([MIN, MAX]);

	const [currentpage, setCurrentPage] = useState(1);
	var [homepage, setHomepage] = useState(false);
	const itemsperpage = 15;
	const totalItems = demo.length;
	const totalPage = Math.ceil(totalItems / itemsperpage);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const Startindex = (currentpage - 1) * itemsperpage;
	const EndIndex = Startindex + itemsperpage;
	var currentData = stockdata.slice(Startindex, EndIndex);

	// All Stock Show
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
					setDemo(responseData?.UsedCarVehStockDetail);
					setMethu(responseData?.UsedCarVehStockDetail);

					setSearchResults(responseData?.UsedCarVehStockDetail);
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

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
			loginUserId: "RAVI",
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

			loginUserId: "RAVI",
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

	// fuel list
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
			calledBy: "FUEL",
			loginUserId: "RAVI",
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
				setFuelData(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};

	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
	};

	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemake(event.target.value);
	};

	const navigate = useNavigate();

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
			budgetFrom: prizevalue[0],
			budgetTo: prizevalue[1],
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehVariantDesc: selectverient,
			vehFuel: selectfuel,
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
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setStockdata(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);
				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Data not found", error);
		}
	};

	const handleSaveData = (e) => {
		e.preventDefault();
		fetchData();
		searchResults.map((item) => console.log("uniqueserial"));
	};

	const reloadPage = () => {
		window.location.reload(false);
	};

	const reset = (currentData) => {
		setShowdata(true);
		setSelectedItem("");
		setSelectmodel("");

		setStockdata(methu);
	};

	const handleHomeClick = () => {
		setDetailspage(false);
	};

	const singleProducthandle = (uniqueSerial, vehOdometer) => {
		const product = stockdata.find(
			(item) => item.uniqueSerial === uniqueSerial,
			(item) => item.vehOdometer === vehOdometer
		);

		localStorage.setItem("cardetails", JSON.stringify(product));

		setSelectedProduct(product);
		navigate(
			`/detailsparticular/${product.uniqueSerial}/${product.vehOdometer}`
		);

		setDetailspage((prevDetailspage) => !prevDetailspage);
	};

	return (
		<>
			<Navbar onHomeClick={handleHomeClick} />
			<SocalMedia />
			<PageScrollTop />

			<div>
				{/* body stucture */}
				<div
					className='m-listTableTwo'
					data-scrolling-animations='true'
					data-equal-height='.b-items__cell'>
					<div id='page-preloader'>
						<span className='spinner'></span>
					</div>

					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className=''>Vehicle Stock</h1>

							{/* Add total counter stock number  */}
						</div>
					</section>

					<div className='b-breadCumbs s-shadow'>
						<div className='container '>
							<div className='b-pageHeader__search  '>
								{showdata === false ? (
									<>
										<span className='list_num1'>
											Total Number of Cars {totalItems}{" "}
										</span>
									</>
								) : (
									<>
										<span>Total Number of Search Cars {demo.length} </span>
									</>
								)}
							</div>

							<Link to='/' className='b-breadCumbs__page'>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<a className='b-breadCumbs__page m-active'>Buy Car</a>

							<div
								className='b-pageHeader__search visible-xs  '
								style={{
									marginTop: "-20px",
									color: "white",
									padding: "3px",
									marginLeft: "187px",
								}}>
								{showdata === false ? (
									<>
										<span>Total Number of Cars {totalItems} </span>
									</>
								) : (
									<>
										<span>Total Number of Search Cars {demo.length} </span>
									</>
								)}
							</div>
						</div>
					</div>

					{/* filter section */}

					{/* body details cars */}

					<div className='drup_mn1 visible-xs '>
						<div className='prise_mn'>
							<ul id='cardrow'>
								<li>
									<select
										id='selectdata2'
										class=''
										value={selectedItem}
										onChange={handleSelectChange}>
										<option value=''>Brand</option>
										{data.map((item, index) => (
											<option key={index} value={item.code}>
												{item.description}
											</option>
										))}
									</select>
								</li>
								<li>
									<select
										id='selectdata2'
										class=''
										value={selectmodel}
										onChange={handleSelectChange3}>
										<option value=''> Model </option>
										{model.map((item, index) => (
											<option key={index} value={item.code}>
												{item.description}
											</option>
										))}
									</select>
								</li>

								<li>
									<select
										id='selectdata2'
										class=''
										value={selectfuel}
										onChange={handleSelectChange4}>
										<option value=''> Fuel-type</option>
										{fueldata.map((item, index) => (
											<option key={index} value={item.code}>
												{item.description}
											</option>
										))}
									</select>
								</li>
							</ul>
							<div className='prizetext'>
								<div className='textprize' style={{ color: "white" }}>
									<span>{prizevalue[0]}</span>
									<span className='rsarr'>
										<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
									</span>{" "}
									-<span> {prizevalue[1]}</span>
									<span className='rsarr'>
										<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
									</span>
								</div>
							</div>

							<div onClick={handleSaveData}>
								<Slider
									className={"prizeslider"}
									onChange={setprizevalue}
									value={prizevalue}
									min={MIN}
									max={MAX}
								/>
							</div>

							<div
								className='filterbutton visible-xs'
								style={{ margin: "10px 20px 10px 60px" }}>
								<button
									id='filter_buton'
									className=' btn-sm'
									onClick={handleSaveData}>
									Search
								</button>
								<button
									id='filter_buton'
									className=' btn-sm'
									onClick={reloadPage}
									type='reset'>
									Reset
								</button>
							</div>
						</div>
					</div>

					<section class='serach_sec2'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='serach_sec2_wd'>
										<h2>Search Your Car</h2>
										<div className='col-md-4 col-sm-4 col-xs-12'>
											<div class=''>
												<select
													onClick={handleSaveData}
													id='selectdata'
													class='pdg_dru'
													value={selectedItem}
													onChange={handleSelectChange}>
													<option value=''>Brand</option>
													{data.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret'></span>
											</div>
										</div>

										<div className='col-md-4 col-sm-4 col-xs-12'>
											<div class=''>
												<select
													id='selectdata'
													class='pdg_dru'
													onClick={handleSaveData}
													value={selectmodel}
													onChange={handleSelectChange3}>
													<option value=''> Model </option>
													{model.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret-d'></span>
											</div>
										</div>

										<div className='col-md-4 col-sm-4 col-xs-12'>
											<div class='s-relative'>
												<select
													id='selectdata'
													class='pdg_dru'
													onClick={handleSaveData}
													value={selectfuel}
													onChange={handleSelectChange4}>
													<option value=''> Fuel Type</option>
													{fueldata.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret-'></span>
											</div>
										</div>

										<div className='reng'>
											<div className='col-md-12 col-sm-12 col-xs-12'>
												<div className='prise_mn'>
													<div className='prizetext'>
														<div
															className='textprize'
															style={{ color: "white" }}>
															<span>{prizevalue[0]}</span>
															<span className='rsarr'>
																<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
															</span>{" "}
															-<span> {prizevalue[1]}</span>
															<span className='rsarr'>
																<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
															</span>
														</div>
													</div>

													<div onClick={handleSaveData}>
														<Slider
															className={"prizeslider"}
															onChange={setprizevalue}
															value={prizevalue}
															min={MIN}
															max={MAX}
														/>
													</div>
												</div>

												<div
													id='fliterbutton'
													className=''
													style={{ alignItems: "center" }}>
													<button
														id='filter_buton'
														className=' btn-sm hid_on'
														onClick={handleSaveData}>
														Search
													</button>

													<button
														type='reset'
														style={{
															color: "black",

															backgroundColor: "#f76d2b",
														}}
														onClick={reloadPage}
														className='btn-sm btnn1 '>
														Clear Filter
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className='row' id='wid_siz'>
						{showdata === false ? (
							<>
								{/* normal Stock */}
								<div className='col-xs-12 col-md-12  col-lg-12 col-xl-12 '>
									<div className='b-items itm_bg1'>
										<div className='container'>
											<div className='b-auto__main'></div>
											<Row xs={12} md={4} id=''>
												{currentData.length === 0 && !refreshing ? (
													<>
														<div
															className='loader hidden-xs'
															style={{
																marginLeft: "300px",
																marginTop: "200px",
															}}>
															<ReactLoading
																type='spin'
																color='#c1272d'
																height={200}
																width={100}
															/>
														</div>
														<div
															className='loader visible-xs'
															style={{
																marginTop: "41px",
																marginLeft: "115px",
															}}>
															<ReactLoading
																type='spin'
																color='#c1272d'
																height={200}
																width={100}
															/>
														</div>
													</>
												) : (
													<>
														{currentData?.map((item) => {
															const frontImage = item?.modelImages.find(
																(image) => image?.imageName === "Front"
															);
															if (frontImage) {
																return (
																	<div
																		className='cd_full2'
																		key={frontImage.uri}>
																		{item?.bookingFlag === "Y" ? (
																			<div className='bokd_pic2'>
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
																		<Col>
																			<div
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className=' card2 cr_pic b-auto__main-item '>
																				{frontImage.uri === false ? (
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
																					<img
																						id='stockimagep1'
																						style={{
																							aspectRatio: "2/2",
																							width: "100%",
																						}}
																						className=' img-responsive center-block'
																						src={frontImage.uri}
																						alt='nissan'
																					/>
																				)}

																				<div class='stk_tx'>
																					<ul
																						className=' d-flex b-items__cars-one-info-title'
																						style={{
																							fontSize: "16px",
																							marginLeft: "20px",
																							marginTop: "10px",
																						}}>
																						{" "}
																						<li>{item.vehManufactureYear} </li>
																						<li
																							style={{
																								marginLeft: "5px",
																							}}>
																							{" "}
																							{item.vehBrandCode}
																						</li>{" "}
																						<li
																							style={{
																								marginLeft: "5px",
																							}}>
																							{item.vehModelCode}{" "}
																						</li>
																					</ul>
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
																						marginLeft: "19px",
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
																);
															}
														})}
													</>
												)}
											</Row>
											<div className='row' style={{}} id='cardrow'>
												<Pagination
													onPageChange={onPageChange}
													currentpage={currentpage}
													totalPage={totalPage}
												/>
											</div>
										</div>
									</div>
								</div>
							</>
						) : (
							/* Search Data   */
							<>
								<>
									{/* web view */}
									<div className=' col-xs-12 col-md-12  col-lg-12 col-xl-12 '>
										<div className='b-items itm_bg1'>
											<div className='container'>
												<div className='b-auto__main'></div>
												<Row xs={12} md={4} id=''>
													{currentData.length === 0 ? (
														<div className='notdatafound'>
															<h2>Vehicle not Available</h2>
														</div>
													) : (
														<>
															{currentData?.map((item) => (
																<div class='cd_full2' key={item.uniqueSerial}>
																	<>
																		<Col>
																			<div
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className='card2 cr_pic b-auto__main-item '>
																				<div className=''>
																					{item?.bookingFlag === "Y" ? (
																						<div className='bokd_pic2'>
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
																					<div className=''>
																						{item?.modelImages.length === 0 ? (
																							<>
																								<img
																									style={{
																										aspectRatio: "2/2",
																										width: "100%",
																									}}
																									src='images/logo/defaulimag.png'
																									className='img-responsive center-block'
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
																					</div>

																					<div className='stk_tx'>
																						<div
																							className=' d-flex b-items__cars-one-info-title'
																							style={{
																								fontSize: "16px",
																								marginLeft: "20px",
																							}}>
																							{" "}
																							<li>
																								{item.vehManufactureYear}{" "}
																							</li>
																							<li
																								style={{
																									marginLeft: "5px",
																								}}>
																								{" "}
																								{item.vehBrandCode}
																							</li>{" "}
																							<li
																								style={{
																									marginLeft: "5px",
																								}}>
																								{item.vehModelCode}{" "}
																							</li>
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
																							marginLeft: "19px",
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
																			</div>
																		</Col>
																	</>
																</div>
															))}
														</>
													)}
												</Row>

												<Pagination
													onPageChange={onPageChange}
													currentpage={currentpage}
													totalPage={totalPage}
												/>
											</div>
										</div>
									</div>
									{/* phone View */}
								</>
							</>
						)}
					</div>
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
				{/* <!--b-features--> */}
			</div>

			<>
				{/* <Link to='/details/:uniqueSerial'>
						<Details selectedProduct={selectedProduct} />
					</Link> */}
			</>

			<Footer />
		</>
	);
};

export default StockCars;
