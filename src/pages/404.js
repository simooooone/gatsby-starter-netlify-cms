import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Oops! 404 - Pagina non trovata</h1>
      <p>
        Hai appena preso una strada che non esiste. Ti posso accompagnare
        all'inizio del viaggio. Prova a tornare a <a href="/">casa</a>. Poi sei
        libero di ricominciare nel tuo viaggio.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
