
// TODO understand ReactDOM (2020-11-16)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TODO deploy this application, save URL and always look at it before you start working (2020-11-16)

class Square extends React.Component {
	render() {
		return (
			<button className="square">
				{/* TODO: implement this */}
			</button>
		);
	}
}

class Board extends React.Component {
	renderSquare(i) {
		return <Square />;
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				
			)
	}
}


