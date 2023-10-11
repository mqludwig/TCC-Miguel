//ARQUIVO PARA ACESSAR O BANCO DE DADOS DO FIREBASE

import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth } from "./firebase-auth";
import { app } from "./firebase-app"

const db = getFirestore(app);

//FUNCAO PARA ADICIONAR UM DOCUMENTO NA COLEÇÃO "DOGS"
const addDogFirebase = async (dogNome, dogRaca, dogPeso) => {
    // Add a new document with a generated id.
    //NESSE CASO, A CHAVE DO DOCUMENTO É DEFINIDA PELO FIREBASE
    const docRef = await addDoc(collection(db, "dogs"), {
        nome: dogNome,
        peso: dogPeso,
        raca: dogRaca,
        user: auth.currentUser.uid //Define cão como do usuario atual
    });
}

//FUNCAO PARA ADD USUARIO NO FIRESTORE (BANCO DE DADOS DO FIREBASE)
const addUserFirestore = async (userCredential, nome, cpf, telefone, dataNascimento ) => {
    const uid = auth.currentUser.uid;
    const data = {
        name : nome,
        cpf: cpf,
        phone: telefone,
        birth: dataNascimento
    }
    //NESSE CASO, A CHAVE DO DOCUMENTO IGUAL AO USER ID (UID)
    await setDoc(doc(db, "users", uid), data);
}

//EXPORTA AS FUNCOES
export {addDogFirebase, addUserFirestore}