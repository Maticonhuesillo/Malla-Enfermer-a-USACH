const semestres = [
  {
    nombre: "Semestre 3",
    ramos: [
      {
        nombre: "Farmacología",
        prerrequisitos: ["Bioquímica", "Fisiología"]
      },
      {
        nombre: "Fisiopatología",
        prerrequisitos: ["Fisiología", "Agentes Biológicos en Salud-Enfermedad"]
      },
      {
        nombre: "Proceso de Atención y Cuidados Básicos de Enfermería I",
        prerrequisitos: ["Introducción a la Enfermería I"]
      },
      // Otros ramos...
    ]
  },
  // ...otros semestres con objetos para cada ramo
];

const malla = document.getElementById("malla");

semestres.forEach((semestre) => {
  const div = document.createElement("div");
  div.className = "semestre";

  const h2 = document.createElement("h2");
  h2.textContent = semestre.nombre;
  div.appendChild(h2);

  semestre.ramos.forEach((ramoObj) => {
    const p = document.createElement("p");
    p.className = "ramo";
    p.textContent = ramoObj.nombre;

    p.addEventListener("click", () => {
      const mensaje = ramoObj.prerrequisitos
        ? `Ramo: ${ramoObj.nombre}\nPrerrequisitos: ${ramoObj.prerrequisitos.join(", ")}`
        : `Ramo: ${ramoObj.nombre}\nPrerrequisitos: No especificados`;
      alert(mensaje);
    });

    div.appendChild(p);
  });

  malla.appendChild(div);
});
