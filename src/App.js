import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ContactCard from "./Components/ContactCard";

const contact_data = [
  {
    name: "Catherine M. Hartley",
    phone: "731-571-2685",
    address: "1735 Melville Street Arlington, TN 38002",
  },
  {
    name: "William L. Smith",
    phone: "419-636-9919",
    address: "1934 Still Street Bryan, OH 43506",
  },
  {
    name: "Steven M. Higgins",
    phone: "401-293-8028",
    address: "434 Melm Street West Warwick, RI 02893",
  },
];

function App() {
  return (
    <>
      <ContactCard />
    </>
  );
}

export default App;
