import React from 'react';
import { Link } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
function Main(props) {
    return (
			<div className='main-gallery'>
				{props.datas.map((data) => {
					return (
                        <div className='thumbnail-container' key={data.id}>
								<Link to={'/drinks/' + parseInt(data.id)}>
                            <MDBAnimation reveal type='fadeInUp' duration='600ms' delay='0.2s'>
									<img
										className='thumbnail'
										src={data.preview_url}
										alt='espresso drink'></img>
									<p className='drink-title'>{data.title}</p>
							</MDBAnimation>
								</Link>
						</div>
					);
				})}
			</div>
		);
}

export default Main