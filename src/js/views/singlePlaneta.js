import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlaneta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.infoPlaneta(params.theid);
		
	},[])
	
	console.log(store.infoPlaneta)
	return (
		<div className="jumbotron text-center">
			 <img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} class="card-img-left" alt="..."></img>
			<h1 className="display-4">{store.infoPlaneta?.properties?.name}</h1>
			<h2></h2>
			<hr className="my-4" />
			<div className="container">
				<table className="table">
					<thead>
						<tr>
						<th scope="col">Diameter</th>
						<th scope="col">Climate</th>
						<th scope="col">Terrain</th>
						<th scope="col">Population</th>
						</tr>
					</thead>
					
						<tr>
						<td>{store.infoPlaneta?.properties?.diameter}</td>
						<td>{store.infoPlaneta?.properties?.climate}</td>
						<td>{store.infoPlaneta?.properties?.terrain}</td>
						<td>{store.infoPlaneta?.properties?.population}</td>
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

SinglePlaneta.propTypes = {
	match: PropTypes.object
};