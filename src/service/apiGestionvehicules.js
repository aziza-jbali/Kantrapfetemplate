import axios from "axios";//outil ymkna min ano nstakblo signal w nab3thoh kiam post man ama hadha post man mta3 el frontend
const apiUrl = "http://localhost:5011/Vehicules";// hadi el adreese mta3 el ma3el eli bach tab3thlo signal ou requet w traj3 signal eli mynajmich yd5olo el client
//get all vehicule


export async function getVehicules() {
  return await axios.get(`${apiUrl}/getVehicules`);
}

// add vehicule with image lazem ykon bl image 3ibra 3la produit  headers lazem nab3tho m3a el request bach nkol raho el data eli posti fha mahich de type string akho ou int rahi image w 7ajet o5rin string w int w bool ya3ni form data
export async function addVehiculeWithImg(formData, agenceId) {
  return await axios.post(`${apiUrl}/addVehicule/${agenceId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
// headers blach bha mttb3thech el image 
// delete vehicule
export async function deletevehiculeById(id) {
  return await axios.delete(`${apiUrl}/deleteVehicules/${id}`);
}

//VehiculeData el bach t3adha el agence ki ajouter vehicule



// update vehicule by image or no 
export const updateVehiculeWithImg = async (vehiculeData, vehiculeId) => {
  try {
    const response = await axios.put(`${apiUrl}/updateVehicules/${vehiculeId}`, vehiculeData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du véhicule:", error);
    throw error;
  }
};
// update the statut of vehicule
export async function updateVehiculeStatus(id, statusVehicule) {
  return await axios.put(`${apiUrl}/update-statusagence/${id}`, { statusVehicule });
}
// get the vehicule with details agence
export async function getVehiculesandagence() {
  return await axios.get(`${apiUrl}/getvehiculeswithagence`);
}
//router.put("/update-statutadminprincipal/:id", VehiculesController.updateStatutByAdmin);
// export async function updateVehiculeStatusbyadmin(id, statusVehiculeap) {
//   return await axios.put(`${apiUrl}/update-statutadminprincipal/${id}`, { statusVehiculeap });
// }
export async function updateVehiculeStatusbyadmin(id, statut, adminId) {
  return await axios.put(`${apiUrl}/update-statutadminprincipal/${id}`, { statut, adminId });
}
