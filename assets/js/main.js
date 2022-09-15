import app from "./firebase/app.js"
import {getHellfireClubSubscriptions, subscribeToHellFireClub} from './firebase/hell-fire-club.js'

console.log(app)
/* Integrando com o FireBase */
const txtName = document.querySelector('#txtName');
const txtEmail = document.querySelector('#txtEmail');
const txtLevel = document.querySelector('#txtLevel');
const txtCharacter = document.querySelector('#txtCharacter');

const subscriptionsList = document.querySelector('#subscriptions');

const btnSubscribe = document.querySelector('#btnSubscribe');
/* quando o botao for clickado, vai executar um objeto subscription que pega os valores das const txt, essa consts pega os valores dos inputs pelo ID no html para manipula-lós */
btnSubscribe.addEventListener('click',async() => {
    const subscription = {
        name: txtName.value,
        email:txtEmail.value,
        level:txtLevel.value,
        character:txtCharacter.value
    };
    
    //Chamando a função(subscribeToHellFireClub) para se inscrever no hellFireClub
    const subscriptionId = await subscribeToHellFireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    // apagar inscrição feita na tela no formulario
        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''
        alert (`Inscrito com sucesso: ${subscriptionId}`)
});

async function loadData(){
    const subscriptions = await getHellfireClubSubscriptions()
    subscriptionsList.innerHTML = subscriptions.map(sub => `
    <li>
        ${sub.name}
    </li>
    `)
    console.log(subscriptions)
}
loadData()