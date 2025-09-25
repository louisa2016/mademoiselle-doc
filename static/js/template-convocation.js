const convocationFields = {
  eleve: "eleve",
  classe: "classe",
  date: "date",
  heure: "heure",
  lieu: "lieu",
  auteur: "auteur"
};

const convocationGenerator = new DocumentGenerator("convocation", convocationFields);

document.getElementById("previewBtn").addEventListener("click", () => {
  convocationGenerator.preview(data => {
  const dateStr = data.date ? new Date(data.date).toLocaleDateString("fr-FR") : "";
    document.getElementById("preview").innerText = `
Élève : ${data.eleve} (${data.classe})
Date : ${dateStr} à ${data.heure}
Lieu : ${data.lieu}
Auteur : ${data.auteur}`;
  });
});

document.getElementById("downloadDOCXBtn").addEventListener("click", () => {
  convocationGenerator.downloadDOCX();
});

document.getElementById("downloadPDFBtn").addEventListener("click", () => {
  convocationGenerator.downloadPDF(null, (pdf, data) => {
    pdf.text(`Élève : ${data.eleve} (${data.classe})`, 10, 30);
    pdf.text(`Date : ${data.date} à ${data.heure}`, 10, 40);
    pdf.text(`Lieu : ${data.lieu}`, 10, 50);
    pdf.text(`Auteur : ${data.auteur}`, 10, 60);
  });
});
