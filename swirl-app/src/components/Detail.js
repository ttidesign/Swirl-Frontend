import React, { useState, useEffect } from 'react'

function Detail (props) {
    const [data,setData]= useState([]);

		useEffect(() => {
			getData();
			//eslint-disable-next-line
		}, []);
		function getData() {
			const url = `http://localhost:8000/drinks/${props.id}`;
			//fetch data
			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					//set datas value and assign to datas array
					setData(response);
				})
				.catch(console.error);
		}
    return (
			<div className='detail-view'>
				<div>
					<img
						className='detail-image'
						src={data.img_url}
						alt='specific espresso drink'></img>
				</div>
				<div className='detail-info'>
					<h4>{data.title}</h4>
					<p>{data.description}</p>
					<h5>Ingredients:</h5>
					<p>{data.ingredients}</p>
					<li>Milk: {data.milk}</li>
					<li>Espresso Bean: {data.espresso}</li>
					<li>Espresso Shot: {data.shot}</li>
					<li>Custom: {data.customize}</li>
					<h5>Price:</h5>
					<p> ${data.price}</p>
                    <button> Add To Cart</button>
                    
				</div>
			</div>
		);
}
export default Detail