var mess = "Prva linija koda  u TS";
//const lie :boolean = false, truth :boolean = true;
var novi = "jeste";
var fakeBroj = '5';
//var boja = document.getElementsByTagName('body').innerText = "ffssdgsffvf";
function bojica(){
    var dohvatanje = document.querySelector("#telo");
    dohvatanje.style.backgroundColor = "black";
    dohvatanje.style.borderRadius = '10px';
    dohvatanje.style.color = "white";
    var dug= document.getElementById('dug');
    dug.style.backgroundColor="#1a73e8";
    dug.style.border="1px solid #1a73e8";
    dug.style.color="white";
    dug.style.fontWeight="bold";
    console.log(dohvatanje);
    //document.getElementsById('telo').style.backgroundColor = "red";
} setTimeout(bojica,3000);
document.getElementById('name').addEventListener('blur', function(){
    var username=this;
    username.style.border='1px solid red';
    username.style.shadow='red';
    username.style.padding='4px';
    var userNameValue= username.value.trim();
    var encryptUsername=CryptoJS.AES.encrypt(userNameValue, userNameValue).toString();
    console.log(encryptUsername);
    document.getElementById('err').innerText = `${encryptUsername}`;
});

console.log("Hello");
var praviBroj = 5;
var nekaVrednost = 78;
var naslednaVrednost = "a";

naslednaVrednost = nekaVrednost;
console.log(naslednaVrednost);
console.log(fakeBroj == praviBroj);
var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
//alert(encrypted.toString());
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//alert(encrypted.toString());

/*
objasnjenje implemetacije enkripcije u client side JS -->https://forums.asp.net/t/2146066.aspx?Is+there+any+encrypt+and+decrypt+mechanism+in+Client+side
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
alert(encrypted.toString());
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
alert(encrypted.toString());*/