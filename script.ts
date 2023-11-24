type ChargesSociales = 22 | 25 | 15 | 45 | 51;
type PrimeConventionnelle = 12 | 13 | 14 | 15 | 16;

class Calculateur {
    private salaireHoraireBrut: number;
    private salaireHoraireNet: number;
    private salaireMensuelBrut: number;
    private salaireMensuelNet: number;
    private salaireAnnuelBrut: number;
    private salaireAnnuelNet: number;
    private pourcentageChargesSociales: ChargesSociales;

    private nombreHeuresMensuelles: number;
    private pourcentageTempsPartiel: number;

    private nombreMoisPrimeConventionnelle: PrimeConventionnelle;

    private pourcentagePrelevementSource: number;
    private salaireMensuelNetImpots: number;
    private salaireAnnuelNetImpots: number;


    //On référence les éléments HTML input pour pouvoir les utiliser plus facilement
    private elemSalHorBrut: HTMLInputElement;
    private elemSalHorNet: HTMLInputElement;
    private elemSalMenBrut: HTMLInputElement;
    private elemSalMenNet: HTMLInputElement;
    private elemSalAnnBrut: HTMLInputElement;
    private elemSalAnnNet: HTMLInputElement;
    private elemStatut: HTMLInputElement;
    private elemTempsTravail: HTMLInputElement;
    private elemPrimeConv: HTMLInputElement;
    private elemTauxPrel: HTMLInputElement;
    private elemMenNetImpots: HTMLInputElement;
    private elemAnnNetImpots: HTMLInputElement;

    //On référence les éléments HTML output pour pouvoir les utiliser plus facilement
    private elemTauxStatOutput: HTMLOutputElement;
    private elemTempsTravOutput: HTMLOutputElement;
    private elemPrimeConvOutput: HTMLOutputElement;
    private elemTauxPrelOutput: HTMLOutputElement;




    constructor(){
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
    public getAllHTMLElements(): void {
        this.elemSalHorBrut = document.getElementById("elemSalHorBrut") as HTMLInputElement;
        this.elemSalHorNet = document.getElementById("elemSalHorNet") as HTMLInputElement;
        this.elemSalMenBrut = document.getElementById("elemSalMenBrut") as HTMLInputElement;
        this.elemSalMenNet = document.getElementById("elemSalMenNet") as HTMLInputElement;
        this.elemSalAnnBrut = document.getElementById("elemSalAnnBrut") as HTMLInputElement;
        this.elemSalAnnNet = document.getElementById("elemSalAnnNet") as HTMLInputElement;
        this.elemStatut = document.getElementById("elemStatut") as HTMLInputElement;
        this.elemTempsTravail = document.getElementById("elemTempsTrav") as HTMLInputElement;
        this.elemPrimeConv = document.getElementById("elemPrimeConv") as HTMLInputElement;
        this.elemTauxPrel = document.getElementById("elemTauxPrel") as HTMLInputElement;
        this.elemMenNetImpots = document.getElementById("elemMenNetImpots") as HTMLInputElement;
        this.elemAnnNetImpots = document.getElementById("elemAnnNetImpots") as HTMLInputElement;

        this.elemTauxStatOutput = document.getElementById("elemTauxStatOutput") as HTMLOutputElement;
        this.elemTempsTravOutput = document.getElementById("elemTempsTravOutput") as HTMLOutputElement;
        this.elemPrimeConvOutput = document.getElementById("elemPrimeConvOutput") as HTMLOutputElement;
        this.elemTauxPrelOutput = document.getElementById("elemTauxPrelOutput") as HTMLOutputElement;
    }

    // **********************
    // Calcul le salaire horaire net à partir du salaire horaire brut.
    // **********************
    private calculSalaireHoraireNet(): void {
        this.salaireHoraireNet = this.salaireHoraireBrut * (1 - this.pourcentageChargesSociales / 100);
    }

    // **********************
    // Calcul le salaire mensuel brut à partir du salaire horaire brut.
    // **********************
    private calculSalaireMensuelBrut(): void {

        this.salaireMensuelBrut = this.salaireHoraireBrut * this.nombreHeuresMensuelles * (this.pourcentageTempsPartiel / 100);
    }

    // **********************
    // Calcul le salaire mensuel net à partir du salaire mensuel brut.
    // **********************
    private calculSalaireMensuelNet(): void {
        this.salaireMensuelNet = this.salaireMensuelBrut * (1 - this.pourcentageChargesSociales / 100);
    }

    // **********************
    // Calcul le salaire annuel brut à partir du salaire mensuel brut.
    // **********************
    private calculSalaireAnnuelBrut(): void {
        this.salaireAnnuelBrut = this.salaireMensuelBrut * this.nombreMoisPrimeConventionnelle;
    }

    // **********************
    // Calcul le salaire annuel net à partir du salaire annuel brut.
    // **********************
    private calculSalaireAnnuelNet(): void {
        this.salaireAnnuelNet = this.salaireAnnuelBrut * (1 - this.pourcentageChargesSociales / 100);
    }
    // **********************
    // Calcul le salaire mensuel net d'impôts à partir du salaire mensuel net.
    // **********************
    private calculSalaireMensuelNetImpots(): void {
        this.salaireMensuelNetImpots = this.salaireMensuelNet * (1 - this.pourcentagePrelevementSource / 100);
    }

    // **********************
    // Calcul le salaire annuel net d'impôts à partir du salaire annuel net.
    private calculSalaireAnnuelNetImpots(): void {
        this.salaireAnnuelNetImpots = this.salaireAnnuelNet * (1 - this.pourcentagePrelevementSource / 100);
    }

    public calculFromSalaireHoraireBrut(): void {
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
    }
    public refreshUI(): void {

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
    }
    public setTempsPartiel(pourcentage: number): void {
        this.pourcentageTempsPartiel = pourcentage;
        this.calculFromSalaireHoraireBrut();
    }
    public setMoisPrimeConventionnelle(mois: PrimeConventionnelle): void {
        this.nombreMoisPrimeConventionnelle = mois;
        this.calculFromSalaireHoraireBrut();
    }

    public setTauxPrelevementSource(taux: number): void {
        this.pourcentagePrelevementSource = taux;
        this.calculFromSalaireHoraireBrut();
    }

    private getTauxChargesSociales(): void {
        if(this.elemStatut.value == "Sal_Non_Cadre") {
            this.pourcentageChargesSociales = 22;
        }else if(this.elemStatut.value == "Sal_Cadre") {
            this.pourcentageChargesSociales = 25;
        }else if(this.elemStatut.value == "Fon_Pub") {
            this.pourcentageChargesSociales = 15;
        }else if(this.elemStatut.value == "Prof_Lib") {
            this.pourcentageChargesSociales = 45;
        }else if(this.elemStatut.value == "Port_Sal") {
            this.pourcentageChargesSociales = 51;
        }else {
            this.pourcentageChargesSociales = 22;
        }
        this.calculFromSalaireHoraireBrut();
    }
    private setTauxChargesSociales(): void {
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
    }
    public reset(): void {
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
    }

    public calculFromSalaireHoraireNet(): void {
        this.salaireHoraireBrut = parseFloat(this.elemSalHorNet.value) / (1 - this.pourcentageChargesSociales / 100);
        this.setSalaireHoraireBrut();
        this.calculFromSalaireHoraireBrut();
    }
    public calculFromSalaireMensuelBrut(): void {
        this.salaireHoraireBrut = parseFloat(this.elemSalMenBrut.value) / (this.nombreHeuresMensuelles * (this.pourcentageTempsPartiel / 100));
        this.setSalaireHoraireBrut();
        this.calculFromSalaireHoraireBrut();
    }
    public calculFromSalaireMensuelNet(): void {
        this.salaireMensuelBrut = parseFloat(this.elemSalMenNet.value) / (1 - this.pourcentageChargesSociales / 100);
        this.setSalaireMensuelBrut();
        this.calculFromSalaireMensuelBrut();
    }
    public calculFromSalaireAnnuelBrut(): void {
        this.salaireMensuelBrut = parseFloat(this.elemSalAnnBrut.value) / (this.nombreMoisPrimeConventionnelle);
        console.log(this.salaireMensuelBrut);
        this.setSalaireMensuelBrut();
        this.calculFromSalaireMensuelBrut();
    }
    public calculFromSalaireAnnuelNet(): void {
        this.salaireAnnuelBrut = parseFloat(this.elemSalAnnNet.value) / (1 - this.pourcentageChargesSociales / 100);
        this.setSalaireAnnuelBrut();
        this.calculFromSalaireAnnuelBrut();
    }
    public calculFromSalaireMensuelNetImpots(): void {
        this.salaireMensuelNet = parseFloat(this.elemMenNetImpots.value) / (1 - this.pourcentagePrelevementSource / 100);
        this.setSalaireMensuelNet();
        this.calculFromSalaireMensuelNet();
    }
    public calculFromSalaireAnnuelNetImpots(): void {
        this.salaireAnnuelNet = parseFloat(this.elemAnnNetImpots.value) / (1 - this.pourcentagePrelevementSource / 100);
        this.setSalaireAnnuelNet();
        this.calculFromSalaireAnnuelNet();
    }
    private setSalaireHoraireBrut(): void {
        this.elemSalHorBrut.value = this.salaireHoraireBrut.toString();
    }
    private setSalaireHoraireNet(): void {
        this.elemSalHorNet.value = this.salaireHoraireNet.toString();
    }
    private setSalaireMensuelBrut(): void {
        this.elemSalMenBrut.value = this.salaireMensuelBrut.toString();
    }
    private setSalaireMensuelNet(): void {
        this.elemSalMenNet.value = this.salaireMensuelNet.toString();
    }
    private setSalaireAnnuelBrut(): void {
        this.elemSalAnnBrut.value = this.salaireAnnuelBrut.toString();
    }
    private setSalaireAnnuelNet(): void {
        this.elemSalAnnNet.value = this.salaireAnnuelNet.toString();
    }
    private setSalaireMensuelNetImpots(): void {
        this.elemMenNetImpots.value = this.salaireMensuelNetImpots.toString();
    }
    private setSalaireAnnuelNetImpots(): void {
        this.elemAnnNetImpots.value = this.salaireAnnuelNetImpots.toString();
    }
}

let calculateur = new Calculateur();
onload = function(): void {
    console.log("Page chargée");
    calculateur.getAllHTMLElements();
    calculateur.calculFromSalaireHoraireBrut();
}