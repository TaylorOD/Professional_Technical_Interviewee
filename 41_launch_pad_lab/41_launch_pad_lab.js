// Link to problem: https://codesandbox.io/s/lpl-pairing-js-react-exercise-demo-v1-0-0-forked-v0p3ge?file=/src/App.js:722-727

import React from 'react';
import Header from './Header';
import doRite from '/data/doRite';
import doughnutVault from '/data/doughnutVault';
import firecakes from '/data/firecakes';

export default function App() {
	const doRiteRating = doRite.average_rating;
	const doRiteFlavorNum = doRite.flavors.length;
	const doRitePrice = doRite.price.length;
	const doughnutVaultRating = doughnutVault.average_rating;
	const doughnutVaultFlavorNum = doughnutVault.flavors.length;
	const doughnutVaultPrice = doughnutVault.price.length;

	return (
		<div className="app">
			<Header />
			<h1>Hello!</h1>
			<h2>Start editing and save your changes to see some magic happen.</h2>
			<div>
				<table>
					<thead>
						<tr>
							<th colSpan="3">LPL Donut API</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Ave Rating</td>
							<td>Number of Falvors</td>
							<td>Cost (lower is lower)</td>
						</tr>
						<tr>
							<td>{doRiteRating}</td>
							<td>{doRiteFlavorNum}</td>
							<td>{doRitePrice}</td>
						</tr>
						<tr>
							<td>{doughnutVaultRating}</td>
							<td>{doughnutVaultFlavorNum}</td>
							<td>{doughnutVaultPrice}</td>
						</tr>
						<tr>
							<td>{firecakes.average_rating}</td>
							<td>{firecakes.flavors.length}</td>
							<td>{firecakes.price.length}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
