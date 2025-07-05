function analyzeReceipt() {
  const input = document.getElementById('receiptInput').value.toLowerCase();
  let result = "🔮 Oto Twój paragonowy portret:\n\n";

  if (input.trim() === "") {
    result = "🤔 Najpierw wklej jakiś paragon, Sherlocku Zakupowy!";
  } else {
    if (input.includes("piwo") || input.includes("lech") || input.includes("kustosz")) {
      result += "🍺 Koneser relaksu — spokojny duch z sercem do weekendów i playlisty 'Letnie wieczory'.\n";
    }
    if (input.includes("twarożek") || input.includes("grani")) {
      result += "🥣 Dusza domatora — kochasz miękkie tekstury i poranki z okruszkami.\n";
    }
    if (input.includes("buraczki") || input.includes("seler") || input.includes("marchew") || input.includes("cebula")) {
      result += "🥗 Kuchenny archeolog — Twoje dania mają wspomnienia i babcine tło dźwiękowe.\n";
    }
    if (input.includes("mydło") || input.includes("linda")) {
      result += "🧼 Minimalista z estetyką łazienki jak z reklamy — czystość to Twój lifestyle.\n";
    }
    if (input.includes("groszek") || input.includes("fasola")) {
      result += "🌱 Romantyk puszek — proste rzeczy sprawiają Ci największą radość.\n";
    }
    if (!result.includes("🍺") && !result.includes("🥗") && !result.includes("🧼")) {
      result += "🌀 Jesteś unikalny jak skład Twojego koszyka — nie da się Cię zaszufladkować!\n";
    }
  }

  document.getElementById('result').innerText = result;
}
