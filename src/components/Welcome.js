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
    <Card bg="light" text="dark">
      <Card.Header>Quotes</Card.Header>
      <Card.Body style={{ overflowY: "auto", height: "250px" }}>
        {quotes &&
          quotes.map((quote, id) => (
            <blockquote className="blockquote mb-0" key={id}>
              <p>{quote.text}</p>
              <footer className="blockquote-footer">{quote.author}</footer>
            </blockquote>
          ))}
      </Card.Body>
    </Card>
  );
};

export default Welcome;
