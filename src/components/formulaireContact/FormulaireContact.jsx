import React from "react";
import Button from "../button/Button";
import classes from "./formulaireContact.module.css"
import Landing from "../landing/Landing";

function FormulaireContact() {
  return (
<div className={classes.form_contact}>
      <div className={classes.title}>
        <Landing color="#fff" subtitle="CONTACT" title="N'hesitez Pas A Nous Envoyer Votre Message" />
      </div>
      <form className={classes.feedback}>
      <div className={classes.container}>

      <div className={classes.feedback} >
      <input className={classes.container} type="text" placeholder="Votre Nom " required id="non" />
      </div>
      <div className={classes.feedback} >
      <input className={classes.container} type="text" placeholder="N Telephone " required id="telephone" />
      </div>
      </div>
      <div className={classes.container}>
      <div className={classes.feedback} > 
      <input className={classes.container} type="text" placeholder="Votre Mail " required id="email" />
      </div>
      <div className={classes.feedback} >
      <input className={classes.container} type="text" placeholder="Sujet Du Message " required id="message" />
      </div>
      </div>
      <textarea name="text" className={classes.feedback1} placeholder="Votre Message"></textarea>
      <div className={classes.button}>

          </div>

        </form>
      </div>
    
    
    
  );
}

export default FormulaireContact;
