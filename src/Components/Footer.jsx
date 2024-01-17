import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div>
			<div class='b-info'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-4 col-xs-12'>
							<aside class='b-info__aside abo_clr'>
								<article class='b-info__aside-article'>
									<h3>About us</h3>
									<p>
										Established in 2010, Carz Gallery has built a strong
										reputation for our customer-oriented approach. Over the past
										13 years, we have always prioritized total customer
										satisfaction as our main motive. We take pride in offering a
										wide selection of high-quality preowned cars, ensuring that
										our customers find the perfect vehicle to meet their needs.
									</p>
								</article>
							</aside>
						</div>

						<div class='col-md-4 col-xs-12'>
							<aside class='b-info__aside abo_clr '>
								<article class='b-info__aside-article'>
									<h3>OPENING HOURS</h3>
									<div class='b-info__aside-article-item'>
										<h6>Sales Department</h6>
										<p>Mon-Sun : 10:00am - 7:00pm</p>
									</div>
								</article>
							</aside>
						</div>

						<div class='col-md-4 col-xs-12'>
							<address class='b-info__contacts  '>
								<p>contact us</p>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<ol>
										Plot no 30, Block A, 12, Dividing Road, Sector 11,
										Faridabad, Haryana 121006
									</ol>
								</div>

								<div class='b-info__contacts-item'>
									<span class='fa fa-phone'></span>
									<ol>+91 9873991899</ol>
								</div>

								<div class='b-info__contacts-item'>
									<span class='fa fa-envelope'></span>
									<em>
										<ol>carzgallery3@gmail.com</ol>
									</em>
									<address class='b-info__map'>
										<Link
											style={{
												marginLeft: "-125px",
												marginTop: "-30px",

												textDecoration: "none",
											}}
											to='/contact'>
											Open Location Map
										</Link>
									</address>
								</div>
							</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
