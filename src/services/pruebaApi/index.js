import axios from "axios";

const baseUrl = "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com";

export const getUsersAndStores = async ( setUsers, setStores ) => {
    await axios
      .get(`${baseUrl}/RH.json`)
      .then((response) => {
        setUsers(response.data.response.users);
        setStores(response.data.response.stores);
      });
  };