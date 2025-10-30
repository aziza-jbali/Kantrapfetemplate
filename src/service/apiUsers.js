import axios from "axios";
const apiUrl = "http://localhost:5011/users";// hadi el adreese mta3 el ma3el eli bach tab3thlo signal ou requet w traj3 signal eli mynajmich yd5olo el client
export async function getallclient() {
  return await axios.get(`${apiUrl}/getClients`);
}