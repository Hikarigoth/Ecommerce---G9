import React from 'react';


export default function Productos(props) {



  return (
    <div class="containerProduct">
      <div class="cardProduct">
        <div class="imagenContainer">
          <div class="imagenProduct">
            <img class="imagenP"src={`http://localhost:3001/uploads/${props.producto.picture}`} />
          </div>
          <div class="info">
            <h3 class="productName">{props.producto.name}</h3>
            <h4 class="productPrice">${props.producto.price}</h4>
            <h5 class="productDescription">{props.producto.description}</h5>
            <h5 className="productDescription">{props.producto.stock}</h5>
            {props.producto.stock === 0 ? 
            <button disabled="true" style={{margin:"30px 0px 0px 70px", width: "100px"}} type="button" class="btn btn-primary">Comprar</button> : 
            <button style={{margin:"30px 0px 0px 70px", width: "100px"}} type="button" class="btn btn-primary">Comprar</button>
            }
            
            <div id='heart' class='button'>
              {console.log(props.producto.stock)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}







