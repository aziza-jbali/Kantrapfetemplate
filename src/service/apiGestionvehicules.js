import axios from "axios";//outil ymkna min ano nstakblo signal w nab3thoh kiam post man ama hadha post man mta3 el frontend
const apiUrl = "http://localhost:5011/Vehicules";// hadi el adreese mta3 el ma3el eli bach tab3thlo signal ou requet w traj3 signal eli mynajmich yd5olo el client
//get all vehicule


export async function getVehicules() {
  return await axios.get(`${apiUrl}/getVehicules`);
}

// add vehicule
export async function addVehicule(VehiculeData) {
  return await axios.post(`${apiUrl}/addVehicule`,VehiculeData );
}

// delete vehicule
export async function deletevehiculeById(id) {
  return await axios.delete(`${apiUrl}/deleteVehicules/${id}`);
}

//VehiculeData el bach t3adha el agence ki ajouter vehicule