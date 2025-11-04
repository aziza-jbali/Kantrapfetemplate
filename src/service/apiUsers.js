import axios from "axios";
const apiUrl = "http://localhost:5011/users";// hadi el adreese mta3 el ma3el eli bach tab3thlo signal ou requet w traj3 signal eli mynajmich yd5olo el client
export async function getallclient() {
  return await axios.get(`${apiUrl}/getClients`);
}


// export async function ajouterannonceur() {
//   return await axios.post(`${apiUrl}/createannonceur`);
// }

// export async function ajouteragence() {
//   return await axios.post(`${apiUrl}/createagence`);
// }

// لا تنسَ تعديل دوال ajouteragence و ajouterannonceur في ملف apiUsers.js لتستقبل البيانات (body) من الواجهة: data object fi les informations mta3 el user mil body ou formulaire 
export async function ajouterannonceur(data) {
  return await axios.post(`${apiUrl}/createannonceur`, data);
}

export async function ajouteragence(data) {
  return await axios.post(`${apiUrl}/createagence`, data);
}
export async function connexion(userData) {
  return await axios.post(`${apiUrl}/login`, userData, {
    withCredentials: true,
  });
}// bach njem nsajel el token fi localstorage