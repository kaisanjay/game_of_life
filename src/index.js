import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component{
	render(){
		return(
			<div>
				GRID
			</div>)
	}
}

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			generation: 0,
		}
	}
	render(){
		return (
			<div>
			<h1>Game Of Life</h1>
			<Grid
			/>
			<h2>generation: {this.state.generation}</h2>
			</div>);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));

