import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Welcome = (props) => {
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    if (quotes === "") {
      axios.get("https://type.fit/api/quotes").then((response) => {
        setQuotes(response.data);
      });
    }
  }, [quotes]);

  return (
    <React.Fragment>
    <Card bg="light" text="dark">
      <Card.Header>Quotes</Card.Header>
      <Card.Body style={{ overflowY: "auto", height: "251px", scrollbarColor: "lightGrey" }}>
        {quotes &&
          quotes.map((quote, id) => (
            <blockquote className="blockquote mb-0" key={id}>
              <p>{quote.text}</p>
              <footer className="blockquote-footer">{quote.author}</footer>
            </blockquote>
          ))}
      </Card.Body>
    </Card>
    <Card bg="light" text="dark" style={{marginTop:"20px"}}>
    <Card.Header >Stories</Card.Header>
    <h5 className="text-center" style={{marginTop:"20px"}}>The Lion and the Mouse</h5>
    <Card.Body className="text-justify" style={{fontSize:"20px", overflowY: "auto", height: "251px", padding:"5px 20px 20px 20px", scrollbarColor: "lightGrey"}}> 
      A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. 
      This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse 
      desperately requested the lion to set him free. “I promise you, I will be of great help to you someday if 
      you save me.” The lion laughed at the mouse’s confidence and let him go.
      One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. 
      The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. 
      Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.
      </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Welcome;
