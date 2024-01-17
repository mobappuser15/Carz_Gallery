import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./Components/ScrollTop";
import HomePage from "./Components/HomePage";
import Insurance from "./Components/Insurance";
import About from "./Components/About";
import Submit1 from "./Components/Submit1";
import ListTableTwo from "./Components/ListTableTwo";
import Details from "./Components/Details";
import EmiCalculator from "./Components/EmiCalculator";
import Submit2 from "./Components/Submit2";
import CarLoan from "./Components/CarLoan";
import AddVechil from "./Pages/AddVechil";
import AdminDash from "./Pages/AdminDash";
import DataUpload from "./Pages/DataUpload";
import StoreVechileTable from "./Pages/StoreVechileTable";
import BookingForm from "./Pages/BookingForm";
import DeleveryForm from "./Pages/DeleveryForm";
import Deleverystock from "./Pages/Deleverystock";
import OpenImage from "./Pages/OpenImage";
import GelleryImage from "./Components/GelleryImage";
import StockCars from "./Components/StockCars";
import BookingStovk from "./Pages/BookingStovk";
import UploadImageData from "./Pages/UploadImageData";
import FiinalImage from "./Pages/FiinalImage";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Admin from "./Pages/Admin";
import ErrorPage from "./Components/ErrorPage";
import EditForm from "./Pages/EditForm";

export default function App({ isLoggedIn }) {
	const [detailspage, setDetailspage] = useState(false);

	return (
		<div>
			<ScrollTop />
			<Routes>
				<Route path='/login' element={<Signup />} />{" "}
				<Route path='/admin' element={<AdminDash />} />{" "}
				{/* <Route
                                                                                                                                                                                                            						path='/dashboard'
                                                                                                                                                                                                            						element={isLoggedIn ? <DashBoard /> : <Navigate to='/homepage' />}
                                                                                                                                                                                                            					/>{" "} */}{" "}
				<Route
					path='/'
					element={
						<HomePage
							detailspage={detailspage}
							setDetailspage={setDetailspage}
						/>
					}
				/>{" "}
				<Route path='/insurence' element={<Insurance />} />{" "}
				<Route path='/about' element={<About />} />{" "}
				<Route path='/salecar' element={<Submit1 />} />{" "}
				<Route path='/buycar' element={<ListTableTwo />} />{" "}
				<Route path='/contact' element={<Contact />} />{" "}
				<Route
					path='/detailsdata'
					element={
						<StockCars
							detailspage={detailspage}
							setDetailspage={setDetailspage}
						/>
					}
				/>{" "}
				<Route
					path='/detailsparticular/:uniquekey/:vehOdometer'
					element={<Details />}
				/>{" "}
				<Route path='/editdata' element={<EditForm />} />{" "}
				<Route path='/openimage' element={<OpenImage />} />{" "}
				<Route path='/emical' element={<EmiCalculator />} />{" "}
				<Route path='/submit2' element={<Submit2 />} />{" "}
				<Route path='/carloans' element={<CarLoan />} />{" "}
				<Route path='/Addvechils' element={<AddVechil />} />{" "}
				<Route path='/dataupload' element={<DataUpload />} />{" "}
				<Route path='/deleveryform' element={<DeleveryForm />} />{" "}
				<Route path='/bookingform' element={<BookingForm />} />{" "}
				<Route path='/bookingstocktable' element={<BookingStovk />} />{" "}
				<Route path='/stocktable' element={<StoreVechileTable />} />{" "}
				<Route path='/deleveryhome' element={<Deleverystock />} />{" "}
				<Route path='/gellery' element={<GelleryImage />} />{" "}
				<Route path='/dataupload/finalimage' element={<FiinalImage />} />{" "}
			</Routes>{" "}
			<Toaster
				position='top-right'
				toastOptions={{
					success: {
						style: {
							background: "#05A677",
							color: "#fff",
						},
					},
					info: {
						style: {
							background: "#0948B3",
							color: "#fff",
						},
					},
					error: {
						style: {
							background: "#FA5252",
							color: "#fff",
						},
					},
				}}
			/>{" "}
		</div>
	);
}
