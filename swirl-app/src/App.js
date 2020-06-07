import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

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
				console.log(response)
				//set datas value and assign to datas array
				setDatas(response);
				// display last search item on page
			})
			.catch(console.error);
	}
  return (
		<div>
			<NavBar />
			<h2>hello</h2>
		</div>
	);
}

export default App;
