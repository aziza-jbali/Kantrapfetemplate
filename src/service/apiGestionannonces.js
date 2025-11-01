import axios from "axios";//outil ymkna min ano nstakblo signal w nab3thoh kiam post man ama hadha post man mta3 el frontend
const apiUrl = "http://localhost:5011/Annonces";// hadi el adreese mta3 el ma3el eli bach tab3thlo signal ou requet w traj3 signal eli mynajmich yd5olo el client
//get all annonces
export async function gettousannonces() {
  return await axios.get(`${apiUrl}/getAllAnnonces`);
}


//add annonce by the id of annonceur
export async function addannonceWithImg(formData, annonceurId) {
  return await axios.post(`${apiUrl}//addAnnonce/${annonceurId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
// delete annonce by id 
export async function deletepub(id) {
  return await axios.delete(`${apiUrl}/deleteannonce/${id}`);
}
// update annpnce by image or no 
export const updatepubWithImg = async (pubid,pubdata) => {
  try {
    const response = await axios.put(`${apiUrl}/updateAnnonce/${pubid}`, pubdata, {
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
// get annonces with the detials of annonceur getAnnoncesOfAnnonceur
export async function getpubwithannonceur() {
  return await axios.get(`${apiUrl}/getannonceswithannonceur`);
}
export async function updateAnnonceStatusByAdmin(id, statut, adminId) {
  return await axios.put(`${apiUrl}/updateStatut/${id}`, { statut, adminId });
}

