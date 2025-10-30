import axios from "axios";//outil ymkna min ano nstakblo signal w nab3thoh kiam post man ama hadha post man mta3 el frontend
const apiUrl = "http://localhost:5011/Reservation";// hadi el adreese mta3 el ma3el eli bach tab3thlo signal ou requet w traj3 signal eli mynajmich yd5olo el client
//get all reservation 



export async function gettousReservations() {
  return await axios.get(`${apiUrl}/getallreservation`);
}
