

// import React, { useState, useEffect } from "react";
// import {addVehiculeWithImg} from "../../service/apiGestionvehicules"

// export default function AddCarForm(
//  ) {
 
//   const [formData, setFormData] = useState({
//     nom: "",
//     marque: "",
//     prixParJour: "",
//     année: "",
//     modèle: "",
//     carburant: "",
//     kilometrage: "",
//     sièges: "",
//     catégorie: "",
//     transmission: "",
//     description: "",
//     image: null,
//     rampe: false,
//     élévateur: false,
//     commandeManuelle: false,
//     guide: false,
//     espaceFauteuil: "",
//     support: "",
//     avecChauffeur: false,
//     statusVehicule: "diponible",
//   });

//   const agenceId = "6718f7b49389aa2b2d123456"; // ID الوكالة، ممكن تجيبها من login

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, image: files[0] });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleRemoveImage = () => {
//     setFormData((prev) => ({ ...prev, image: null }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     try {
//       const response = await addVehiculeWithImg(data, agenceId);
//       console.log("✅ Véhicule ajouté:", response.data);
//       alert("🚗 تمت إضافة السيارة بنجاح!");
//       // ممكن تمسح الفورم بعد الإرسال إذا تحب
//     } catch (error) {
//       console.error("❌ خطأ أثناء إضافة السيارة:", error);
//       alert("حدث خطأ أثناء الإضافة.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Ajouter une voiture adaptée</h2>
//       <form className="car-form">
//         {/* Nom */}
//         <div className="form-group">
//           <label>Nom de la voiture</label>
//           <input
//             type="text"
//             name="nom"
//             placeholder="Ex: Renault Kangoo"
//             value={formData.nom}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Marque */}
//         <div className="form-group">
//           <label>Marque</label>
//           <input
//             type="text"
//             name="marque"
//             placeholder="Ex: Renault, Peugeot"
//             value={formData.marque}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Prix */}
//         <div className="form-group">
//           <label>Prix (Dinar)</label>
//           <input
//             type="number"
//             name="prix"
//             placeholder="Ex: 120"
//             value={formData.prix}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Année */}
//         <div className="form-group">
//           <label>Année</label>
//           <input
//             type="number"
//             name="année"
//             placeholder="Ex: 2022"
//             value={formData.année}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Modèle */}
//         <div className="form-group">
//           <label>Modèle</label>
//           <input
//             type="text"
//             name="modèle"
//             placeholder="Ex: Kangoo Maxi"
//             value={formData.modèle}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Carburant */}
//         <div className="form-group">
//           <label>Carburant</label>
//           <select
//             name="carburant"
//             value={formData.carburant}
//             onChange={handleChange}
//           >
//             <option value="">Sélectionner</option>
//             <option value="Essence">Essence</option>
//             <option value="Diesel">Diesel</option>
//             <option value="Électrique">Électrique</option>
//             <option value="Hybride">Hybride</option>
//           </select>
//         </div>

//         {/* Kilométrage */}
//         <div className="form-group">
//           <label>Kilométrage (km)</label>
//           <input
//             type="number"
//             name="kilométrage"
//             placeholder="Ex: 50000"
//             value={formData.kilométrage}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Sièges */}
//         <div className="form-group">
//           <label>Nombre de sièges</label>
//           <input
//             type="number"
//             name="sièges"
//             placeholder="Ex: 4"
//             value={formData.sièges}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Catégorie */}
//         <div className="form-group">
//           <label>Catégorie</label>
//           <textarea
//             name="catégorie"
//             rows="2"
//             placeholder="Ex: Citadine, SUV, Monospace"
//             value={formData.catégorie}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Description */}
//         <div className="form-group description">
//           <label>Description</label>
//           <textarea
//             name="description"
//             rows="4"
//             placeholder="Ex: Voiture adaptée avec rampe et espace pour fauteuil."
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Transmission */}
//         <div className="form-group transmission">
//           <label>Transmission</label>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="transmission"
//                 value="Automatique"
//                 checked={formData.transmission === "Automatique"}
//                 onChange={handleChange}
//               />
//               Automatique
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="transmission"
//                 value="Manuelle"
//                 checked={formData.transmission === "Manuelle"}
//                 onChange={handleChange}
//               />
//               Manuelle
//             </label>
//           </div>
//         </div>

//         {/* Checkboxes */}
//         <div className="form-group">
//           <label>
//             <input
//               type="checkbox"
//               name="commandeManuelle"
//               checked={formData.commandeManuelle}
//               onChange={handleChange}
//             />
//             Commande manuelle
//           </label>
//            <label className="mt-3">
//             <input
//               type="checkbox"
//               name="status"
//               checked={formData.disponible}
//               onChange={handleChange}
//             />
//             disponible
//           </label>
//           <label className="mt-2">
//             <input
//               type="checkbox"
//               name="guide"
//               checked={formData.guide}
//               onChange={handleChange}
//             />
//             guide
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="rampe"
//               checked={formData.rampe}
//               onChange={handleChange}
//             />
//             Rampe
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="élévateur"
//               checked={formData.élévateur}
//               onChange={handleChange}
//             />
//             Élévateur
//           </label>
//         </div>

//         {/* Espace fauteuil */}
//         <div className="form-group">
//           <label>Espace pour fauteuil</label>
//           <input
//             type="text"
//             name="espaceFauteuil"
//             placeholder="Ex: 120x80 cm"
//             value={formData.espaceFauteuil}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Support */}
//         <div className="form-group">
//           <label>Support / Fixations</label>
//           <input
//             type="text"
//             name="support"
//             placeholder="Ex: Ceintures spéciales, fixation au sol"
//             value={formData.support}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Image Upload */}
//         <div className="form-group image-upload">
//           <label htmlFor="image">Télécharger une image</label>
//           <input
//             type="file"
//             name="image"
//             id="image"
//             accept="image/*"
//             onChange={handleChange}
//           />
//           {formData.image ? (
//             <div className="image-preview-wrapper">
//               <img
//                 src={formData.image}
//                 alt="Preview"
//                 className="image-preview"
//               />
//               <button
//                 type="button"
//                 className="remove-image-btn"
//                 onClick={handleRemoveImage}
//               >
//                 Supprimer
//               </button>
//             </div>
//           ) : (
//             <p>Glisser-déposer ou cliquer pour télécharger</p>
//           )}
//         </div>

//         <button type="submit" className="submit-btn">
//           Enregistrer la voiture
//         </button>
//       </form>

//       {/* CSS */}
//       <style>{`
//          body {
//           background: linear-gradient(135deg, #1e293b, #0f172a);
//            font-family: Arial, sans-serif;
//           color: white;
//           margin: 0;
//           padding: 20px;
//          }
//         .form-container {
//           max-width: 1000px;
//           margin: auto;
//           background: #111827;
//           padding: 30px;
//           border-radius: 12px;
//           box-shadow: 0 6px 15px rgba(0,0,0,0.6);
//         }
//         h2 {
//           text-align: center;
//           margin-bottom: 20px;
//           color: #C2A68C;
//         }
//         .car-form {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }
//         .form-group {
//           display: flex;
//           flex-direction: column;
//         }
//         .form-group label {
//           margin-bottom: 6px;
//           font-weight: bold;
//           color: #e5e7eb;
//         }
//         .form-container input,
//         .form-container select,
//         .form-container textarea {
//           padding: 10px;
//           border-radius: 8px;
//           border: 1px solid #374151;
//           background: #1f2937 ;
//           color: white;
//           font-size: 14px;
//         }
//         textarea {
//           resize: none;
//         }
//         .transmission .radio-group {
//           display: flex;
//           gap: 20px;
//           margin-top: 8px;
//         }
//         .radio-group label {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .image-upload {
//           grid-column: span 2;
//           border: 2px dashed #6b7280;
//           border-radius: 12px;
//           padding: 20px;
//           text-align: center;
//           cursor: pointer;
//           position: relative;
//           background-color: #1f2937;
//           min-height: 200px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           overflow: hidden;
//         }
//         .image-upload input {
//           position: absolute;
//           inset: 0;
//           opacity: 0;
//           cursor: pointer;
//         }
//         .image-preview-wrapper {
//           position: relative;
//           display: inline-block;
//           width: 100%;
//           height: 100%;
//         }
//         .image-preview {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 12px;
//         }
//         .remove-image-btn {
//           position: absolute;
//           top: 5px;
//           right: 5px;
//           background: rgba(255, 0, 0, 0.7);
//           border: none;
//           color: white;
//           padding: 4px 8px;
//           cursor: pointer;
//           border-radius: 6px;
//           font-size: 12px;
//         }
//         .submit-btn {
//           grid-column: span 2;
//           padding: 12px;
//           border: none;
//           border-radius: 8px;
//           background: #C2A68C;
//           color: white;
//           font-size: 16px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: background 0.3s;
//         }
//         .submit-btn:hover {
//           background: #D2C1B6;
//         }
//       `}</style>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { addVehiculeWithImg } from "../../service/apiGestionvehicules";

// export default function AddCarForm() {
//   const [formData, setFormData] = useState({
//     nom: "",
//     marque: "",
//     prixParJour: "",
//     année: "",
//     modèle: "",
//     carburant: "",
//     kilometrage: "",
//     sièges: "",
//     catégorie: "",
//     transmission: "",
//     description: "",
//     image: null, // رابط المعاينة
//     file: null,  // الملف الفعلي للإرسال
//     rampe: false,
//     élévateur: false,
//     commandeManuelle: false,
//     guide: false,
//     espaceFauteuil: "",
//     support: "",
//     avecChauffeur: false,
//     statusVehicule: "diponible",
//   });

//   const agenceId = "68f6aa0e912121c2e413dd49"; // ID الوكالة

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "file") {
//       setFormData({
//         ...formData,
//         image: URL.createObjectURL(files[0]), // عرض الصورة فوراً
//         file: files[0],                        // الملف الفعلي للإرسال
//       });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleRemoveImage = () => {
//     setFormData((prev) => ({ ...prev, image: null, file: null }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     for (const key in formData) {
//       if (key === "file" && formData.file) {
//         data.append("image", formData.file);
//       } else if (key !== "image" && key !== "file") {
//         data.append(key, formData[key]);
//       }
//     }

//     try {
//       const response = await addVehiculeWithImg(data, agenceId);
//       console.log("✅ Véhicule ajouté:", response.data);
//       alert("🚗 تمت إضافة السيارة بنجاح!");
//       setFormData({
//         nom: "",
//         marque: "",
//         prixParJour: "",
//         année: "",
//         modèle: "",
//         carburant: "",
//         kilometrage: "",
//         sièges: "",
//         catégorie: "",
//         transmission: "",
//         description: "",
//         image: null,
//         file: null,
//         rampe: false,
//         élévateur: false,
//         commandeManuelle: false,
//         guide: false,
//         espaceFauteuil: "",
//         support: "",
//         avecChauffeur: false,
//         statusVehicule: "diponible",
//       });
//     } catch (error) {
//       console.error("❌ خطأ أثناء إضافة السيارة:", error);
//       alert("حدث خطأ أثناء الإضافة.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Ajouter une voiture adaptée</h2>
//       <form className="car-form" onSubmit={handleSubmit}>

//         {/* Nom */}
//         <div className="form-group">
//           <label>Nom de la voiture</label>
//           <input
//             type="text"
//             name="nom"
//             value={formData.nom}
//             onChange={handleChange}
//             placeholder="Ex: Renault Kangoo"
//           />
//         </div>

//         {/* Marque */}
//         <div className="form-group">
//           <label>Marque</label>
//           <input
//             type="text"
//             name="marque"
//             value={formData.marque}
//             onChange={handleChange}
//             placeholder="Ex: Renault, Peugeot"
//           />
//         </div>

//         {/* Prix */}
//         <div className="form-group">
//           <label>Prix par jour (Dinar)</label>
//           <input
//             type="number"
//             name="prixParJour"
//             value={formData.prixParJour}
//             onChange={handleChange}
//             placeholder="Ex: 120"
//           />
//         </div>

//         {/* Année */}
//         <div className="form-group">
//           <label>Année</label>
//           <input
//             type="number"
//             name="année"
//             value={formData.année}
//             onChange={handleChange}
//             placeholder="Ex: 2022"
//           />
//         </div>

//         {/* Modèle */}
//         <div className="form-group">
//           <label>Modèle</label>
//           <input
//             type="text"
//             name="modèle"
//             value={formData.modèle}
//             onChange={handleChange}
//             placeholder="Ex: Kangoo Maxi"
//           />
//         </div>

//         {/* Carburant */}
//         <div className="form-group">
//           <label>Carburant</label>
//           <select
//             name="carburant"
//             value={formData.carburant}
//             onChange={handleChange}
//           >
//             <option value="">Sélectionner</option>
//             <option value="Essence">Essence</option>
//             <option value="Diesel">Diesel</option>
//             <option value="Électrique">Électrique</option>
//             <option value="Hybride">Hybride</option>
//           </select>
//         </div>

//         {/* Kilométrage */}
//         <div className="form-group">
//            <label>Kilométrage (km)</label>
//           <input
//             type="number"
//              name="kilométrage"
//              placeholder="Ex: 50000"
//              value={formData.kilométrage}
//              onChange={handleChange}
//            />
//          </div>

//         {/* Sièges */}
//         <div className="form-group">
//           <label>Nombre de sièges</label>
//           <input
//             type="number"
//             name="sièges"
//             value={formData.sièges}
//             onChange={handleChange}
//             placeholder="Ex: 4"
//           />
//         </div>

//         {/* Catégorie */}
//         <div className="form-group">
//           <label>Catégorie</label>
//           <textarea
//             name="catégorie"
//             value={formData.catégorie}
//             onChange={handleChange}
//             rows="2"
//             placeholder="Ex: Citadine, SUV, Monospace"
//           />
//         </div>

//         {/* Description */}
//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             placeholder="Ex: Voiture adaptée avec rampe et espace pour fauteuil."
//           />
//         </div>

//         {/* Transmission */}
//         <div className="form-group transmission">
//           <label>Transmission</label>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="transmission"
//                 value="Automatique"
//                 checked={formData.transmission === "Automatique"}
//                 onChange={handleChange}
//               />
//               Automatique
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="transmission"
//                 value="Manuelle"
//                 checked={formData.transmission === "Manuelle"}
//                 onChange={handleChange}
//               />
//               Manuelle
//             </label>
//           </div>
//         </div>

//         {/* Checkboxes */}
//         <div className="form-group">
//           <label>
//             <input
//               type="checkbox"
//               name="commandeManuelle"
//               checked={formData.commandeManuelle}
//               onChange={handleChange}
//             />
//             Commande manuelle
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="guide"
//               checked={formData.guide}
//               onChange={handleChange}
//             />
//             Guide
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="rampe"
//               checked={formData.rampe}
//               onChange={handleChange}
//             />
//             Rampe
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="élévateur"
//               checked={formData.élévateur}
//               onChange={handleChange}
//             />
//             Élévateur
//           </label>
//         </div>

//         {/* Espace fauteuil */}
//         <div className="form-group">
//           <label>Espace pour fauteuil</label>
//           <input
//             type="text"
//             name="espaceFauteuil"
//             value={formData.espaceFauteuil}
//             onChange={handleChange}
//             placeholder="Ex: 120x80 cm"
//           />
//         </div>

//         {/* Support */}
//         <div className="form-group">
//           <label>Support / Fixations</label>
//           <input
//             type="text"
//             name="support"
//             value={formData.support}
//             onChange={handleChange}
//             placeholder="Ex: Ceintures spéciales, fixation au sol"
//           />
//         </div>

//         {/* Image Upload */}
//         <div className="form-group image-upload">
//           <label htmlFor="image">Télécharger une image</label>
//           <input
//             type="file"
//             name="image"
//             id="image"
//             accept="image/*"
//             onChange={handleChange}
//           />
//           {formData.image ? (
//             <div className="image-preview-wrapper">
//               <img
//                 src={formData.image}
//                 alt="Preview"
//                 className="image-preview"
//               />
//               <button
//                 type="button"
//                 className="remove-image-btn"
//                 onClick={handleRemoveImage}
//               >
//                 Supprimer
//               </button>
//             </div>
//           ) : (
//             <p>Glisser-déposer ou cliquer pour télécharger</p>
//           )}
//         </div>

//         <button type="submit" className="submit-btn">
//           Enregistrer la voiture
//         </button>
//       </form>

//       {/* CSS */}
//       <style>{`
//         body { background: linear-gradient(135deg, #1e293b, #0f172a); font-family: Arial; color: white; margin: 0; padding: 20px; }
//         .form-container { max-width: 1000px; margin: auto; background: #111827; padding: 30px; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.6); }
//         h2 { text-align: center; margin-bottom: 20px; color: #C2A68C; }
//         .car-form { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
//         .form-group { display: flex; flex-direction: column; }
//         .form-group label { margin-bottom: 6px; font-weight: bold; color: #e5e7eb; }
//         .form-container input, .form-container select, .form-container textarea { padding: 10px; border-radius: 8px; border: 1px solid #374151; background: #1f2937 ; color: white; font-size: 14px; }
//         textarea { resize: none; }
//         .transmission .radio-group { display: flex; gap: 20px; margin-top: 8px; }
//         .radio-group label { display: flex; align-items: center; gap: 6px; }
//         .image-upload { grid-column: span 2; border: 2px dashed #6b7280; border-radius: 12px; padding: 20px; text-align: center; cursor: pointer; position: relative; background-color: #1f2937; min-height: 200px; display: flex; justify-content: center; align-items: center; overflow: hidden; }
//         .image-upload input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
//         .image-preview-wrapper { position: relative; display: inline-block; width: 100%; height: 100%; }
//         .image-preview { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
//         .remove-image-btn { position: absolute; top: 5px; right: 5px; background: rgba(255,0,0,0.7); border: none; color: white; padding: 4px 8px; cursor: pointer; border-radius: 6px; font-size: 12px; }
//         .submit-btn { grid-column: span 2; padding: 12px; border: none; border-radius: 8px; background: #C2A68C; color: white; font-size: 16px; font-weight: bold; cursor: pointer; transition: background 0.3s; }
//         .submit-btn:hover { background: #D2C1B6; }
//       `}</style>
//     </div>
//   );
// }






























































import React, { useEffect, useState } from "react";
import { addVehiculeWithImg } from "../../service/apiGestionvehicules";

export default function AddCarForm() {
  const [formData, setFormData] = useState({
    nom: "",
    marque: "",
    prixParJour: "",
    annee: "",
    modele: "",
    carburant: "",
    kilometrage: "",
    sieges: "",
    categorie: "",
    transmission: "",
    description: "",
    image: null, // رابط المعاينة
    file: null,  // الملف الفعلي للإرسال
    rampe: false,
    elevateur: false,
    commandeManuelle: false,
    guide: false,
    espaceFauteuil: "",
    support: "",
    avecChauffeur: false,
    statusVehicule: "disponible",
  });

  //const agenceId = "68f6aa0e912121c2e413dd49"; // ID الوكالة
const token = localStorage.getItem("token");
  console.log(token);
  let agenceId = null;
  if (token) {
    const payloadBase64 = token.split(".")[1]; // الجزء الأوسط
    const decoded = JSON.parse(atob(payloadBase64));
    console.log(decoded); // { id: "69038c6d461e87058cc89352", role: "annonceur", ... }
    agenceId = decoded.id;
    console.log("🆔 ID de l'utilisateur :", agenceId);
  } else {
    console.log("⚠️ Aucun jeton trouvé");
  }
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      if (formData.image) URL.revokeObjectURL(formData.image);
      setFormData({
        ...formData,
        image: URL.createObjectURL(files[0]),
        file: files[0],
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    if (formData.image) URL.revokeObjectURL(formData.image);
    setFormData((prev) => ({ ...prev, image: null, file: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق من الحقول المطلوبة
    if (!formData.nom || !formData.marque || !formData.prixParJour) {
      alert("الرجاء ملء جميع الحقول المطلوبة!");
      return;
    }

    const data = new FormData();

    const payload = {
      ...formData,
      rampe: formData.rampe,
      elevateur: formData.elevateur,
      commandeManuelle: formData.commandeManuelle,
      guide: formData.guide,
      avecChauffeur: formData.avecChauffeur,
      prixParJour: Number(formData.prixParJour),
      annee: Number(formData.annee),
      kilometrage: Number(formData.kilometrage),
      sieges: Number(formData.sieges),
    };

    for (const key in payload) {
      if (key === "file" && formData.file) {
        data.append("image", formData.file);
      } else if (key !== "image" && key !== "file") {
        data.append(key, payload[key]);
      }
    }

    try {
      const response = await addVehiculeWithImg(data, agenceId);
      console.log("✅ Véhicule ajouté:", response.data);
      alert("🚗 تمت إضافة السيارة بنجاح!");
      setFormData({
        nom: "",
        marque: "",
        prixParJour: "",
        annee: "",
        modele: "",
        carburant: "",
        kilometrage: "",
        sieges: "",
        categorie: "",
        transmission: "",
        description: "",
        image: null,
        file: null,
        rampe: false,
        elevateur: false,
        commandeManuelle: false,
        guide: false,
        espaceFauteuil: "",
        support: "",
        avecChauffeur: false,
        statusVehicule: "disponible",
      });
    } catch (error) {
      console.error("❌ خطأ أثناء إضافة السيارة:", error);
      alert("حدث خطأ أثناء الإضافة.");
    }
  };
  // ✅ Fonction retour à la page précédente
  const handleGoBack = () => {
    window.history.back();
  };

  // ✅ Gérer la touche Échap pour retour automatique
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleGoBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="form-container">
        {/* ✅ Bouton X pour retour */}
      <button className="close-btn" onClick={handleGoBack}>
        🗙
      </button>
      <h2 style={{color:"#6D94C5"}}>Ajouter une voiture adaptée</h2>
      <form className="car-form" onSubmit={handleSubmit}>

        {/* Nom */}
        <div className="form-group">
          <label>Nom de la voiture *</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Ex: Renault Kangoo"/>
        </div>

        {/* Marque */}
        <div className="form-group">
          <label>Marque *</label>
          <input type="text" name="marque" value={formData.marque} onChange={handleChange} placeholder="Ex: Renault, Peugeot"/>
        </div>

        {/* Prix */}
        <div className="form-group">
          <label>Prix par jour (Dinar) *</label>
          <input type="number" name="prixParJour" value={formData.prixParJour} onChange={handleChange} placeholder="Ex: 120"/>
        </div>

        {/* Année */}
        <div className="form-group">
          <label>Année</label>
          <input type="number" name="annee" value={formData.annee} onChange={handleChange} placeholder="Ex: 2022"/>
        </div>

        {/* Modèle */}
        <div className="form-group">
          <label>Modèle</label>
          <input type="text" name="modele" value={formData.modele} onChange={handleChange} placeholder="Ex: Kangoo Maxi"/>
        </div>

        {/* Carburant */}
        <div className="form-group">
          <label>Carburant</label>
          <select name="carburant" value={formData.carburant} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Électrique">Électrique</option>
            <option value="Hybride">Hybride</option>
          </select>
        </div>

        {/* Kilométrage */}
        <div className="form-group">
          <label>Kilométrage (km)</label>
          <input type="number" name="kilometrage" value={formData.kilometrage} onChange={handleChange} placeholder="Ex: 50000"/>
        </div>

        {/* Sièges */}
        <div className="form-group">
          <label>Nombre de sièges</label>
          <input type="number" name="sieges" value={formData.sieges} onChange={handleChange} placeholder="Ex: 4"/>
        </div>

        {/* Catégorie */}
        <div className="form-group">
          <label>Catégorie</label>
          <textarea name="categorie" value={formData.categorie} onChange={handleChange} rows="2" placeholder="Ex: Citadine, SUV, Monospace"/>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" placeholder="Ex: Voiture adaptée avec rampe et espace pour fauteuil."/>
        </div>

        {/* Transmission */}
        <div className="form-group transmission">
          <label>Transmission</label>
          <div className="radio-group">
            <label><input type="radio" name="transmission" value="Automatique" checked={formData.transmission==="Automatique"} onChange={handleChange}/> Automatique</label>
            <label><input type="radio" name="transmission" value="Manuelle" checked={formData.transmission==="Manuelle"} onChange={handleChange}/> Manuelle</label>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="form-group checkboxes">
          <label><input type="checkbox" name="commandeManuelle" checked={formData.commandeManuelle} onChange={handleChange}/> Commande manuelle</label>
          <label><input type="checkbox" name="guide" checked={formData.guide} onChange={handleChange}/> Guide</label>
          <label><input type="checkbox" name="rampe" checked={formData.rampe} onChange={handleChange}/> Rampe</label>
          <label><input type="checkbox" name="elevateur" checked={formData.elevateur} onChange={handleChange}/> Élévateur</label>
          <label><input type="checkbox" name="avecChauffeur" checked={formData.avecChauffeur} onChange={handleChange}/> Avec Chauffeur</label>
        </div>

        {/* Espace fauteuil */}
        <div className="form-group">
          <label>Espace pour fauteuil</label>
          <input type="text" name="espaceFauteuil" value={formData.espaceFauteuil} onChange={handleChange} placeholder="Ex: 120x80 cm"/>
        </div>

        {/* Support */}
        <div className="form-group">
          <label>Support / Fixations</label>
          <input type="text" name="support" value={formData.support} onChange={handleChange} placeholder="Ex: Ceintures spéciales, fixation au sol"/>
        </div>

        {/* Image Upload */}
        <div className="form-group image-upload">
          <label htmlFor="image">Télécharger une image</label>
          <input type="file" name="image" id="image" accept="image/*" onChange={handleChange}/>
          {formData.image ? (
            <div className="image-preview-wrapper">
              <img src={formData.image} alt="Preview" className="image-preview"/>
              <button type="button" className="remove-image-btn" onClick={handleRemoveImage}>Supprimer</button>
            </div>
          ) : (
            <p>Glisser-déposer ou cliquer pour télécharger</p>
          )}
        </div>

        <button type="submit" className="submit-btn">Enregistrer la voiture</button>
      </form>
{/* linear-gradient(135deg,#1e293b,#0f172a) */}
      {/* CSS كامل */}
      <style>{`
        body {background: linear-gradient(135deg, #d6e2f5ff, #f9fcff, #d7e9ff); font-family: Arial, sans-serif; color: white; margin: 0; padding: 20px; }
        .form-container { max-width: 1000px; margin:auto; background:#111827; padding:30px; border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.6);}
        h2 { text-align:center; margin-bottom:20px; color:#C2A68C; }
        .car-form { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .form-group { display:flex; flex-direction:column; }
        .form-group label { margin-bottom:6px; font-weight:bold; color:#e5e7eb; }
        .form-container input,.form-container select,.form-container textarea { padding:10px; border-radius:8px; border:1px solid #374151; background:#1f2937; color:white; font-size:14px; }
        textarea { resize:none; }
        .transmission .radio-group { display:flex; gap:20px; margin-top:8px; }
        .radio-group label { display:flex; align-items:center; gap:6px; }
        .checkboxes label { display:block; margin-top:5px; }
        .image-upload { grid-column:span 2; border:2px dashed #6b7280; border-radius:12px; padding:20px; text-align:center; cursor:pointer; position:relative; background-color:#1f2937; min-height:200px; display:flex; justify-content:center; align-items:center; overflow:hidden; }
        .image-upload input { position:absolute; inset:0; opacity:0; cursor:pointer; }
        .image-preview-wrapper { position:relative; display:inline-block; width:100%; height:100%; }
        .image-preview { width:100%; height:100%; object-fit:cover; border-radius:12px; }
        .remove-image-btn { position:absolute; top:5px; right:5px; background:rgba(255,0,0,0.7); border:none; color:white; padding:4px 8px; cursor:pointer; border-radius:6px; font-size:12px; }
        .submit-btn { grid-column:span 2; padding:12px; border:none; border-radius:8px; background:#6D94C5; color:white; font-size:16px; font-weight:bold; cursor:pointer; transition:background 0.3s; }
        .submit-btn:hover { background:#000B58; }
      `}</style>
    </div>
  );
}


