const dogTypes = [
  {
    type: "adult",
    text: "psy dorosłe",
    value: [
      {
        type: "sterylized",
        text: "pies dorosły sterylizowany",
        value: 1.6
      },
      {
        type: "unsterilised",
        text: "pies dorosły niesterylizowany",
        value: 1.8
      },
      {
        type: "obese",
        text: "pies otyły mało aktywny",
        value: 1.4
      },
      {
        type: "dieting",
        text: "odchudzanie",
        value: 1
      },
      {
        type: "intensiveCare",
        text: "odżywianie w intensywnej terapii",
        value: 1
      },
      {
        type: "gainWeight",
        text: "odzyskanie masy ciała w okresie rekonwalescencji",
        value: 1.3
      }
    ]
  },
  {
    type: "workingDogs",
    text: "psy pracujące lub trenujące",
    value: [
      {
        type: "light",
        text: "lekko",
        value: 2
      },
      {
        type: "medium",
        text: "średnio",
        value: 3
      },
      {
        type: "hard",
        text: "ciężko",
        value: 5
      }
    ]
  },
  {
    type: "pregnancy",
    text: "ciąża",
    value: [
      {
        type: "twoTrimesters",
        text: "pierwsze 2 trymestry ciąży",
        value: 1.8
      },
      {
        type: "lastTrimester",
        text: "ostatni trymestr",
        value: 3
      }
    ]
  },
  {
    type: "lactation",
    text: "laktacja",
    value: [
      {
        type: "1puppy",
        text: "1 szczenię",
        value: 3
      },
      {
        type: "2puppies",
        text: "2 szczenięta",
        value: 3.5
      },      
      {
        type: "3-4puppies",
        text: "3-4 szczenięta",
        value: 4
      },
      {
        type: "5-6puppies",
        text: "5-6 szczeniąt",
        value: 5
      },      
      {
        type: "7-8puppies",
        text: "7-8 szczeniąt",
        value: 5.5
      },
      {
        type: "9puppies",
        text: "9 szczeniąt",
        value: 6
      }
    ]
  },
  {
    type: "growth",
    text: "psy rosnące",
    value: [
      {
        type: "1stage",
        text: "od odsadzenia do uzyskania 50% masy ciała psa dorosłego (do ok. 4-5 miesiąca życia)",
        value: 3
      },
      {
        type: "2stage",
        text: "od uzyskania 50% masy ciała psa dorosłego do uzyskania 80% masy ciała psa dorosłego (do ok. 8-12 miesiąca życia, zależnie od wielkości rasy)",
        value: 2.5
      },      
      {
        type: "3stage",
        text: "od uzyskania 80% masy ciała psa dorosłego do uzyskania 100% masy ciała psa dorosłego (do ok. 8-18 miesiąca życia, zależnie od wielkości rasy)",
        value: 2
      },
      {
        type: "4stage",
        text: "100% masy ciała psa dorosłego (8-18 miesiąca życia, zależnie od wielkości rasy)",
        value: 1.8
      }
    ]
  }
];

function calculateRER(bodyMass) {
  return Math.round(Math.pow(bodyMass, 0.75)*10)/10 * 70; 
}

function calculateDER(bodyMass, factor) {
  const der = calculateRER(bodyMass);
  return "Dzienne zapotrzebowanie dla Twojego psa to: " + Math.round(factor * der) + " kcal :)";
}

export default {calculateDER, dogTypes};