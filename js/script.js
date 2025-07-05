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
      if (input.includes("piwo") || input.includes("lech") || input.includes("kustosz")) {
  result += "🍺 Koneser relaksu — wieczór, Ty i puszka z duszą.\n"; matched = true;
}
if (input.includes("twarożek") || input.includes("grani") || input.includes("almette")) {
  result += "🥣 Romantyk poranków — życie zaczynasz od łyżki miłości.\n"; matched = true;
}
if (input.includes("buraczki") || input.includes("seler") || input.includes("marchew")) {
  result += "🥗 Tradycyjny czarodziej kuchni — gotujesz z pamięci pokoleń.\n"; matched = true;
}
if (input.includes("mydło") || input.includes("linda")) {
  result += "🧼 Czystość nie tylko ciała — ale i intencji.\n"; matched = true;
}
if (input.includes("czekolada") || input.includes("delicje")) {
  result += "🍫 Czuły smakosz — słodycze to Twoje emocjonalne bezpieczeństwo.\n"; matched = true;
}
if (input.includes("groszek") || input.includes("fasola") || input.includes("konserwa")) {
  result += "🥫 Pragmatyk z sercem — zawsze gotowy na kuchenną apokalipsę.\n"; matched = true;
}
if (input.includes("kawa") || input.includes("jacobs") || input.includes("nescafe")) {
  result += "☕ Filozof w szlafroku — życie analizujesz przez zapach Arabiki.\n"; matched = true;
}
if (input.includes("herbata") || input.includes("lipton")) {
  result += "🍵 Spokojna dusza — każdy dzień zaczynasz od łagodnej czułości.\n"; matched = true;
}
if (input.includes("chipsy") || input.includes("lays")) {
  result += "🥔 Król wieczornych seansów — popcorn to za mało, Ty idziesz na grubo.\n"; matched = true;
}
if (input.includes("woda") || input.includes("żywiec")) {
  result += "💧 Minimalista z czystą duszą — życie bez bąbelków, ale z głębią.\n"; matched = true;
}
if (input.includes("papier toaletowy")) {
  result += "🧻 Strateg domowy — przewidujesz więcej niż giełdowy analityk.\n"; matched = true;
}
if (input.includes("mleko") || input.includes("łaciate")) {
  result += "🥛 Nostalgik dzieciństwa — kaszka z mlekiem to Twój comfort zone.\n"; matched = true;
}
if (input.includes("masło")) {
  result += "🧈 Miłośnik smarownej elegancji — dla Ciebie wszystko lepsze z tłuszczykiem.\n"; matched = true;
}
if (input.includes("lód") || input.includes("lody")) {
  result += "🍦 Łowca chwil — lubisz rozpływać się w przyjemnościach.\n"; matched = true;
}
if (input.includes("pomidor") || input.includes("passata")) {
  result += "🍅 Poeta smaku — tworzysz spaghetti jakby to była symfonia czerwieni.\n"; matched = true;
}
if (input.includes("makaron")) {
  result += "🍝 Romantyk prostoty — uczucie wyrażasz al dente.\n"; matched = true;
}
if (input.includes("ryż")) {
  result += "🍚 Stabilna jednostka — kochasz porządek i klejącą regularność.\n"; matched = true;
}
if (input.includes("serek wiejski")) {
  result += "🧺 Fit marzyciel — śniadanie z proteiną i planem na świat.\n"; matched = true;
}
if (input.includes("hummus")) {
  result += "🌱 Lewitujący hipster — eko, ale z humorem i pitą.\n"; matched = true;
}
if (input.includes("jogurt") || input.includes("zott")) {
  result += "🥄 Pogodna dusza — dla Ciebie śniadanie to rytuał czułości.\n"; matched = true;
}
if (input.includes("wafle ryżowe")) {
  result += "🍘 Perfekcyjny minimalista — przekąska bez hałasu i kalorii.\n"; matched = true;
}
if (input.includes("mięso") || input.includes("kurczak") || input.includes("schab")) {
  result += "🥩 Siła i tradycja — kuchnia u Ciebie zaczyna się od patelni.\n"; matched = true;
}
if (input.includes("kiełbasa")) {
  result += "🌭 Dusza ogniska — jesteś wszędzie tam, gdzie pachnie przygodą.\n"; matched = true;
}
if (input.includes("ziemniaki")) {
  result += "🥔 Stabilna podstawa — jesteś fundamentem domowego wszechświata.\n"; matched = true;
}
if (input.includes("sól") || input.includes("przyprawa")) {
  result += "🧂 Alchemik smaku — bez Ciebie nawet rosół byłby ciszą.\n"; matched = true;
}
if (input.includes("banany")) {
  result += "🍌 Optymista z witaminą — zawsze masz plan B(anan).\n"; matched = true;
}
if (input.includes("winogrona") || input.includes("arbuz")) {
  result += "🍉 Letni romantyk — smakujesz życie w cieniu hamaka.\n"; matched = true;
}
if (input.includes("pomarańcza") || input.includes("cytryna")) {
  result += "🍋 Zaskakująco świeży — cytrusowy realizm i sarkazm.\n"; matched = true;
}
if (input.includes("ser") || input.includes("gouda")) {
  result += "🧀 Król desek — i nie chodzi o surfing, tylko camembert.\n"; matched = true;
}
if (input.includes("śmietana") || input.includes("18%")) {
  result += "🥄 Rozkoszny sybaryta — kochasz, gdy dania są miękkie i przytulne.\n"; matched = true;
}
if (input.includes("jajka")) {
  result += "🥚 Architekt śniadań — Twoje życie to balans białka i chaosu.\n"; matched = true;
}
if (input.includes("szpinak") || input.includes("jarmuż")) {
  result += "🌿 Zielony mędrzec — zdrowy styl i instynkt ninja.\n"; matched = true;
}
if (input.includes("ogórki") || input.includes("kiszone")) {
  result += "🥒 Kwaskowy kontemplator — z zewnątrz zamknięty, w środku ferment emocji.\n"; matched = true;
}
if (input.includes("cukierki") || input.includes("gumy do żucia")) {
  result += "🍬 Wieczne dziecko — czasem zbyt słodki, zawsze do żucia.\n"; matched = true;
}
if (input.includes("boczek")) {
  result += "🥓 Rebel z patelni — nie boisz się tłuszczu i decyzji.\n"; matched = true;
}
if (input.includes("majonez")) {
  result += "🥫 Król emulsji — nawet kanapkę potrafisz zamienić w dzieło sztuki.\n"; matched = true;
}
if (input.includes("kabanos")) {
  result += "🥖 Snajper przekąsek — dyskretny, skuteczny, lekko dymiony.\n"; matched = true;
}
if (input.includes("płatki") || input.includes("corn flakes")) {
  result += "🥣 Nostalgik sobotniego poranka — Twoje życie to intro z kreskówki.\n"; matched = true;
}
if (input.includes("nutella") || input.includes("krem czekoladowy")) {
  result += "🍯 Emocjonalny pieszczoszek — Twoje palce znają smak dzieciństwa.\n"; matched = true;
}
if (input.includes("musztarda")) {
  result += "🌭 Odważny i pikantny — nie boisz się mocnych słów i sosów.\n"; matched = true;
}
if (input.includes("żel pod prysznic")) {
  result += "🚿 Zapachowy strateg — pachniesz lepiej niż własne decyzje.\n"; matched = true;
}
if (input.includes("proszek do prania")) {
  result += "👕 Tygrys logistyki — Twoja świeżość zaczyna się od bębna.\n"; matched = true;
}
if (input.includes("kasza") || input.includes("gryczana")) {
  result += "🥄 Poeta z ziarnem — sypki, ale głęboki.\n"; matched = true;
}
if (input.includes("bakalie") || input.includes("rodzynki")) {
  result += "🥜 Niespodzianka w cieście życia — słodki, a czasem kontrowersyjny.\n"; matched = true;
}
if (input.includes("ciastka") || input.includes("herbatniki")) {
  result += "🍪 Serdeczny duszek — gościnność i cukier zawsze pod ręką.\n"; matched = true;
}
if (input.includes("parówki")) {
  result += "🌭 Realista ekspresowy — obiady w 2 minuty, sentyment na zawsze.\n"; matched = true;
}
if (input.includes("bulion") || input.includes("kostka rosołowa")) {
  result += "🍵 Alchemik smaku — Twój rosół byłby w stanie uleczyć dzikiego tygrysa.\n"; matched = true;
}
if (input.includes("pizza") || input.includes("mrożona")) {
  result += "🍕 Hedonista tygodniowy — czwartek? Czas na ser.\n"; matched = true;
}
if (input.includes("chleb") || input.includes("kajzerka")) {
  result += "🍞 Stabilny fundament — nie zaczynasz dnia bez kromki i sensu.\n"; matched = true;
}
if (input.includes("zupa") || input.includes("barszcz")) {
  result += "🥄 Czuły opiekun — karmisz nie tylko brzuchy, ale i wspomnienia.\n"; matched = true;
}


    }
  }

  document.getElementById('result').innerText = result;
}
