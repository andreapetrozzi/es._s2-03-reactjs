import "./App.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import TVShows from "./components/TVShows";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/details/:movieID" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;



// Comandi sul terminale
// npm i bootstrap@4.6.1
// npm i react - bootstrap@1.6.5
// npm i react - router - dom


// TRACCIA: Navigazione per Neftlix React
// In questo esercizio applicherai le nuove conoscenze riguardo il react - router - dom alla tua app Netflix.

//     Crea una Route per un componente TVShows.Una semplice rotta statica, senza parametri.Es. / tv - shows
//     Aggiungi un Link alla pagina TVShows nella Navbar dell’applicazione.
//     Crea una Route per un componente MovieDetails.Dovrà permettere di ricevere un parametro id dalla URL
//     In ogni componente SingleMovie aggiungi un bottone per navigare alla sua pagina di dettaglio.
//     Dovrà inserire l’id del film nella URL corrispondente a quella che hai usato nella Route.
//     Crea il componente MovieDetails per visualizzare i dettagli e i commenti del film selezionato.Questa informazione dovrà essere ottenuta da una fetch ogni qualvolta il componente MovieDetails verrà ricaricato.

//   EXTRA
//     Cambia il comportamento della SearchBar: se l’utente è sulla pagina TVShows, il placeholder dovrà diventare: “Cerca Serie TV…”
//     Se non l’hai già fatto, migliora la navigazione aggiungendo loaders e gestione errori


// Registrati su http://www.omdbapi.com/

// Una volta fatto riceverai un’email con la tua API Key.