function downloadPDF() {
  const element = document.getElementById('scoring-sheet');
  html2pdf(element, {
      margin: 0.5,
      filename: 'scoring_sheet.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  });
}

// Include this script in your HTML
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
document.body.appendChild(script);
