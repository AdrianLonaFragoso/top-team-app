import React, { useState } from "react";

const personas = [
  // Top 5
  {
    id: 1,
    seudonimo: "Madame",
    liga: "Top 5",
    puntos: 1500,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Madame",
    stats: { front: 5, back: 5, face: 5, outfit: 5, attitude: 5 },
  },
  {
    id: 2,
    seudonimo: "Top 2",
    liga: "Top 5",
    puntos: 1450,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Top2",
    stats: { front: 5, back: 4, face: 5, outfit: 5, attitude: 5 },
  },
  {
    id: 3,
    seudonimo: "Risitos🫅",
    liga: "Top 5",
    puntos: 1400,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Risitos",
    stats: { front: 4, back: 5, face: 5, outfit: 4, attitude: 5 },
  },
  {
    id: 4,
    seudonimo: "Galaxia (Sola) 🔺",
    liga: "Top 5",
    puntos: 1350,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Galaxia",
    stats: { front: 5, back: 4, face: 4, outfit: 5, attitude: 4 },
  },
  {
    id: 5,
    seudonimo: "Bandida 🔺",
    liga: "Top 5",
    puntos: 1300,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=Bandida",
    stats: { front: 4, back: 3, face: 4, outfit: 5, attitude: 5 },
  },

  // Liga de ascenso
  {
    id: 6,
    seudonimo: "Chaquetita 🔺",
    liga: "Liga de ascenso",
    puntos: 1100,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=Chaquetita",
    stats: { front: 3, back: 4, face: 4, outfit: 4, attitude: 4 },
  },
  {
    id: 7,
    seudonimo: "Bluey",
    liga: "Liga de ascenso",
    puntos: 1050,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=Bluey",
    stats: { front: 4, back: 3, face: 3, outfit: 4, attitude: 4 },
  },
  {
    id: 8,
    seudonimo: "TBD",
    liga: "Liga de ascenso",
    puntos: 1000,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=TBD",
    stats: { front: 3, back: 3, face: 3, outfit: 3, attitude: 3 },
  },
  {
    id: 9,
    seudonimo: "Mamonsilla",
    liga: "Liga de ascenso",
    puntos: 950,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=Mamonsilla",
    stats: { front: 2, back: 4, face: 3, outfit: 4, attitude: 3 },
  },
  {
    id: 10,
    seudonimo: "China 🔻 (Moscas)",
    liga: "Liga de ascenso",
    puntos: 900,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=China",
    stats: { front: 3, back: 3, face: 2, outfit: 3, attitude: 2 },
  },

  // Liga proyecto
  {
    id: 11,
    seudonimo: "Slinky 💹",
    liga: "Liga proyecto",
    puntos: 800,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=Slinky",
    stats: { front: 4, back: 4, face: 4, outfit: 4, attitude: 4 },
  },
  {
    id: 12,
    seudonimo: "Vestido verde",
    liga: "Liga proyecto",
    puntos: 750,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=VestidoVerde",
    stats: { front: 3, back: 3, face: 4, outfit: 5, attitude: 3 },
  },
  {
    id: 13,
    seudonimo: "Sin apodo",
    liga: "Liga proyecto",
    puntos: 700,
    estrellas: 2,
    foto: "https://i.pravatar.cc/150?u=SinApodo",
    stats: { front: 2, back: 2, face: 2, outfit: 2, attitude: 2 },
  },
  {
    id: 14,
    seudonimo: "Tata",
    liga: "Liga proyecto",
    puntos: 650,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=Tata",
    stats: { front: 3, back: 3, face: 3, outfit: 3, attitude: 5 },
  },
  {
    id: 15,
    seudonimo: "Amazona",
    liga: "Liga proyecto",
    puntos: 600,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=Amazona",
    stats: { front: 5, back: 4, face: 3, outfit: 4, attitude: 4 },
  },

  // Liga en memoria
  {
    id: 16,
    seudonimo: "Zanahoria",
    liga: "Liga en memoria",
    puntos: 400,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Zanahoria",
    stats: { front: 4, back: 4, face: 5, outfit: 4, attitude: 4 },
  },
  {
    id: 17,
    seudonimo: "Pelusa",
    liga: "Liga en memoria",
    puntos: 350,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=Pelusa",
    stats: { front: 3, back: 3, face: 4, outfit: 4, attitude: 4 },
  },
  {
    id: 18,
    seudonimo: "Trabajo honesto",
    liga: "Liga en memoria",
    puntos: 300,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=TrabajoHonesto",
    stats: { front: 3, back: 3, face: 3, outfit: 3, attitude: 5 },
  },
  {
    id: 19,
    seudonimo: "Glow up",
    liga: "Liga en memoria",
    puntos: 250,
    estrellas: 4,
    foto: "https://i.pravatar.cc/150?u=GlowUp",
    stats: { front: 4, back: 4, face: 5, outfit: 5, attitude: 4 },
  },
  {
    id: 20,
    seudonimo: "Amiga",
    liga: "Liga en memoria",
    puntos: 200,
    estrellas: 3,
    foto: "https://i.pravatar.cc/150?u=Amiga",
    stats: { front: 3, back: 3, face: 3, outfit: 3, attitude: 3 },
  },

  // Liga Leyenda
  {
    id: 21,
    seudonimo: "La Bicha (IN7)",
    liga: "Liga Leyenda",
    puntos: 2000,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=LaBicha",
    stats: { front: 5, back: 5, face: 5, outfit: 5, attitude: 5 },
  },
  {
    id: 22,
    seudonimo: "Doña Harley Q.",
    liga: "Liga Leyenda",
    puntos: 1950,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Harley",
    stats: { front: 5, back: 5, face: 5, outfit: 5, attitude: 4 },
  },
  {
    id: 23,
    seudonimo: "Xula de xihuahua",
    liga: "Liga Leyenda",
    puntos: 1900,
    estrellas: 5,
    foto: "https://i.pravatar.cc/150?u=Xula",
    stats: { front: 5, back: 4, face: 5, outfit: 5, attitude: 5 },
  },
];

const RadarChart = ({ stats }) => {
  const keys = Object.keys(stats);
  const levels = 5;
  const size = 200;
  const center = size / 2;
  const radius = size * 0.35;

  const points = keys
    .map((key, i) => {
      const angle = (i * 2 * Math.PI) / keys.length - Math.PI / 2;
      const value = stats[key];
      const x = center + radius * (value / levels) * Math.cos(angle);
      const y = center + radius * (value / levels) * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  const bgPolygons = Array.from({ length: levels }, (_, i) => {
    const r = radius * ((i + 1) / levels);
    return keys
      .map((_, j) => {
        const angle = (j * 2 * Math.PI) / keys.length - Math.PI / 2;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  });

  return (
    <div className="relative flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Grid */}
        {bgPolygons.map((p, i) => (
          <polygon
            key={i}
            points={p}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}
        {/* Axis */}
        {keys.map((_, i) => {
          const angle = (i * 2 * Math.PI) / keys.length - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          );
        })}
        {/* Data Polygon */}
        <polygon
          points={points}
          fill="rgba(99, 102, 241, 0.3)"
          stroke="rgba(99, 102, 241, 0.8)"
          strokeWidth="2"
          className="animate-in fade-in zoom-in duration-500"
        />
        {/* Labels */}
        {keys.map((key, i) => {
          const angle = (i * 2 * Math.PI) / keys.length - Math.PI / 2;
          const x = center + (radius + 20) * Math.cos(angle);
          const y = center + (radius + 20) * Math.sin(angle);
          return (
            <text
              key={key}
              x={x}
              y={y}
              fontSize="10"
              fill="rgba(148, 163, 184, 0.8)"
              textAnchor="middle"
              className="uppercase font-bold tracking-tighter"
              dominantBaseline="middle"
            >
              {key}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const App = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const ligas = [
    "Top 5",
    "Liga de ascenso",
    "Liga proyecto",
    "Liga en memoria",
    "Liga Leyenda",
  ];

  const calculateFinalScore = (stats) => {
    const total = Object.values(stats).reduce((acc, val) => acc + val, 0);
    return ((total / 25) * 100).toFixed(0);
  };

  const getRank = (score) => {
    if (score >= 90)
      return {
        letter: "S",
        color: "text-yellow-400",
        glow: "shadow-yellow-500/50",
      };
    if (score >= 80)
      return {
        letter: "A",
        color: "text-indigo-400",
        glow: "shadow-indigo-500/50",
      };
    if (score >= 70)
      return {
        letter: "B",
        color: "text-emerald-400",
        glow: "shadow-emerald-500/50",
      };
    return {
      letter: "C",
      color: "text-slate-400",
      glow: "shadow-slate-500/50",
    };
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Team Chart
          </h1>
          <p className="text-slate-400 text-lg font-medium">Global rank</p>
        </header>

        <div className="space-y-16">
          {ligas.map((liga) => {
            const personasEnLiga = personas
              .filter((p) => p.liga === liga)
              .sort((a, b) => b.puntos - a.puntos);

            return (
              <section key={liga} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter bg-indigo-500/10 px-4 py-1 rounded-lg border border-indigo-500/20">
                    {liga}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent"></div>
                </div>

                <div className="grid gap-4">
                  {personasEnLiga.map((persona, index) => {
                    const estrellas =
                      "★".repeat(persona.estrellas) +
                      "☆".repeat(5 - persona.estrellas);
                    const isTop3 = index < 3 && liga === "Top 5";
                    const rankColors = [
                      "from-yellow-400 to-yellow-600",
                      "from-slate-300 to-slate-500",
                      "from-amber-600 to-amber-800",
                    ];

                    return (
                      <div
                        key={persona.id}
                        onClick={() => setSelectedPersona(persona)}
                        className="group relative bg-[#1e293b]/50 backdrop-blur-xl border border-slate-700/50 p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-[#1e293b]/80 transition-all duration-300 flex items-center overflow-hidden cursor-pointer active:scale-[0.98]"
                      >
                        {/* Ranking Number */}
                        <div
                          className={`
                          flex items-center justify-center min-w-[3rem] h-12 rounded-xl text-xl font-black
                          ${isTop3 ? `bg-gradient-to-br ${rankColors[index]} text-white shadow-lg` : "bg-slate-800 text-slate-500 border border-slate-700"}
                        `}
                        >
                          {index + 1}
                        </div>

                        {/* Avatar */}
                        <div className="relative mx-6">
                          <div
                            className={`
                            absolute -inset-1 rounded-full blur-sm opacity-50 
                            ${isTop3 ? `bg-gradient-to-br ${rankColors[index]}` : "bg-indigo-500/30"}
                          `}
                          ></div>
                          <img
                            src={persona.foto}
                            alt={persona.seudonimo}
                            className={`relative w-16 h-16 rounded-full border-2 object-cover ${isTop3 ? "border-white/50" : "border-slate-600"}`}
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {persona.seudonimo}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-yellow-400 text-sm tracking-widest">
                              {estrellas}
                            </span>
                          </div>
                        </div>

                        {/* Points */}
                        <div className="text-right">
                          <div className="text-2xl font-black text-indigo-400 group-hover:scale-110 transition-transform origin-right">
                            {persona.puntos.toLocaleString()}
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">
                            {liga === "Liga en memoria" ? "Score" : "Puntos"}
                          </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors"></div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <footer className="mt-16 text-center text-slate-500 text-sm font-medium border-t border-slate-800/50 pt-8">
          &copy; 2026 Top Team Apolo • Refinado con React & Vite
        </footer>
      </div>

      {/* Modal */}
      {selectedPersona &&
        (() => {
          const score = calculateFinalScore(selectedPersona.stats);
          const rank = getRank(score);
          return (
            <div
              className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity animate-in fade-in duration-300 overflow-y-auto"
              onClick={() => setSelectedPersona(null)}
            >
              <div
                className="bg-[#1e293b] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 max-w-3xl w-full shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300 my-4 sm:my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Card Decoration Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-xl"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-indigo-500/30 rounded-br-xl"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedPersona(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center relative">
                  {/* Left Side: Profile Photo (Span 2) */}
                  <div className="md:col-span-2 flex flex-col items-center">
                    <div className="relative group">
                      {/* Rank Badge Floating */}
                      <div
                        className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center z-20 shadow-xl ${rank.glow}`}
                      >
                        <span className={`text-4xl font-black ${rank.color}`}>
                          {rank.letter}
                        </span>
                      </div>

                      <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-colors duration-500"></div>
                      <div className="relative">
                        <img
                          src={selectedPersona.foto}
                          alt={selectedPersona.seudonimo}
                          className="relative w-56 h-56 rounded-[2rem] object-cover border-4 border-slate-700 shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 rounded-[2rem] border-2 border-white/5 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <span className="text-[10px] uppercase font-black text-indigo-400 tracking-[0.3em] mb-1 block">
                        Level {selectedPersona.estrellas} Operator
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-black text-white">
                        {selectedPersona.seudonimo}
                      </h2>
                      <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Side: Stats (Span 3) */}
                  <div className="md:col-span-3 space-y-8">
                    <div className="flex justify-between items-center bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
                          Global Ranking Performance
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-5xl font-black text-white italic">
                            {score}
                          </span>
                          <div className="flex flex-col">
                            <span className="text-indigo-400 font-bold">%</span>
                            <span className="text-[10px] text-slate-600 font-bold uppercase">
                              Combat Rating
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-16 w-px bg-slate-800"></div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
                          Total XP
                        </span>
                        <span className="block text-2xl font-bold text-slate-300">
                          {selectedPersona.puntos.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center py-4 bg-[#0f172a]/30 rounded-3xl border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 100 100"
                          fill="white"
                        >
                          <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
                        </svg>
                      </div>
                      <RadarChart stats={selectedPersona.stats} />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(selectedPersona.stats).map(
                        ([key, val]) => (
                          <div
                            key={key}
                            className="flex flex-col gap-1 bg-slate-900/40 p-3 rounded-xl border border-white/5 group hover:border-indigo-500/50 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] uppercase font-black text-slate-500 group-hover:text-indigo-400 transition-colors">
                                {key}
                              </span>
                              <span className="text-white font-bold text-xs">
                                {val}/5
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-1000"
                                style={{ width: `${(val / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Technical ID Label */}
                <div className="absolute bottom-6 left-10 flex gap-4 opacity-20 text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                  <span>
                    UID: APP-APOLO-
                    {selectedPersona.id.toString().padStart(4, "0")}
                  </span>
                  <span>SECURE_CONNECTION: ACTIVE</span>
                  <span>DATA_PROTOCOL: VITE_R4</span>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
};

export default App;
