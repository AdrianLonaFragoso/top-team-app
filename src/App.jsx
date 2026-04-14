import React, { useState } from "react";

const personas = [
  {
    id: 1,
    seudonimo: "ShadowWolf",
    puntos: 150,
    estrellas: 4,
    foto: "https://i.pravatar.cc/100?img=1",
    stats: { front: 4, back: 3, face: 5, outfit: 4, attitude: 3 },
  },
  {
    id: 2,
    seudonimo: "LadyK",
    puntos: 300,
    estrellas: 5,
    foto: "https://i.pravatar.cc/100?img=2",
    stats: { front: 5, back: 5, face: 5, outfit: 5, attitude: 5 },
  },
  {
    id: 3,
    seudonimo: "Chiquitita",
    puntos: 220,
    estrellas: 4,
    foto: "https://i.pravatar.cc/100?img=3",
    stats: { front: 3, back: 4, face: 4, outfit: 5, attitude: 4 },
  },
  {
    id: 4,
    seudonimo: "ByteKnight",
    puntos: 180,
    estrellas: 3,
    foto: "https://i.pravatar.cc/100?img=4",
    stats: { front: 2, back: 3, face: 3, outfit: 4, attitude: 5 },
  },
  {
    id: 5,
    seudonimo: "SkinnyPretty",
    puntos: 270,
    estrellas: 5,
    foto: "https://i.pravatar.cc/100?img=5",
    stats: { front: 5, back: 4, face: 5, outfit: 4, attitude: 5 },
  },
  {
    id: 6,
    seudonimo: "StackSamurai",
    puntos: 195,
    estrellas: 4,
    foto: "https://i.pravatar.cc/100?img=6",
    stats: { front: 4, back: 4, face: 3, outfit: 4, attitude: 4 },
  },
  {
    id: 7,
    seudonimo: "NullByte",
    puntos: 145,
    estrellas: 3,
    foto: "https://i.pravatar.cc/100?img=7",
    stats: { front: 3, back: 3, face: 3, outfit: 3, attitude: 3 },
  },
  {
    id: 8,
    seudonimo: "Krrot",
    puntos: 240,
    estrellas: 4,
    foto: "https://i.pravatar.cc/100?img=8",
    stats: { front: 4, back: 5, face: 4, outfit: 3, attitude: 4 },
  },
  {
    id: 9,
    seudonimo: "Bandida",
    puntos: 200,
    estrellas: 3,
    foto: "https://i.pravatar.cc/100?img=9",
    stats: { front: 5, back: 3, face: 4, outfit: 4, attitude: 5 },
  },
  {
    id: 10,
    seudonimo: "FuncFreak",
    puntos: 160,
    estrellas: 2,
    foto: "https://i.pravatar.cc/100?img=10",
    stats: { front: 2, back: 2, face: 3, outfit: 3, attitude: 4 },
  },
];

const RadarChart = ({ stats }) => {
  const keys = Object.keys(stats);
  const levels = 5;
  const size = 200;
  const center = size / 2;
  const radius = size * 0.35;

  const points = keys.map((key, i) => {
    const angle = (i * 2 * Math.PI) / keys.length - Math.PI / 2;
    const value = stats[key];
    const x = center + radius * (value / levels) * Math.cos(angle);
    const y = center + radius * (value / levels) * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  const bgPolygons = Array.from({ length: levels }, (_, i) => {
    const r = radius * ((i + 1) / levels);
    return keys.map((_, j) => {
      const angle = (j * 2 * Math.PI) / keys.length - Math.PI / 2;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(" ");
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
  const sortedPersonas = [...personas].sort((a, b) => b.puntos - a.puntos);

  const calculateFinalScore = (stats) => {
    const total = Object.values(stats).reduce((acc, val) => acc + val, 0);
    return ((total / 25) * 100).toFixed(0);
  };

  const getRank = (score) => {
    if (score >= 90) return { letter: "S", color: "text-yellow-400", glow: "shadow-yellow-500/50" };
    if (score >= 80) return { letter: "A", color: "text-indigo-400", glow: "shadow-indigo-500/50" };
    if (score >= 70) return { letter: "B", color: "text-emerald-400", glow: "shadow-emerald-500/50" };
    return { letter: "C", color: "text-slate-400", glow: "shadow-slate-500/50" };
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Top 10 Equipos
          </h1>
          <p className="text-slate-400 text-lg font-medium">
            Ranking Global de Desempeño y Estrellas
          </p>
        </header>

        <div className="grid gap-4">
          {sortedPersonas.map((persona, index) => {
            const estrellas =
              "★".repeat(persona.estrellas) + "☆".repeat(5 - persona.estrellas);
            const isTop3 = index < 3;
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
                  flex items-center justify-center w-12 h-12 rounded-xl text-xl font-black
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
                    <span className="text-slate-500 text-xs uppercase font-bold tracking-tighter">
                      • Nivel {persona.estrellas}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <div className="text-right">
                  <div className="text-2xl font-black text-indigo-400 group-hover:scale-110 transition-transform origin-right">
                    {persona.puntos.toLocaleString()}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">
                    Puntos
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute right-0 top-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors"></div>
              </div>
            );
          })}
        </div>

        <footer className="mt-16 text-center text-slate-500 text-sm font-medium border-t border-slate-800/50 pt-8">
          &copy; 2026 Top Team Apolo • Refinado con React & Vite
        </footer>
      </div>

      {/* Modal */}
      {selectedPersona && (() => {
        const score = calculateFinalScore(selectedPersona.stats);
        const rank = getRank(score);
        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedPersona(null)}
          >
            <div 
              className="bg-[#1e293b] border border-white/10 rounded-[2.5rem] p-10 max-w-3xl w-full shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300"
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center relative">
                {/* Left Side: Profile Photo (Span 2) */}
                <div className="md:col-span-2 flex flex-col items-center">
                  <div className="relative group">
                    {/* Rank Badge Floating */}
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center z-20 shadow-xl ${rank.glow}`}>
                      <span className={`text-4xl font-black ${rank.color}`}>{rank.letter}</span>
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
                    <span className="text-[10px] uppercase font-black text-indigo-400 tracking-[0.3em] mb-1 block">Level {selectedPersona.estrellas} Operator</span>
                    <h2 className="text-4xl font-black text-white">{selectedPersona.seudonimo}</h2>
                    <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                  </div>
                </div>

                {/* Right Side: Stats (Span 3) */}
                <div className="md:col-span-3 space-y-8">
                  <div className="flex justify-between items-center bg-slate-900/50 p-6 rounded-3xl border border-white/5">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Ranking Performance</span>
                      <div className="flex items-center gap-3">
                        <span className="text-5xl font-black text-white italic">{score}</span>
                        <div className="flex flex-col">
                          <span className="text-indigo-400 font-bold">%</span>
                          <span className="text-[10px] text-slate-600 font-bold uppercase">Combat Rating</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-16 w-px bg-slate-800"></div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Total XP</span>
                      <span className="block text-2xl font-bold text-slate-300">{selectedPersona.puntos.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center py-4 bg-[#0f172a]/30 rounded-3xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                       <svg width="60" height="60" viewBox="0 0 100 100" fill="white">
                          <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
                       </svg>
                    </div>
                    <RadarChart stats={selectedPersona.stats} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(selectedPersona.stats).map(([key, val]) => (
                      <div key={key} className="flex flex-col gap-1 bg-slate-900/40 p-3 rounded-xl border border-white/5 group hover:border-indigo-500/50 transition-colors">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] uppercase font-black text-slate-500 group-hover:text-indigo-400 transition-colors">{key}</span>
                          <span className="text-white font-bold text-xs">{val}/5</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-1000"
                            style={{ width: `${(val/5)*100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical ID Label */}
              <div className="absolute bottom-6 left-10 flex gap-4 opacity-20 text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                <span>UID: APP-APOLO-{selectedPersona.id.toString().padStart(4, '0')}</span>
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
