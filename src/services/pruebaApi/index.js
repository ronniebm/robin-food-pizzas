import axios from "axios";
import { validEmail } from "../../aux/helpers";
import { validPass } from "../../aux/helpers";

const baseUrl = "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com";


export const userLogin = async ( userEmail, userPass, history ) => {
  if ( validEmail(userEmail) ) {
    if ( validPass(userPass) ) {
      await axios
        .get(`${baseUrl}/RH.json`)
        .then((response) => {
          const users = response.data.response.users;
          users.map( user => {
            if ( user.email === userEmail.toLowerCase() ) {
              if ( user.password === userPass ) {
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/listado');
              }
            };
          });
        })
    }
  }
}

export const getStores = async ( setStores ) => {
  await axios
        .get(`${baseUrl}/RH.json`)
        .then((response) => {
          setStores(response.data.response.stores);
        })
}