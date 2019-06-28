// definizione selettori

var nome, cognome, colorePreferito, passwordGenerated;

nome = prompt( "Inserisci il tuo nome");

cognome = prompt( "Inserisci il tuo cognome");

colorePreferito = prompt( "Inserisci il tuo colore preferito");

passwordGenerated = nome + cognome + colorePreferito + "19";

// definizione testo su div html
document.getElementById('javagl_id').innerHTML=passwordGenerated;

document.getElementById('message').innerHTML="Hai creato un (insicurissimo) password generator!";
