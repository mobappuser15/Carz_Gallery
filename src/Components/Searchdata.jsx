import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 4,
		height: 3,
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1,
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4,
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4,
	},
	{
		src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
		width: 3,
		height: 4,
	},
	{
		src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
		width: 4,
		height: 3,
	},
	{
		src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
		width: 3,
		height: 4,
	},
	{
		src: "https://source.unsplash.com/PpOHJezOalU/800x599",
		width: 4,
		height: 3,
	},
	{
		src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
		width: 4,
		height: 3,
	},
];

const Searchdata = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	const openModal = () => {
		document.getElementById("myModal").style.display = "block";
	};

	const closeModal = () => {
		document.getElementById("myModal").style.display = "none";
	};

	const plusSlides = (n) => {
		setSlideIndex((prevIndex) => prevIndex + n);
	};

	const currentSlide = (n) => {
		setSlideIndex(n);
	};

	return (
		<div>
			{/* Button to Open the Modal */}

			<h2 style={{ textAlign: "center" }}>Lightbox Image Gallery</h2>

			<div>
				{/* Image Grid */}
				<div className='row'>
					<div className='column'>
						<img
							src='https://www.w3schools.com/howto/img_nature.jpg'
							style={{ width: "100%" }}
							onClick={() => {
								openModal();
								currentSlide(1);
							}}
							className='hover-shadow cursor'
							alt='Nature'
						/>
					</div>
					<div className='column'>
						<img
							src='https://www.w3schools.com/howto/img_snow.jpg'
							style={{ width: "100%" }}
							onClick={() => {
								openModal();
								currentSlide(2);
							}}
							className='hover-shadow cursor'
							alt='Snow'
						/>
					</div>
					<div className='column'>
						<img
							src='https://www.w3schools.com/howto/img_mountains.jpg'
							style={{ width: "100%" }}
							onClick={() => {
								openModal();
								currentSlide(3);
							}}
							className='hover-shadow cursor'
							alt='Mountains'
						/>
					</div>
					<div className='column'>
						<img
							src='https://www.w3schools.com/howto/img_lights.jpg'
							style={{ width: "100%" }}
							onClick={() => {
								openModal();
								currentSlide(4);
							}}
							className='hover-shadow cursor'
							alt='Lights'
						/>
					</div>
				</div>

				{/* The Modal */}
				<div id='myModal' className='modal'>
					<span className='close cursor' onClick={closeModal}>
						&times;
					</span>
					<div className='modal-content'>
						{/* Slides */}
						{[1, 2, 3, 4].map((index) => (
							<div
								key={index}
								className={`mySlides ${slideIndex === index ? "visible" : ""}`}>
								<div className='numbertext'>{index} / 4</div>
								<img
									src={`https://www.w3schools.com/howto/img_${
										index === 4 ? "lights" : `nature${index}_wide`
									}.jpg`}
									style={{ width: "100%" }}
									alt={`Slide ${index}`}
								/>
							</div>
						))}

						{/* Navigation buttons */}
						<a className='prev' onClick={() => plusSlides(-1)}>
							&#10094;
						</a>
						<a className='next' onClick={() => plusSlides(1)}>
							&#10095;
						</a>

						{/* Dots */}
						<div className='caption-container'>
							<p id='caption'></p>
						</div>

						{/* Thumbnail images */}
						{[1, 2, 3, 4].map((index) => (
							<div key={index} className='column'>
								<img
									className='demo cursor'
									src={`https://www.w3schools.com/howto/img_${
										index === 4 ? "lights" : `nature${index}_wide`
									}.jpg`}
									style={{ width: "100%" }}
									onClick={() => currentSlide(index)}
									alt={`Thumbnail ${index}`}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Searchdata;
