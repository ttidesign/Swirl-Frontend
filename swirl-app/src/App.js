import React from 'react';
import {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './components/NavBar'
import CarouselPage from './components/CarouselPage'
import Main from './components/Main'
import Detail from './components/Detail'

function App() {
  
  const [datas, setDatas] = useState([]);
  
	useEffect(() => {
		getDatas();
		//eslint-disable-next-line
	}, []);
	function getDatas() {
    const url = `http://localhost:8000/`;
		//fetch data
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				//set datas value and assign to datas array
				setDatas(response); 
			})
			.catch(console.error);
	}
    
  return (
		<div>
			<NavBar />
      <CarouselPage/>
			<Route
				exact
				path='/'
				render={(routerProps) => {
					return <Main datas={datas} />;
				}}
			/>
			<Route
				exact
				path='/drinks/:id'
				render={(routerProps) => {
					return <Detail id={routerProps.match.params.id} />;
				}}
			/>
		</div>
	);
}

export default App;
