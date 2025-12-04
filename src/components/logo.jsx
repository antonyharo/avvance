import React, { useId } from "react";

export default function Logo({ className }) {
  return (
    <div
      className={
        "flex items-center gap-2 select-none hover:opacity-90 transition-opacity cursor-pointer " +
        className
      }
    >
      <span className="bg-gradient-to-tr from-purple-500 to-pink-600 text-white p-1 rounded-lg shadow-lg shadow-purple-500/20">
        <AvvanceIcon size={28} color="white" />
      </span>
      <h1 className="text-3xl font-bold tracking-tight">Avvance</h1>
    </div>
  );
}

const AvvanceIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2.6,
  className = "",
  ...props
}) => {
  const maskId = useId();

  // Definição dos Chevrons (Setas)
  // Alinhados no quadrante inferior direito
  const ChevronsPath = () => (
    <>
      <path d="M15 15l4 4l-4 4" />
      <path d="M19 15l4 4l-4 4" />
    </>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 
        Ajuste de Centralização:
        translate(3 3) coloca o desenho (que tem ~26px de largura/altura) 
        perfeitamente no centro do grid de 32px.
      */}
      <g transform="translate(3 3)">
        <mask id={maskId}>
          <rect width="32" height="32" fill="white" />
          <g stroke="black" strokeWidth={strokeWidth + 2} fill="none">
            <ChevronsPath />
          </g>
        </mask>

        <g mask={`url(#${maskId})`}>
          {/* Letra A - Geometria Corrigida */}
          {/* Topo em (13, 3) | Perna Esq vai até (5, 23) */}
          <path d="M13 3L5 23" />

          {/* Perna Dir vai até (21, 23) - Passa por trás das setas */}
          <path d="M13 3L21 23" />

          {/* Barra Central: Calculada para conectar as pernas na altura Y=14 */}
          <path d="M8 14h10" />
        </g>

        {/* Chevrons Visíveis */}
        <g>
          <ChevronsPath />
        </g>
      </g>
    </svg>
  );
};
