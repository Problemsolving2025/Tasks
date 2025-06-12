function mutasd() {
    const varos = document.getElementById("varos").value;
    const iframe = document.getElementById("ifr");
    const leiras = document.getElementById("leiras");

    iframe.src = "https://naslovi.net/vremenska-prognoza/" + varos;

    const leirasok = {
        "beograd": "Belgrád híres a Kalemegdan erődről, Szent Száva-templomról és pezsgő éjszakai életéről.",
        "nis": "Nis a római császár, Nagy Konstantin szülőhelye, érdemes megnézni a Nis erődöt és a Crveni Krst emlékhelyet.",
        "subotica": "Subotica nevezetességei a Városháza, Raichle-palota, és a Palicsi-tó.",
        "novi-sad": "Újvidék a Péterváradi erődről és az EXIT fesztiválról híres.",
        "cacak": "Čačak közelében található az Ovčar-Kablar szurdok, népszerű kirándulóhely.",
        "zlatibor": "Zlatibor hegyi üdülőhely, híres sípályáiról és friss hegyi levegőjéről.",
        "kragujevac": "Kragujevac történelmi város, a Šumarice emlékpark és a régi főváros szerepe miatt ismert.",
        "lebane": "Lebane közelében található a bizánci kori Caričin Grad régészeti lelőhely.",
        "sabac": "Šabac a Száva partján fekszik, kulturális központként és vásárairól ismert.",
        "kladovo": "Kladovo a Duna partján fekszik, közel a híres Đerdap Nemzeti Parkhoz."
    };

    leiras.textContent = leirasok[varos] || "Nincs elérhető leírás ehhez a városhoz.";
}
window.onload = function () {
    mutasd();
};