import React from "react";

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export default function CartitasDeHome () {
  const history = useHistory();

  const starwars = (e) => {
    e.preventDefault();
    history.push("/products/categoria/starwars")
  }

  const pokemon = (e) => {
    e.preventDefault();
    history.push("/products/categoria/pokemon")
  }

  const naruto = (e) => {
    e.preventDefault();
    history.push("/products/categoria/naruto")
  }

    return (

<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_784278-MLA31117947416_062019-O.jpg"  width= "400" height= "400"/>
    <Card.Body>
      <Button variant="secondary" size="medium" as="a" href="/products/categoria/starwars" onClick={starwars} active>Conseguilo acá</Button>
      <Card.Title>Pochoclera Star Wars</Card.Title>
      <Card.Text>
      PRODUCTO ORIGINAL IMPORTADO DE USA!!
      En las películas de Star Wars, la Estrella de la Muerte tiene el poder suficiente para destruir un planeta entero, está pochoclera de la Estrella De La Muerte, también tiene el poder para hacer el mejor pochoclo de la galaxia. Esta pochoclera Death Star Star Wars, es una opción perfecta para cualquier fan de Star Wars. Sentirás la potencia del lado oscuro, cada vez que uses esta pochoclera divertida y finamente diseñada, para disfrutar los pochoclos frescos, dulces o salados, mientras ves tu película favorita de Star Wars o también solo para exhibir.
      La tapa funciona como bowl contenedor de pochoclos!
      Funciona utilizando aire caliente. Acabado: gris, con escamas metálicas.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <medium className="text-muted">Precio $30000</medium>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.imgur.com/ckho1Id.png" width= "400" height= "395"/>
    <Card.Body>
    <Button variant="secondary" size="medium" as="a" href="/products/categoria/pokemon" onClick={pokemon} active>Conseguilo acá</Button>
      <Card.Title>Funko Pop Pikachu 353</Card.Title>
      <Card.Text>
      Linea Pop! Games
      Producto Original Funko
      Nuevo y en su Embalaje Original
      Alucinante Figura POP, de la marca Funko, de unos 10cms de alto. Ideal para fanáticos y coleccionistas, para regalar o regalarse, no podes dejar de tener esta hermosa figura. Marca Funko en Caja cerrada, en Excelente estado de conservación, nunca abierta ni exhibida.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <medium className="text-muted">Precio $2000</medium>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.imgur.com/N2hQh4j.png"  width= "400" height= "400"/>
    <Card.Body>
    <Button variant="secondary" size="medium" as="a" href="/products/categoria/naruto" onClick={naruto} active>Conseguilo acá</Button>
      <Card.Title>Figura Gaara mode 185</Card.Title>
      <Card.Text>
        Convertite en el mejor ninja!
        ¡Una colección de figuras única e irrepetible!
        Completa esta impresionante colección de figuras exclusivas en la que se encuentran todos los personajes clave de la popular serie animada. Desde los miembros del equipo 7 hasta las bestias con cola, pasando por los principales aliados de Naruto y los miembros de Akatsuki, entre muchos otros.
        Las figuras se han reproducido con todo detalle, respetando los rasgos, vestuario y complementos originales de cada personaje.
        ¡Un póster central en cada entre
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <medium className="text-muted">Precio $1500</medium>
    </Card.Footer>
  </Card>
</CardDeck>
    )
    } 