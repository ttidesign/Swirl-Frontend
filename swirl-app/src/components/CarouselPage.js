import React from 'react';
import carouselImage from './Url'
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBContainer,
} from 'mdbreact';
import carouselImages from './Url';

const CarouselPage = () => {
	return (
		<div className='carousel-container'>
			<MDBContainer>
				<MDBCarousel
					activeItem={1}
					length={5}
					showControls={false}
					showIndicators={true}
					className='z-depth-1'>
					<MDBCarouselInner>
						<MDBCarouselItem itemId='1'>
							<MDBView>
								<img
									className='d-block w-100'
									src={carouselImages[0]}
									alt='First slide'
								/>
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId='2'>
							<MDBView>
								<img
									className='d-block w-100'
									src={carouselImages[1]}
									alt='Second slide'
								/>
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId='3'>
							<MDBView>
								<img
									className='d-block w-100'
									src={carouselImages[2]}
									alt='Third slide'
								/>
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId='4'>
							<MDBView>
								<img
									className='d-block w-100'
									src={carouselImages[3]}
									alt='Third slide'
								/>
							</MDBView>
						</MDBCarouselItem>
						<MDBCarouselItem itemId='5'>
							<MDBView>
								<img
									className='d-block w-100'
									src={carouselImages[4]}
									alt='Third slide'
								/>
							</MDBView>
						</MDBCarouselItem>
					</MDBCarouselInner>
				</MDBCarousel>
			</MDBContainer>
		</div>
	);
};

export default CarouselPage;