//ARQUIVO PARA ACESSAR O BANCO DE DADOS DO FIREBASE

import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { auth } from "./firebase-auth";
import { app } from "./firebase-app"

const db = getFirestore(app);

// //FUNCAO PARA ADICIONAR UM DOCUMENTO NA COLEÇÃO "DOGS"
// const addDogFirebase = async (dogNome, dogRaca, dogPeso) => {
//     // Add a new document with a generated id.
//     //NESSE CASO, A CHAVE DO DOCUMENTO É DEFINIDA PELO FIREBASE
//     const docRef = await addDoc(collection(db, "dogs"), {
//         nome: dogNome,
//         peso: dogPeso,
//         raca: dogRaca,
//         user: auth.currentUser.uid //Define cão como do usuario atual
//     });
// }

//FUNCAO PARA ADD USUARIO NO FIRESTORE (BANCO DE DADOS DO FIREBASE)

   

const addUserFirestore = async (userCredential, name, username) => {
    const uid = auth.currentUser.uid;
    const data = {
        name: name,
        username: username,
        xp: 0,
        level: 'Bronze',
    }
    //NESSE CASO, A CHAVE DO DOCUMENTO IGUAL AO USER ID (UID)
    console.log(data)
    return await setDoc(doc(db, "usuarios", uid), data);
}

    const getPerfilFromUid = async (uid) => {
        const docRef = doc(db, "usuarios", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    }





    // //FUNCAO PARA ADICIONAR UM DOCUMENTO NA COLEÇÃO "DOGS"
// const addDogFirebase = async (dogNome, dogRaca, dogPeso) => {
//     // Add a new document with a generated id.
//     //NESSE CASO, A CHAVE DO DOCUMENTO É DEFINIDA PELO FIREBASE
//     const docRef = await addDoc(collection(db, "dogs"), {
//         nome: dogNome,
//         peso: dogPeso,
//         raca: dogRaca,
//         user: auth.currentUser.uid //Define cão como do usuario atual
//     });
// }

//EXPORTA AS FUNCOES
export {addUserFirestore, getPerfilFromUid}


//aaaaaaaaaaaaaaaaaaaaaaaa
//um documento para cada questao com as questões e as respostas




