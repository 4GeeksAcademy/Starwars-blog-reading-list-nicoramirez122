import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePersonaje = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(()=>{
		actions.infoPersonaje(params.theid)
		
	},[])

	console.log(store.infoPersonaje)
	return (
		<div className="jumbotron text-center">
			 <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="card-img-left" alt="..."></img>
			<h1 className="display-4">{store.infoPersonaje?.properties?.name}</h1>
			<h2> </h2>
			<hr className="my-4" />
			<div className="container">
				<table className="table">
					<thead>
						<tr>
						<th scope="col">Eye color</th>
						<th scope="col">Height</th>
						<th scope="col">Mass</th>
						<th scope="col">Birth year</th>
						</tr>
					</thead>
						<tr>
						<td>{store.infoPersonaje?.properties?.eye_color}</td>
						<td>{store.infoPersonaje?.properties?.height}</td>
						<td>{store.infoPersonaje?.properties?.mass}</td>
						<td>{store.infoPersonaje?.properties?.birth_year}</td>
						</tr>
				</table>
			</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
		</div>
	);
};

SinglePersonaje.propTypes = {
	match: PropTypes.object
};