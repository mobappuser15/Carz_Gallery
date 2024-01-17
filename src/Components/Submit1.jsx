import React, { useState, useEffect } from "react";
import axios from "axios";
import Submit4 from "./Submit4";
import { Link, useNavigate } from "react-router-dom";
import Searchdata from "./Searchdata";
import ScrollTop from "./ScrollTop";
import PageScrollTop from "./PageScrollTop";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocalMedia from "./SocalMedia";

const Submit1 = ({ detailspage, setDetailspage }) => {
	const [num1, setNum1] = useState(1);
	const [num2, setNum2] = useState(3);
	const [captcha, setCaptcha] = useState("");
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
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
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectmfm, setSelectmfm] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [odometr, setodometr] = useState("");
	const [regno, setregno] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [textInput2, setTextInput2] = useState("");
	const [textInput4, setTextInput4] = useState("");
	const [registration, setregistration] = useState("");
	const [errors, setErrors] = useState({
		selectedItem: false,
		selectverient: false,
		selectmfy: false,
		selectfuel: false,
		selecttransmission: false,
		selectmodel: false,
		selectextirecolor: false,
		selecttype: false,
		selectmfm: false,
	});

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
	// Lead Type list
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
			calledBy: "LEAD_TYPE",
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
				setDatatype(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// varient list
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

			calledBy: "VARIANT",
			vehMake: codemodel,
			vehModel: codemake,

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
				setVarient(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemake, codemodel]);
	// year list
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
			calledBy: "MF_YEAR",
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
				setVechileYear(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// month list
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
			calledBy: "MONTH",
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
				setVechileMonth(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
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
				setFuelData(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	//  TRANSMISSION list
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
			calledBy: "TRANSMISSION",
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
				setTransmission(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// extier color list

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
			calledBy: "EXT_COLOR",

			vehMake: codemodel,
			vehModel: codemake,
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
				setExtirearColor(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel, codemake]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};
	const handleSelectChange2 = (event) => {
		setSelecttype(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemake(event.target.value);
	};
	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
	};
	const handleSelectChange5 = (event) => {
		setSelecttransmission(event.target.value);
	};
	const handleSelectChange6 = (event) => {
		setSelectextirecolor(event.target.value);
	};
	const handleSelectChange7 = (event) => {
		setSelectmfy(event.target.value);
	};
	const handleSelectChange8 = (event) => {
		setSelectmfm(event.target.value);
	};
	const handleSelectChange9 = (event) => {
		setSelectverient(event.target.value);
	};
	const navigate = useNavigate();
	const handleInputChange = (event) => {
		let inputValue = event.target.value;

		// inputValue = inputValue.replace(/[^A-Za-z]/g, "");

		if (inputValue.length <= 6) {
			setTextInput2(inputValue.toUpperCase());
		}
	};

	const handleInputChangereg = (event) => {
		let inputValue = event.target.value;

		inputValue = inputValue.replace(/\D/g, "");

		if (inputValue.length <= 4) {
			setTextInput4(inputValue);
		}
	};

	const handleSaveData = (e) => {
		e.preventDefault();
		const isValid = isFormValid();

		if (isValid) {
			const AllData = {
				mfdMonth: selectmfm,
				source: resourcedata,
				brand: selectedItem,
				model: selectmodel,
				exteriorColor: selectextirecolor,
				variantCode: selectverient,
				regnFormat: selecttransmission,
				vehRegn: [textInput2, textInput4].filter(Boolean).join("-"),
				mfdYear: selectmfy,
				fuel: selectfuel,
				Kms: odometr,
				regn1: registration,
			};

			localStorage.setItem("data", JSON.stringify(AllData));
			navigate("/submit2");
		} else {
		}
	};

	function isFormValid() {
		const isValid =
			selectedItem.trim() !== "" &&
			selectmfy.trim() !== "" &&
			selectfuel.trim() !== "" &&
			selecttransmission.trim() !== "" &&
			selectmodel.trim() !== "" &&
			selectextirecolor.trim() !== "" &&
			selectmfm.trim() !== "";
		setErrors({
			selectedItem: selectedItem.trim() === "",
			selectmfy: selectmfy.trim() === "",
			selectfuel: selectfuel.trim() === "",
			selecttransmission: selecttransmission.trim() === "",
			selectmodel: selectmodel.trim() === "",
			selectextirecolor: selectextirecolor.trim() === "",
			selectmfm: selectmfm.trim() === "",
		});

		return isValid;
	}

	const handleHomeClick = () => {
		setDetailspage(false);
	};

	const handleInputChangeReg = (event) => {
		let inputValue = event.target.value;

		if (inputValue.length <= 6) {
			setregistration(inputValue.toUpperCase());
		}
	};

	return (
		<>
			<Navbar onHomeClick={handleHomeClick} />
			<SocalMedia />
			<div style={{ margingTop: "40px" }}>
				<PageScrollTop />

				<div class='m-submit1' data-scrolling-animations='true'>
					<section class='b-pageHeader'>
						<div class='container'>
							<h1 class=''>Submit Your Vehicle</h1>
						</div>
					</section>

					<div class='b-breadCumbs s-shadow'>
						<div class='container  '>
							<Link to='/' className='b-breadCumbs__page'>
								Home
							</Link>
							<span class='fa fa-angle-right'></span>
							<a class='b-breadCumbs__page m-active'> Sell Car</a>
						</div>
					</div>
				</div>

				{/* body section */}

				<div class='b-submit'>
					<div class='container'>
						<div class='form_clr'>
							<div class='row'>
								<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
									<aside class='b-submit__aside sub_mn'>
										<div class='b-submit__aside-step m-active  sub_wd'>
											<div class='b-submit__aside-step-inner m-active clearfix'>
												<div class='b-submit__aside-step-inner-icon'>
													<span class='fa fa-car'></span>
												</div>
												<div class='b-submit__aside-step-inner-info'>
													<h4>Step 1</h4>
													<p>Select your vehicle &amp; add info</p>
													<div class='b-submit__aside-step-inner-info-triangle'></div>
												</div>
											</div>
										</div>
										<div class='b-submit__aside-step sub_wd'>
											<div class='b-submit__aside-step-inner clearfix'>
												<div class='b-submit__aside-step-inner-icon'>
													<span class='fa fa-user'></span>
												</div>
												<div class='b-submit__aside-step-inner-info'>
													<h4>Step 2</h4>
													<p>Update your contact details</p>
												</div>
											</div>
										</div>
										<a
											href='https://api.whatsapp.com/send/?phone=919958241899&text= Hello Carz Gallery+Team%2C+I+would+like+to+know+more&type=phone_number&app_absent=0'
											target='_blank'>
											<div class='b-submit__aside-step sub_wd'>
												<div class='b-submit__aside-step-inner clearfix'>
													<div class='b-submit__aside-step-inner-icon icn_wts_clr'>
														<span class='fab fa-whatsapp icn_wts'></span>
													</div>
													<div class='b-submit__aside-step-inner-info'>
														<h4 class='wts_tx_centr'>whatsapp Us</h4>
													</div>
												</div>
											</div>
										</a>
									</aside>

									<div class='b-submit__main'>
										<div class='s-headerSubmit s-lineDownLeft  '>
											<h2 class=''>Add Your Vehicle Details</h2>
										</div>
										{/*  form section */}

										<form class='s-submit clearfix' onSubmit={handleSaveData}>
											<div class='row'>
												<div class='col-md-6 '>
													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Make <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectedItem}
																onChange={handleSelectChange}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
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
															{errors.selectedItem && (
																<span style={{ color: "red" }}>
																	Please Select Make
																</span>
															)}
														</div>
													</div>
													<div class='b-submit__main-element  visible-xs '>
														<label style={{ color: "black" }}>
															Model <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectmodel}
																onChange={handleSelectChange3}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
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
															{errors.selectmodel && (
																<span style={{ color: "red" }}>
																	Please Select Model
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>Variant</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectverient}
																onChange={handleSelectChange9}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Variant{" "}
																</MenuItem>
																{varient.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectverient && (
																<span style={{ color: "red" }}>
																	Please Select Variant
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Year of MF. <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectmfy}
																onChange={handleSelectChange7}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Year{" "}
																</MenuItem>
																{vyear.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectmfy && (
																<span style={{ color: "red" }}>
																	Please Select Year
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Fuel <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectfuel}
																onChange={handleSelectChange4}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Fuel{" "}
																</MenuItem>
																{fueldata.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectfuel && (
																<span style={{ color: "red" }}>
																	Please Select Fuel
																</span>
															)}
														</div>
													</div>
													<div className='b-submit__main-element'>
														<label style={{ color: "black" }}>
															Odometer <span>*</span>
														</label>
														<input
															type='text'
															placeholder='Please Enter Odometer'
															name='odometr'
															onChange={(e) => setodometr(e.target.value)}
														/>
													</div>
												</div>
												<div class='col-md-6 '>
													<div class='b-submit__main-element hidden-xs '>
														<label style={{ color: "black" }}>
															Model <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectmodel}
																onChange={handleSelectChange3}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Model{" "}
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
															{errors.selectmodel && (
																<span style={{ color: "red" }}>
																	Please Select Model
																</span>
															)}
														</div>
													</div>
													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Exterior Color <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectextirecolor}
																onChange={handleSelectChange6}
																displayEmpty>
																<MenuItem value='' className='selectoption'>
																	Select Exterior Color{" "}
																</MenuItem>
																{extirecolor.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectextirecolor && (
																<span style={{ color: "red" }}>
																	Please Select Exterior Color
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Month of MF. <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																name='source'
																className='selectdataf1'
																value={selectmfm}
																onChange={handleSelectChange8}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Month{" "}
																</MenuItem>
																{vmonth.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectmfm && (
																<span style={{ color: "red" }}>
																	Please Select Month
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Transmission <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selecttransmission}
																onChange={handleSelectChange5}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Transmission{" "}
																</MenuItem>
																{transmission.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>

															{errors.selecttransmission && (
																<span style={{ color: "red" }}>
																	Please Select Transmission
																</span>
															)}
														</div>
													</div>
													<label style={{ color: "black" }}>
														Registration No. <span>*</span>
													</label>
													<input
														required=''
														placeholder='Registration No.'
														type='text'
														value={registration}
														onChange={handleInputChangeReg}
														className='admintextbox'
													/>

													<button
														id='procedbtn'
														type='submit'
														class='btn m-btn  '>
														PROCEED to next step
														<span
															id='arrowiconbtn'
															class='fa fa-check'
															aria-hidden='true'></span>
													</button>
												</div>
											</div>
										</form>
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
};

export default Submit1;
