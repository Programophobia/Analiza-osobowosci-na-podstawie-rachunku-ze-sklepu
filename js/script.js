// script.js
function analyzeReceipt() {
  const input = document.getElementById('receiptInput').value.toLowerCase();
  let output = "🔮 Oto Twój paragonowy portret:\n";

  if (input.includes("piwo")) {
    output += "🍺 Dusza wieczorna — relaksujesz się jak mistrz zen z kapslem w dłoni.\n";
  }
  if (input.includes("twarożek") || input.includes("grani")) {
    output += "🥣 Serdeczny domator, który ceni prostotę i konsystencję (także w życiu).\n";
  }
  if (input.includes("buraczki") || input.includes("seler")) {
    output += "🥗 Szef kuchni tradycji. Gotujesz nie tylko z głodu, ale z pamięci pokoleń.\n";
  }
  if (input.includes("mydło")) {
    output += "🧼 Wewnętrzny minimalista – czysty umysł, czyste ręce.\n";
  }
  if (input.trim() === "") {
    output = "😐 Wklej paragon, zanim wyczytam Ci duszę mordo!";
  }

  document.getElementById("result").innerText = output;
}
Tesseract.recognize(file, 'pol')
  .then(({ data: { text } }) => {
    document.getElementById('receiptInput').value = text;
    analyzeReceipt();
  });
