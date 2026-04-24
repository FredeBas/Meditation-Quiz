import React, { useState } from 'react';

const MeditationQuiz = () => {
  const quizData = [
    {
      q: "Målået med meditation er at være helt tom for tanker",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Korrekt! Meditation handler ikke om at være en tom beholder. Tanker kommer og går som skyer - det vigtige er ikke at jage dem væk! ☁️",
        incorrect: "Næh, det ville gøre meditation ret umuligt! Vores hjerner er som 'tænkemaskiner' - det er deres job at tænke. Opgaven er at være *stille* omkring tankerne, ikke at få dem til at forsvinde. 🧠"
      }
    },
    {
      q: "Hvor længe skal man mediterranere?",
      options: ["Det er lige meget", "20 minutter om dagen", "Så længe man på forhand har besluttet sig for at gøre det", "Altid over 10 minutter ad gangen"],
      correct: 2,
      feedback: {
        correct: "Præcis! Det vigtigste er at have en intention og holde den. 5 minutter med fuld fokus slår 20 minutter hvor du sjæler omkring. Kvalitet over kvantitet! ⏰",
        incorrect: "Det er faktisk mindre vigtigt hvor længe, og mere vigtigt at du bestemmer dig på forhånd. Du kan mediterranere i 5 minutter eller 50 minutter - bare vær konsekvent! 🎯"
      }
    },
    {
      q: "Man kan kun mediterranere rigtigt hvis man sidder i lotusstilling",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Spot on! Du kan være indvendigt stille på en stol, sengekanten, eller selv mens du går. Lotusstilling er bare en yogaposition, ikke en meditationskrav! 🪑",
        incorrect: "Ah nej! Meditation er ikke eksklusivt for yogaer. Du kan være indvendigt stille overalt - selv mens du gør opvask! (Selvom det ville være ualmindeligt roligt derhjemme) 🧖‍♀️"
      }
    },
    {
      q: "Meditation er en teknik",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Ja! Det er mere en tilstand eller en måde at være på end en teknik man skal 'mestre'. Meditation er som at være stille - du gør det allerede, bare med mere opmærksomhed! 🧘",
        incorrect: "Ikke helt! Hvis det var en teknik, skulle der være 'rigtige' og 'forkerte' måder at gøre det på. Meditation er mere en tilstand - en måde at være på. 🎭"
      }
    },
    {
      q: "Hvis jeg opdager, at jeg tænker på et problem, hvad gør jeg så?",
      options: ["Gennemgår instruktionerne og vender tilbage til meditationen", "Tænker på noget andet", "Ingenting - jeg er allerede fri af tankerne"],
      correct: 2,
      feedback: {
        correct: "Perfekt! Du gør ingenting. Du lader det være som det er. Det er hele pointen - at acceptere tankerne uden at bekæmpe dem. De kan ikke skade dig! 🛡️",
        incorrect: "Det vigtigste er at du *ikke gør noget* ved tanken. Hvis du prøver at slippe af med den, giver du den magt. Bare lad den være der og fortsæt. 🧠💨"
      }
    },
    {
      q: "Hvis jeg synes det er svært at mediterranere, hvad gør jeg så?",
      options: ["Så værger jeg ikke at gøre et problem ud af det", "Så forsøger jeg at tænke på noget positivt", "Så gør jeg det forkert"],
      correct: 0,
      feedback: {
        correct: "BINGO! Du accepterer at det er svært og gør ikke et PROBLEM ud af at det er svært. Det er hele kunsten! Meditation er så tit 'svært' - og det er helt okay. 🆗",
        incorrect: "Tæt på! Det vigtige er at du ikke dømmer dig selv for at synes det er svært. At acceptere svigheden uden at skabe drama omkring det - det er meditationen! 🎪"
      }
    },
    {
      q: "At være stille har både en indre og en ydre del",
      options: ["Rigtigt", "Forkert"],
      correct: 0,
      feedback: {
        correct: "Ja ja ja! Ydre stilhed: ikke bevæge sig. Indre stilhed: ikke lade tankerne påvirke dig. Begge dele spiller sammen! 🎼",
        incorrect: "Faktisk har stilhed både en ydre og indre dimension. Du kan være indvendigt stille selvom der er larm omkring dig, og indvendigt rastløs selvom kroppen er rolig. 🔊🤫"
      }
    },
    {
      q: "Den indre del betyder:",
      options: ["At jeg ikke forholder mig til tanker og følelser", "At alle tanker og følelser står stille", "At jeg kan fjerne alle tanker og følelser", "At jeg ikke dagdrømmer"],
      correct: 0,
      feedback: {
        correct: "Akkurat! Det handler om IKKE at forholder sig til dem, ikke om at de forsvinder. Det er som at ignorere et barnebarn der laver larm - det laver stadig larm, men det påvirker dig ikke! 👶🔔",
        incorrect: "Nah, det er at IKKE forholder sig til dem. Du accepterer at tankerne er der uden at få en mening ud af dem eller blive påvirket. De kan eksistere i freden! 🕊️"
      }
    },
    {
      q: "Man kan ikke være stille når der er larm i nærheden?",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Spot on! Stilhed er en indre tilstand, ikke en ydre. Du kan være stille selvom der er arbejdsmaskiner eller mennesker der snakker. Stilhed er frihed! 🚧➡️🧘",
        incorrect: "Nej, stilhed er først og fremmest en indre tilstand. Ydre larm kan være der uden at forstyrre din indre ro. Det er lidt som at være i et fyldt tog men være i din egen verden! 🚄"
      }
    },
    {
      q: "Man kan godt være fuldkommen stille og samtidig have hovdet fuld af tanker igennem hele meditationen?",
      options: ["Rigtigt", "Forkert"],
      correct: 0,
      feedback: {
        correct: "JA! Stilhed = ikke lade tankerne påvirke dig, IKKE at de ikke eksisterer. Du kan have en hel festival af tanker og stadig være stille. Paradoksalt? Ja! Magi? Måske! ✨",
        incorrect: "Faktisk kan du! Stilhed handler ikke om mangel på tanker, men om at IKKE lade dem påvirke dig. Dit sind kan være som Piccadilly Circus mens du stadig er stille indeni! 🎪"
      }
    },
    {
      q: "Man kan kun mediterranere hvis man sidder fuldkommen stille?",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Nej! Du kan være indvendigt stille mens kroppen bevæger sig. Folk mediterranerer mens de går, når de løber, selv når de vasker op! Bevægelse uden mental aktivitet = også meditation 🚶‍♀️",
        incorrect: "Næ, du kan være indvendigt stille selvom kroppen bevæger sig. Gå-meditation, løbe-meditation, rengørings-meditation - alle gyldig! 🧹✨"
      }
    },
    {
      q: "Stilhed er ...",
      options: ["en følelse", "en oplevelse", "en måde at have det på", "en indre position i forhold til tanker og følelser"],
      correct: 3,
      feedback: {
        correct: "Præcis! Det er en POSITION du indtar. Du placerer dig selv som en observatør af tankerne snarere end at blive kastet rundt af dem. Det er magt! 👑",
        incorrect: "Det vigtigste er at forstå at stilhed er en position du indtar - en måde at forholde dig til tankerne på. Ikke en følelse eller oplevelse, men en aktiv position. 🏔️"
      }
    },
    {
      q: "Den indre del af instruktionen er den vigtigste?",
      options: ["Rigtigt", "Forkert"],
      correct: 0,
      feedback: {
        correct: "Yes! Din indre tilstand trumfer alt. Du kan have den flotteste position, men hvis du indvendigt er kaotisk, så virker det ikke. Indre fred først! 🏰",
        incorrect: "Faktisk er den indre del vigtigere. Du kan sidde perfekt med udtryksløs ansigt mens du indvendigt er som en tornado. Det tæller ikke meget. Indre ro > ydre performance 🌪️➡️🧘"
      }
    },
    {
      q: "Det indre og ydre afspejler hinanden i meditationen. Hvad betyder det?",
      options: ["Hvis man ser anstrengct ud i ansigtet, så har man psykiske problemer", "At hvis man smiler, så virker meditationen bedre", "At hvis der er fred på ydersiden, så er der også fred på indersiden", "At hvis man er afspændt på ydersiden, er det lettere at være afspændt på indersiden og omvendt"],
      correct: 3,
      feedback: {
        correct: "Ja! Det handler om kommunikation mellem indre og ydre verden. Afslapning i ansigtet hjælper sindet til at slappe af, og omvendt. Det er som et spejlkammer! 🪞",
        incorrect: "Det betyder at indre og ydre påvirker hinanden. Hvis kroppen slapper af, hjælper det sindet til at slappe af - og omvendt. De arbejder sammen som et par! 💃🕺"
      }
    },
    {
      q: "Det gælder om at blive mere og mere afspændt i kroppen i løbet af meditationen?",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Nej! Afspænding sker naturligt. Du behøver ikke at 'arbejde på det'. Jo mindre du prøver, desto mere slappes du af. Det er mindfulness-paradokset! 🎭",
        incorrect: "Faktisk nej. Jo mere du PRØVER at slappe af, desto mere anspændt bliver du. Afspænding kommer fra at ACCEPTERE tingene som de er. Less trying, more relaxing! 😎"
      }
    },
    {
      q: "At være afspændt i forhold til sin oplevelse betyder, at vi",
      options: ["ikke blander os i hvad vi oplever", "observerer vores tanker og skubber dem væk", "ikke må følge noget når vi mediterranerer"],
      correct: 0,
      feedback: {
        correct: "Helt rigtigt! Du observerer uden at blande dig. Du er som en 'tilskuer' til dit eget sind. Det er så pænt, det er næsten kunstneri! 🎬",
        incorrect: "Det betyder at du IKKE blander dig. Du holder afstand. Du er som en kameraman der bare optager hvad der sker uden at redigere det. 🎥"
      }
    },
    {
      q: "Meditation virker ikke hvis man er anspændt i kroppen",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Nej! Du kan være anspændt og stadig være stille. Afspænding er ikke nødvendigt for meditation - det kommer ofte SOM en bivirkning! 🎁",
        incorrect: "Det virker faktisk fint selvom du er anspændt. Afspænding er en bonus, ikke et krav. Meditation første, afslapning anden. 📋"
      }
    },
    {
      q: "Hvis jeg er helt afspændt i kroppen efter en meditation er det et tegn på at jeg har gjort det rigtigt?",
      options: ["Rigtigt", "Forkert", "Måske"],
      correct: 2,
      feedback: {
        correct: "Måske! Det er en god tegn, men ikke en garanti. Du kunne også være helt spændt og stadig havde en god meditationssession. Alt er tilladt! 🎪",
        incorrect: "Det er en måske-situation. Afspænding er ofte en bonus, men ikke garantien for en 'rigtig' meditation. Du kan have gjort det perfekt og stadig være anspændt! 🤷"
      }
    },
    {
      q: "I denne meditationsform retter man sin opmærksomhed mod objekter i bevidstheden",
      options: ["Rigtigt", "Forkert"],
      correct: 1,
      feedback: {
        correct: "Nej! Du retter IKKE aktivt opmærksomhed mod noget specifikt. Du lader opmærksomheden flyde naturligt. Hands off! ✋",
        incorrect: "Faktisk nej. Du gør det ikke aktivt. Du lader opmærksomheden falde på hvad der naturligt dukker op. Du er passiv, ikke aktiv. Det er ultramoderne! 🛋️"
      }
    },
    {
      q: "Objekter i bevidstheden er:",
      options: ["Tanker, følelser og lyde", "Alt som har en begyndelse og en afslutning", "Tanker og genstande"],
      correct: 1,
      feedback: {
        correct: "Ja! Alt der har en start og slutning er objekt i bevidstheden - tanker, følelser, sanseindtryk. Selv dine tanker om meditation har en start og slutning! 🎬",
        incorrect: "Det er alt der har en begyndelse og en afslutning - tanker, følelser, sanseindtryk. Selv dine tanker om meditation stiger op og forsvinder! ✨➡️💨"
      }
    },
    {
      q: "Man kan ikke småsove og være opmærksom på samme tid?",
      options: ["Rigtigt", "Forkert"],
      correct: 0,
      feedback: {
        correct: "Korrekt! Hvis du småsover, er du ikke opmærksom. Det er som at være til festa men sove - du misser det hele! 😴",
        incorrect: "Jo, man kan! Hvis du småsover, er du ikke opmærksom. Opmærksomhed kræver at du er vågen og tilstede. Sleep-meditation virker ikke! 😴❌"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const correct = index === quizData[currentIndex].correct;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(null);
  };

  const current = quizData[currentIndex];
  const progress = ((currentIndex + 1) / quizData.length) * 100;
  const percentage = Math.round((score / quizData.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <h2 className="text-5xl mb-2">🎉</h2>
            <h1 className="text-3xl font-black text-purple-600 mb-2">Quiz færdig!</h1>
            <p className="text-gray-600 mb-6">Her er dine resultater</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                <p className="text-sm text-gray-600 font-semibold mb-1">Rigtige svar</p>
                <p className="text-4xl font-black text-purple-600">{score}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                <p className="text-sm text-gray-600 font-semibold mb-1">Procent</p>
                <p className="text-4xl font-black text-purple-600">{percentage}%</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-4 mb-6 font-semibold">
              {percentage === 100 && "🏆 Du er en meditationsmester!"}
              {percentage >= 80 && percentage < 100 && "⭐ Super solid viden om meditation!"}
              {percentage >= 60 && percentage < 80 && "👍 Du ved godt noget om meditation!"}
              {percentage >= 40 && percentage < 60 && "🌱 Godt start! Fortsæt med at øve dig!"}
              {percentage < 40 && "📚 Meditation er en vej, ikke en destination!"}
            </div>

            <button
              onClick={restart}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Start igen 🔄
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-2xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-8 text-white">
          <h1 className="text-5xl font-black mb-2">🧘 Meditation Quiz</h1>
          <p className="text-xl opacity-90">Spørgsmål <strong>{currentIndex + 1}</strong> af <strong>{quizData.length}</strong></p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white bg-opacity-20 rounded-full h-2 mb-8 backdrop-blur-sm overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-pink-400 to-yellow-300 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Score Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            ✅ Rigtige: <span className="text-2xl">{score}</span>
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          {/* Question */}
          <h2 className="text-2xl font-black text-gray-900 mb-8 leading-snug">
            {current.q}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {current.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showFeedback && handleAnswer(idx)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-xl text-left font-semibold transition-all transform text-lg
                  ${selectedAnswer === idx 
                    ? isCorrect 
                      ? 'bg-green-400 text-white scale-105 shadow-lg' 
                      : 'bg-red-400 text-white scale-105 shadow-lg'
                    : showFeedback
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-900 hover:shadow-md hover:scale-102'
                  }
                `}
              >
                <span className="mr-3">{selectedAnswer === idx ? (isCorrect ? '✅' : '❌') : '◯'}</span>
                {option}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`mb-6 p-4 rounded-xl border-2 font-semibold
              ${isCorrect 
                ? 'bg-green-50 border-green-300 text-green-900' 
                : 'bg-red-50 border-red-300 text-red-900'
              }
            `}>
              {isCorrect ? '✨ ' : '💡 '}
              {current.feedback[isCorrect ? 'correct' : 'incorrect']}
            </div>
          )}

          {/* Next Button */}
          {showFeedback && (
            <button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {currentIndex < quizData.length - 1 ? 'Næste spørgsmål →' : 'Se resultater 🏆'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeditationQuiz;