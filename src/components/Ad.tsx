import React from "react";
import Card from "react-bootstrap/Card";

interface Props{
flavor: string,
fontSize: number,
darkTheme: boolean

}
export default function Ad (props: Props) {
    return(
        
        <Card className="card" style={{ width: "18rem", textAlign: "center" }}>
        <Card.Body className={props.darkTheme ? "dark" : "light"}>
          <Card.Title>Vote For</Card.Title>
          <Card.Subtitle className="mb-2" style={{fontSize: props.fontSize}}>{props.flavor}</Card.Subtitle>
        </Card.Body>
      </Card>

    )
}