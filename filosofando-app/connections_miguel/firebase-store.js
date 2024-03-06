//ARQUIVO PARA ACESSAR O BANCO DE DADOS DO FIREBASE

import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, increment, getDocs} from "firebase/firestore";
import { auth, deleteEmailAndPassword } from "./firebase-auth";
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
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const uid = auth.currentUser.uid;
    const data = {
        name: name,
        username: username,
        xp: 0,
        level: 'Bronze',
        createdAt: `${day}/${month}/${year}`,
    };
    console.log(data);
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

const getDialogoFromFilosofo = async (nomeFilosofo) => {
    const docRef = doc(db, "dialogos", nomeFilosofo);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data();
    } else {
        return null;
    }
}

const aumentarXp = async (quantidade) => {
    const docRef = doc(db, "usuarios", auth.currentUser.uid);
    await updateDoc(docRef, {
        xp: increment(quantidade)
    })
}

const getQuizFromFilosofo = async (nomeFilosofo) => {
    const querySnapshot = await getDocs(collection(db, "quiz/" + nomeFilosofo + "/perguntas"));
    const perguntas = querySnapshot.docs.map(doc => doc.data());
    return perguntas;
}

const getDesafiosFromFilosofo = async (nomeFilosofo) => {
    const docRef = doc(db, "desafios", nomeFilosofo);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data();
    } else {
        return null;
    }
}

const getFilosofoFromFilosofo = async (nomeFilosofo) => {
    const docRef = doc(db, "filosofos", nomeFilosofo);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log(docSnap.data());
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
export { addUserFirestore, getPerfilFromUid, getDialogoFromFilosofo, aumentarXp, getQuizFromFilosofo, getDesafiosFromFilosofo, getFilosofoFromFilosofo}


//aaaaaaaaaaaaaaaaaaaaaaaa
//um documento para cada questao com as questões e as respostas




