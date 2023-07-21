import React, {useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsFillStarFill } from 'react-icons/bs'
const CardPlanetas = (props) => {
  
  const{store, actions}=useContext(Context)
    return(
        <div className="card" style={{width: "16rem"}}>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <Link to={"/singlePlaneta/"+props.id} className="btn btn-primary">More info!</Link>
            <button id="fav" type="button" className="btn btn-outline-warning" onClick={()=>{actions.añadirFavoritos(props.nombre)}}>
              <BsFillStarFill/>
            </button>
          </div>
        </div>
    )
};

export default CardPlanetas;