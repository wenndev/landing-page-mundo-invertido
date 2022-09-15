import app from './app.js'
import {getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

// salvando um objeto no banco de dados do firestore

export async function subscribeToHellFireClub(subscription){ 
    const db = getFirestore(app) // pegando uma referencia pro firestore(database)
    // para uma collection(coleção) chamada hellfire-clube
    const hellfireClubCollection = collection(db,'hellfire-clube') 
    // adicionando um documento(addDoc) na collection (hellfireClubCollection), no caso o objeto(subscription) que criamos no main.js.
    const docRef = await addDoc(hellfireClubCollection, subscription) 
    // retorna o identificador que foi gerado
    return docRef.id
}
export async function getHellfireClubSubscriptions(){
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db,'hellfire-clube')
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
    const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}

  