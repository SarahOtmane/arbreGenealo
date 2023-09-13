import app from "./init.js";

import { getDatabase, ref, child, get } from "firebase/database";

const readData = () =>{
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `animaux/${animauxId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
}

export default readData;