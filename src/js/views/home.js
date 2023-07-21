import React, { useContext} from "react";
import "../../styles/home.css";
import CardPersonajes from "../component/cardPersonajes.js";
import CardPlanetas from "../component/cardPlanetas.js";
import { Context } from "../store/appContext.js";



export const Home = () => {
	const {store, action}= useContext(Context)

	return (
	<div className="container">
		<h1>Characters</h1>
		<div className="d-flex row flex-nowrap overflow-auto">
			{store.personajes.map((item)=><CardPersonajes key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}		
		</div>
		<h1>Planets</h1>
		<div className="d-flex row flex-nowrap overflow-auto">  	
			{store.planetas.map((item)=><CardPlanetas key={item.uid} nombre={item.name} url={item.url} id={item.uid}/>)}
		</div>
		
	</div>
);
}