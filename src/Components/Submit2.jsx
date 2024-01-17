import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import styled from "./Item";
import ScrollTop from "./ScrollTop";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PageScrollTop from "./PageScrollTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocalMedia from "./SocalMedia";

const Submit2 = ({ detailspage, setDetailspage }) => {
	const [statelist, setStateList] = useState([]);
	const [city, setCity] = useState([]);
	const [selectedstate, setSelectedstate] = useState("");
	const [selectcity, setSelectcity] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [serachresult, setSearchResult] = useState([]);
	const [code, setCode] = useState("");
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	const [userAnswer, setUserAnswer] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [mobileError, setMobileError] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [captchaError, setCaptchaError] = useState("");
	const [captchaValid, setCaptchaValid] = useState(false);
	const [odometr, setodometr] = useState("");
	const [registration, setregistration] = useState("");

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
			calledBy: "STATE",

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
				const generalList = jsonData.generalMasterList[0].generalList;
				setStateList(generalList);
			})
			.catch((error) => {});
	}, []);

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
			calledBy: "CITY",
			stateCode: code,

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
				const generalList = jsonData.generalMasterList[0].generalList;
				setCity(generalList);
			})
			.catch((error) => {});
	}, [code]);

	const handleSelectChange11 = (event) => {
		setSelectedstate(event.target.value);
		setCode(event.target.value);
	};
	const handleSelectChange12 = (event) => {
		setSelectcity(event.target.value);
	};

	const resetCaptcha = () => {
		setNum1(Math.floor(Math.random() * 10));
		setNum2(Math.floor(Math.random() * 10));
		setUserAnswer("");
		setCaptchaValid(false); // Clear captcha validation
	};

	const handleSubmit = () => {
		let formIsValid = true;

		if (mobile.length !== 10) {
			setMobileError("Mobile number must be exactly 10 digits");
			formIsValid = false;
		} else {
			setMobileError("");
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

	const reloadPage = () => {
		window.location.reload();
		toast.success("Page  Loading ! ");
	};
	const Props = localStorage.getItem("data");
	const PropsData = JSON.parse(Props);

	const navigate = useNavigate();

	const handleSaveData = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "CARZ",
			branchCode: "GGN01",
			uniqueSerial: "0",
			mobile: mobile,
			email: email,
			mfdMonth: PropsData.mfdMonth,
			firstName: name,
			source: "26",
			brand: PropsData.brand,
			model: PropsData.model,
			exteriorColor: PropsData.exteriorColor,
			variantCode: PropsData.variantCode,
			regnFormat: PropsData.regnFormat,
			regnPart1: PropsData.textInput2,
			regnPart2: PropsData.textInput2,
			regnPart3: PropsData.textInput2,
			regnPart4: "",
			vehicleRegnNo: PropsData.vehRegn,
			mfdYear: PropsData.mfdYear,
			fuel: PropsData.fuel,
			regnState: selectedstate,
			regnCity: selectcity,
			regn1: PropsData.regn1,
			Kms: PropsData.Kms,
			loginCompanyID: "CARZ",
			loginUserId: "MANISH",
			CalledBy: "",
			NOCTYPELIST: [
				{
					ID: "0",
					TYPE: "",
					VALIDUPTO: "",
				},
			],
			loginIpAddress: "180.151.78.50",
		};

		fetch(
			" https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/UpdateBasicInfo",
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
			.catch((error) => {
				// Handle any errors
				toast(error);
			});
	};

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		const numericValue = newValue.replace(/[^0-9]/g, "");

		if (numericValue.length <= 10) {
			setmobile(numericValue);
		}
	};
	const handleHomeClick = () => {
		setDetailspage(false);
	};

	return (
		<div>
			<Navbar onHomeClick={handleHomeClick} />
			{/* header section */}
			<PageScrollTop />
			<SocalMedia />

			<div className='m-submit1' data-scrolling-animations='true'>
				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className=' '>Submit Your Vehicle</h1>
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container '>
						<Link to='/' className='b-breadCumbs__page' onClick={reloadPage}>
							Home
						</Link>
						<span className='fa fa-angle-right'></span>
						<a href='submit1.html' className='b-breadCumbs__page m-active'>
							Submit a Vehicle
						</a>
					</div>
				</div>
			</div>

			<div className='b-submit'>
				<div className='container'>
					<div className='form_clr'>
						<div className='row'>
							<div className='col-lg-12 col-md-12 col-sm-12 '>
								<aside className='b-submit__aside sub_mn'>
									<div className='b-submit__aside-step m-active sub_wd'>
										<div className='b-submit__aside-step-inner m-active clearfix'>
											<div className='b-submit__aside-step-inner-icon'>
												<span className='fa fa-car'></span>
											</div>
											<div className='b-submit__aside-step-inner-info'>
												<h4>Step 1</h4>
												<p>Select your vehicle &amp; add info</p>
												<div className='b-submit__aside-step-inner-info-triangle'></div>
											</div>
										</div>
									</div>

									<div className='b-submit__aside-step m-active sub_wd'>
										<div className='b-submit__aside-step-inner m-active clearfix'>
											<div className='b-submit__aside-step-inner-icon'>
												<span className='fa fa-user'></span>
											</div>
											<div className='b-submit__aside-step-inner-info'>
												<h4>Step 2</h4>
												<p>Update your contact details</p>
												<div className='b-submit__aside-step-inner-info-triangle'></div>
											</div>
										</div>
									</div>
								</aside>

								<div className='b-submit__main'>
									<form className='s-submit'>
										<div className='b-submit__main-contacts  sum_pding'>
											<div className='s-headerSubmit s-lineDownLeft'>
												<h2>Contact Details</h2>
											</div>

											<div className='row'>
												<div className='col-md-6 '>
													<div className='b-submit__main-element'>
														<label style={{ color: "black" }}>
															Name <span>*</span>
														</label>
														<input
															type='text'
															placeholder='Please Enter Name'
															name='name'
															onChange={(e) => setname(e.target.value)}
														/>
													</div>
												</div>
												<div className='col-md-6 '>
													<div className='b-submit__main-element'>
														<label style={{ color: "black" }}>
															Email Id <span>*</span>
														</label>
														<input
															type='text'
															name='email'
															placeholder='Please Enter Email Id'
															onChange={(e) => setemail(e.target.value)}
														/>
													</div>
												</div>
											</div>

											<div className='row'>
												<div className='col-md-6 '>
													<div className='b-submit__main-element'>
														<label style={{ color: "black" }}>
															Enter Your Phone Number <span>*</span>
														</label>
														<input
															type='text'
															name='mobile'
															value={mobile}
															placeholder='Please Enter Mobile No.'
															onChange={handleInputChange}
														/>
														{mobileError && (
															<span style={{ color: "red" }}>
																{mobileError}
															</span>
														)}
													</div>
												</div>
												<div className='col-md-6 '>
													<div className='b-submit__main-element '>
														<label style={{ color: "black" }}>
															State <span>*</span>
														</label>
														<div className='s-relative'>
															<Select
																className='selectdataf1'
																value={selectedstate}
																onChange={handleSelectChange11}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select State
																</MenuItem>
																{statelist.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
														</div>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='col-md-6 '>
													<div className='b-submit__main-element '>
														<label style={{ color: "black" }}>
															City <span>*</span>
														</label>
														<div className='s-relative'>
															<Select
																className='selectdataf1'
																value={selectcity}
																onChange={handleSelectChange12}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select State
																</MenuItem>
																{city.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
														</div>
													</div>
												</div>
												<div className='col-md-6 '>
													<div className='b-submit__main-element '>
														<form>
															<span
																className='d-flex pad_cap1'
																style={{
																	fontWeight: "600",
																	marginTop: "-20px",
																	height: "26px",
																	color: "green",
																}}>
																<span
																	style={{
																		fontSize: "25px",
																		marginLeft: "20px",

																		color: "red",
																		fontWeight: "800px ",
																	}}>
																	{" "}
																	{num1} + {num2} = ?
																</span>
																<i
																	style={{
																		marginLeft: "20px",
																		marginTop: "10px",
																	}}
																	onClick={resetCaptcha}
																	class='fa fa-refresh fa-1x'
																	aria-hidden='true'></i>

																<span style={{ color: "red" }}>*</span>
															</span>
															<br />

															<div className='d-flex'>
																<input
																	className='s-relative'
																	placeholder='Please Enter   Captcha'
																	type='text'
																	value={userAnswer}
																	onChange={(event) =>
																		setUserAnswer(event.target.value)
																	}></input>
															</div>
														</form>

														{message && (
															<p style={{ color: "black" }}>{message}</p>
														)}
														{error && <p style={{ color: "red" }}>{error}</p>}
													</div>
												</div>
											</div>
										</div>
										<div className=' '>
											<div className='btn_wd1'>
												<Link to='/salecar'>
													<button
														id='procedbtn22'
														style={{
															backgroundColor: "#f76d2b",
															color: "white",
															marginTop: "30px",
														}}
														type='submit'
														className='btn m-btn pull-right  btn-danger'>
														Go Back
														<span
															id='arrowiconbtn'
															className='fa fa-arrow-left'></span>
													</button>
												</Link>
											</div>
											<div className='btn_wd1'>
												<button
													id='procedbtn22'
													style={{ backgroundColor: "#f76d2b" }}
													type='button'
													onClick={handleSubmit}
													data-toggle='modal'
													href='#ignismyModal'
													className='btn m-btn pull-right  btn-danger'>
													Click to Raise Request
													<span
														id='arrowiconbtn'
														className='fa fa-check'></span>
												</button>

												{!mobileError && captchaValid && (
													<>
														<div className=''>
															<div className='row'>
																<div
																	className='modal fade'
																	id='ignismyModal'
																	role='dialog'>
																	<div
																		className='modal-dialog mdl_top'
																		style={{ margingTop: "90px" }}>
																		<div className='modal-content'>
																			<div className='modal-header modl_hit'>
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
																						className=''
																						src='http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png'
																						alt=''
																					/>

																					<h4
																						className=''
																						style={{
																							marginTop: "10px",
																							marginLeft: "140px",
																						}}>
																						Are you sure to raise enquiry?
																					</h4>

																					<p></p>
																					<div
																						className='d-flex flx_mn_btn'
																						style={{}}>
																						<button
																							onClick={handleSaveData}
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
																								backgroundColor: "#c1272d",

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
													</>
												)}
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Submit2;
