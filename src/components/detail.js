import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
 function Detail(props) {
 const params = useParams();
 return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
    <Card.Img
      style={{ height: "14rem" }}
      variant="top"
      src={props.mascota.foto}
      alt={props.mascota.descripcion}
    />
    <Card.Body>
      <Card.Title>
        <Link to={"/mascotas/" + props.mascota.id}>
          {props.mascota.nombre}
        </Link>
      </Card.Title>
      <Card.Text>{props.mascota.descripcion}</Card.Text>
    </Card.Body>
  </Card>
 );
}
export default Detail