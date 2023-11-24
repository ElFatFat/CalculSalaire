var Calculateur = /** @class */ (function () {
    function Calculateur() {
        this.salaireHoraireBrut = 0;
        this.salaireHoraireNet = 0;
        this.salaireMensuelBrut = 0;
        this.salaireMensuelNet = 0;
        this.salaireAnnuelBrut = 0;
        this.salaireAnnuelNet = 0;
        this.nombreMoisPrimeConventionnelle = 12;
        this.salaireMensuelNetImpots = 0;
        this.salaireAnnuelNetImpots = 0;
        this.nombreHeuresMensuelles = 151.67;
        this.pourcentageTempsPartiel = 100;
        this.pourcentageChargesSociales = 22;
        this.pourcentagePrelevementSource = 0;
    }
    // **********************
    // Récupère tous les éléments HTML nécessaires et les assigne aux propriétés de classe.
    // **********************
    Calculateur.prototype.getAllHTMLElements = function () {
        this.elemSalHorBrut = document.getElementById("elemSalHorBrut");
        this.elemSalHorNet = document.getElementById("elemSalHorNet");
        this.elemSalMenBrut = document.getElementById("elemSalMenBrut");
        this.elemSalMenNet = document.getElementById("elemSalMenNet");
        this.elemSalAnnBrut = document.getElementById("elemSalAnnBrut");
        this.elemSalAnnNet = document.getElementById("elemSalAnnNet");
        this.elemStatut = document.getElementById("elemStatut");
        this.elemTempsTravail = document.getElementById("elemTempsTrav");
        this.elemPrimeConv = document.getElementById("elemPrimeConv");
        this.elemTauxPrel = document.getElementById("elemTauxPrel");
        this.elemMenNetImpots = document.getElementById("elemMenNetImpots");
        this.elemAnnNetImpots = document.getElementById("elemAnnNetImpots");
        this.elemTauxStatOutput = document.getElementById("elemTauxStatOutput");
        this.elemTempsTravOutput = document.getElementById("elemTempsTravOutput");
        this.elemPrimeConvOutput = document.getElementById("elemPrimeConvOutput");
        this.elemTauxPrelOutput = document.getElementById("elemTauxPrelOutput");
    };
    // **********************
    // Calcul le salaire horaire net à partir du salaire horaire brut.
    // **********************
    Calculateur.prototype.calculSalaireHoraireNet = function () {
        this.salaireHoraireNet = this.salaireHoraireBrut * (1 - this.pourcentageChargesSociales / 100);
    };
    // **********************
    // Calcul le salaire mensuel brut à partir du salaire horaire brut.
    // **********************
    Calculateur.prototype.calculSalaireMensuelBrut = function () {
        this.salaireMensuelBrut = this.salaireHoraireBrut * this.nombreHeuresMensuelles * (this.pourcentageTempsPartiel / 100);
    };
    // **********************
    // Calcul le salaire mensuel net à partir du salaire mensuel brut.
    // **********************
    Calculateur.prototype.calculSalaireMensuelNet = function () {
        this.salaireMensuelNet = this.salaireMensuelBrut * (1 - this.pourcentageChargesSociales / 100);
    };
    // **********************
    // Calcul le salaire annuel brut à partir du salaire mensuel brut.
    // **********************
    Calculateur.prototype.calculSalaireAnnuelBrut = function () {
        this.salaireAnnuelBrut = this.salaireMensuelBrut * this.nombreMoisPrimeConventionnelle;
    };
    // **********************
    // Calcul le salaire annuel net à partir du salaire annuel brut.
    // **********************
    Calculateur.prototype.calculSalaireAnnuelNet = function () {
        this.salaireAnnuelNet = this.salaireAnnuelBrut * (1 - this.pourcentageChargesSociales / 100);
    };
    // **********************
    // Calcul le salaire mensuel net d'impôts à partir du salaire mensuel net.
    // **********************
    Calculateur.prototype.calculSalaireMensuelNetImpots = function () {
        this.salaireMensuelNetImpots = this.salaireMensuelNet * (1 - this.pourcentagePrelevementSource / 100);
    };
    // **********************
    // Calcul le salaire annuel net d'impôts à partir du salaire annuel net.
    // **********************
    Calculateur.prototype.calculSalaireAnnuelNetImpots = function () {
        this.salaireAnnuelNetImpots = this.salaireAnnuelNet * (1 - this.pourcentagePrelevementSource / 100);
    };
    // **********************
    // Calcul tous les salaires à partir du salaire horaire brut.
    // **********************
    Calculateur.prototype.calculFromSalaireHoraireBrut = function () {
        console.log("Calculs en cours...");
        this.salaireHoraireBrut = parseFloat(this.elemSalHorBrut.value);
        this.calculSalaireHoraireNet();
        this.calculSalaireMensuelBrut();
        this.calculSalaireMensuelNet();
        this.calculSalaireAnnuelBrut();
        this.calculSalaireAnnuelNet();
        this.calculSalaireMensuelNetImpots();
        this.calculSalaireAnnuelNetImpots();
        this.refreshUI();
    };
    // **********************
    // Rafraichit les valeurs des éléments HTML.
    // **********************
    Calculateur.prototype.refreshUI = function () {
        this.elemSalHorBrut.value = this.salaireHoraireBrut.toFixed(2).toString();
        this.elemSalHorNet.value = this.salaireHoraireNet.toFixed(2).toString();
        this.elemSalMenBrut.value = this.salaireMensuelBrut.toFixed(2).toString();
        this.elemSalMenNet.value = this.salaireMensuelNet.toFixed(2).toString();
        this.elemSalAnnBrut.value = this.salaireAnnuelBrut.toFixed(2).toString();
        this.elemSalAnnNet.value = this.salaireAnnuelNet.toFixed(2).toString();
        this.elemMenNetImpots.value = this.salaireMensuelNetImpots.toFixed(2).toString();
        this.elemAnnNetImpots.value = this.salaireAnnuelNetImpots.toFixed(2).toString();
        this.elemTauxStatOutput.innerText = "-" + this.pourcentageChargesSociales + "%";
        this.elemTempsTravail.value = this.pourcentageTempsPartiel.toString();
        this.elemTempsTravOutput.innerText = this.pourcentageTempsPartiel + "%";
        this.elemPrimeConv.value = this.nombreMoisPrimeConventionnelle.toString();
        this.elemPrimeConvOutput.innerText = this.nombreMoisPrimeConventionnelle + " mois";
        this.elemTauxPrel.value = this.pourcentagePrelevementSource.toString();
        this.elemTauxPrelOutput.innerText = this.pourcentagePrelevementSource + "%";
    };
    // **********************
    // Setters.
    // Appellés par les éléments HTML.
    // **********************
    Calculateur.prototype.setTempsPartiel = function (pourcentage) {
        this.pourcentageTempsPartiel = pourcentage;
        this.calculFromSalaireHoraireBrut();
    };
    Calculateur.prototype.setMoisPrimeConventionnelle = function (mois) {
        this.nombreMoisPrimeConventionnelle = mois;
        this.calculFromSalaireHoraireBrut();
    };
    Calculateur.prototype.setTauxPrelevementSource = function (taux) {
        this.pourcentagePrelevementSource = taux;
        this.calculFromSalaireHoraireBrut();
    };
    // **********************
    // Getter et setter pour le statut.
    // **********************
    Calculateur.prototype.getTauxChargesSociales = function () {
        if (this.elemStatut.value == "Sal_Non_Cadre") {
            this.pourcentageChargesSociales = 22;
        }
        else if (this.elemStatut.value == "Sal_Cadre") {
            this.pourcentageChargesSociales = 25;
        }
        else if (this.elemStatut.value == "Fon_Pub") {
            this.pourcentageChargesSociales = 15;
        }
        else if (this.elemStatut.value == "Prof_Lib") {
            this.pourcentageChargesSociales = 45;
        }
        else if (this.elemStatut.value == "Port_Sal") {
            this.pourcentageChargesSociales = 51;
        }
        else {
            this.pourcentageChargesSociales = 22;
        }
        this.calculFromSalaireHoraireBrut();
    };
    Calculateur.prototype.setTauxChargesSociales = function () {
        switch (this.pourcentageChargesSociales) {
            case 22:
                this.elemStatut.value = "Sal_Non_Cadre";
            case 25:
                this.elemStatut.value = "Sal_Cadre";
            case 15:
                this.elemStatut.value = "Fon_Pub";
            case 45:
                this.elemStatut.value = "Prof_Lib";
            case 51:
                this.elemStatut.value = "Port_Sal";
            default:
                this.elemStatut.value = "Sal_Non_Cadre";
        }
    };
    // **********************
    // Reset.
    // Appellé par le bouton "Reset".
    // **********************
    Calculateur.prototype.reset = function () {
        this.salaireHoraireBrut = 0;
        this.salaireHoraireNet = 0;
        this.salaireMensuelBrut = 0;
        this.salaireMensuelNet = 0;
        this.salaireAnnuelBrut = 0;
        this.salaireAnnuelNet = 0;
        this.nombreMoisPrimeConventionnelle = 12;
        this.salaireMensuelNetImpots = 0;
        this.salaireAnnuelNetImpots = 0;
        this.nombreMoisPrimeConventionnelle = 12;
        this.salaireMensuelNetImpots = 0;
        this.salaireAnnuelNetImpots = 0;
        this.pourcentageTempsPartiel = 100;
        this.pourcentageChargesSociales = 22;
        this.pourcentagePrelevementSource = 0;
        this.setTauxChargesSociales();
        this.refreshUI();
    };
    // **********************
    // Fonctions pour calculer certains salaires à partir d'autres salaires.
    // Appellés par les éléments HTML lorsqu'ils sont modifiés.
    // **********************
    Calculateur.prototype.calculFromSalaireHoraireNet = function () {
        this.salaireHoraireBrut = parseFloat(this.elemSalHorNet.value) / (1 - this.pourcentageChargesSociales / 100);
        this.setSalaireHoraireBrut();
        this.calculFromSalaireHoraireBrut();
    };
    Calculateur.prototype.calculFromSalaireMensuelBrut = function () {
        this.salaireHoraireBrut = parseFloat(this.elemSalMenBrut.value) / (this.nombreHeuresMensuelles * (this.pourcentageTempsPartiel / 100));
        this.setSalaireHoraireBrut();
        this.calculFromSalaireHoraireBrut();
    };
    Calculateur.prototype.calculFromSalaireMensuelNet = function () {
        this.salaireMensuelBrut = parseFloat(this.elemSalMenNet.value) / (1 - this.pourcentageChargesSociales / 100);
        this.setSalaireMensuelBrut();
        this.calculFromSalaireMensuelBrut();
    };
    Calculateur.prototype.calculFromSalaireAnnuelBrut = function () {
        this.salaireMensuelBrut = parseFloat(this.elemSalAnnBrut.value) / (this.nombreMoisPrimeConventionnelle);
        console.log(this.salaireMensuelBrut);
        this.setSalaireMensuelBrut();
        this.calculFromSalaireMensuelBrut();
    };
    Calculateur.prototype.calculFromSalaireAnnuelNet = function () {
        this.salaireAnnuelBrut = parseFloat(this.elemSalAnnNet.value) / (1 - this.pourcentageChargesSociales / 100);
        this.setSalaireAnnuelBrut();
        this.calculFromSalaireAnnuelBrut();
    };
    Calculateur.prototype.calculFromSalaireMensuelNetImpots = function () {
        this.salaireMensuelNet = parseFloat(this.elemMenNetImpots.value) / (1 - this.pourcentagePrelevementSource / 100);
        this.setSalaireMensuelNet();
        this.calculFromSalaireMensuelNet();
    };
    Calculateur.prototype.calculFromSalaireAnnuelNetImpots = function () {
        this.salaireAnnuelNet = parseFloat(this.elemAnnNetImpots.value) / (1 - this.pourcentagePrelevementSource / 100);
        this.setSalaireAnnuelNet();
        this.calculFromSalaireAnnuelNet();
    };
    // **********************
    // Setters HTML
    // Définit les valeurs des éléments HTML d'après les valeurs des propriétés de classe.
    // **********************
    Calculateur.prototype.setSalaireHoraireBrut = function () {
        this.elemSalHorBrut.value = this.salaireHoraireBrut.toString();
    };
    Calculateur.prototype.setSalaireHoraireNet = function () {
        this.elemSalHorNet.value = this.salaireHoraireNet.toString();
    };
    Calculateur.prototype.setSalaireMensuelBrut = function () {
        this.elemSalMenBrut.value = this.salaireMensuelBrut.toString();
    };
    Calculateur.prototype.setSalaireMensuelNet = function () {
        this.elemSalMenNet.value = this.salaireMensuelNet.toString();
    };
    Calculateur.prototype.setSalaireAnnuelBrut = function () {
        this.elemSalAnnBrut.value = this.salaireAnnuelBrut.toString();
    };
    Calculateur.prototype.setSalaireAnnuelNet = function () {
        this.elemSalAnnNet.value = this.salaireAnnuelNet.toString();
    };
    Calculateur.prototype.setSalaireMensuelNetImpots = function () {
        this.elemMenNetImpots.value = this.salaireMensuelNetImpots.toString();
    };
    Calculateur.prototype.setSalaireAnnuelNetImpots = function () {
        this.elemAnnNetImpots.value = this.salaireAnnuelNetImpots.toString();
    };
    return Calculateur;
}());
var calculateur = new Calculateur();
onload = function () {
    console.log("Page chargée");
    calculateur.getAllHTMLElements();
    calculateur.calculFromSalaireHoraireBrut();
};
