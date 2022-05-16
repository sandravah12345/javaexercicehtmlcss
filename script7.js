
document.getElementById("deb").addEventListener("click", debut)

window.addEventListener("load", debut)


function debut(){
    nom= "Demolliens"
    prenom= "Sandra"
    age=30
    console.log ("Bienvenue je m'appele" + prenom + nom + age)

    prix_article1= 50
    prix_article2 = 80
    prix_article3 = prix_article1 + prix_article2

    console.log ("Le prix de l'article 1 est " + prix_article1)
    console.log ("Le prix de l'article 2 est " + prix_article2)
    console.log ("La somme des article sera" + prix_article3)

    // 1 CREEZ UN EVENEMENT SUR LE BOUTON AU CLIQUE :  ADDEVENTLISTNER
    document.getElementById("deb").addEventListener("click", ftest)

}
    // 2 QUI VA AFFICHE SUR LE CHAMPS TEXTE "ce que je veux" :  FONCTION A CODER
function ftest(){
    document.getElementById("test").value="ce que je veux"

}
