
function Contact({nom, prenom, mail, tel}) {
  return (
  <div>
    <h3>{nom}</h3>
    <h3>{prenom}</h3>
    <h4>
      {mail}
      <br />
      {tel}
    </h4>
    <button>Supprimer</button>
  </div>
  );
}
export default Contact;
