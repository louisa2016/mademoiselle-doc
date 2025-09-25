const convocationFields = {
    aujourdhui: "aujourdhui",
    date: "date",
    heure: "heure",
    nom: "nom",
    prenom: "prenom",
    classe: "classe"
};

const convocationGenerator = new DocumentGenerator("convocation-ESS", convocationFields, {date: formatDateFr, aujourdhui: formatDateFr, heure: formatTimeFr});

document.getElementById("previewBtn").addEventListener("click", () => {
    convocationGenerator.preview(data => {
        document.getElementById("preview").innerText = `
Convocation ESS datée du ${data.aujourdhui}
Élève => nom : ${data.nom}, prenom : ${data.prenom}, classe : ${data.classe}
Date : ${data.date} à ${data.heure}`;
    });
});

document.getElementById("downloadDOCXBtn").addEventListener("click", () => {
    const data = convocationGenerator.collectData();
    const fileName = `convocation-ESS_${data.classe}_${data.nom}-${data.prenom}.docx`;
    convocationGenerator.downloadDOCX(fileName);
});
