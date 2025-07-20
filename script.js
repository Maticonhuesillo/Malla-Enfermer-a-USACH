const semestres = [
  {
    nombre: "Semestre 1",
    ramos: [
      "Química General",
      "Biología",
      "Anatomía",
      "Introducción a la Enfermería I",
      "Histología",
      "Sociología"
    ]
  },
  {
    nombre: "Semestre 2",
    ramos: [
      "Bioquímica",
      "Agentes Biológicos en Salud-Enfermedad",
      "Fisiología",
      "Introducción a la Enfermería II",
      "Educación para la Salud",
      "Taller de Relaciones Humanas"
    ]
  },
  {
    nombre: "Semestre 3",
    ramos: [
      "Farmacología",
      "Fisiopatología",
      "Proceso de Atención y Cuidados Básicos de Enfermería I",
      "Gestión en Enfermería",
      "Electivo I",
      "Inglés I"
    ]
  },
  {
    nombre: "Semestre 4",
    ramos: [
      "Introducción a la Enfermería en Salud Mental",
      "Salud Pública",
      "Proceso de Atención y Cuidados Básicos de Enfermería II",
      "Gestión del Cuidado en Salud Mental",
      "Metodología de la Investigación I",
      "Inglés II"
    ]
  },
  {
    nombre: "Semestre 5",
    ramos: [
      "Gestión del Cuidado del Adulto y Adulto Mayor I",
      "Enfermería Comunitaria y Salud Familiar I",
      "Gestión del Cuidado en Niños y Adolescentes I",
      "Introducción a la Enfermería Comunitaria y Salud Familiar",
      "Electivo II",
      "Inglés III"
    ]
  },
  {
    nombre: "Semestre 6",
    ramos: [
      "Gestión del Cuidado del Adulto y Adulto Mayor II",
      "Enfermería Comunitaria y Salud Familiar II",
      "Gestión del Cuidado en Niños y Adolescentes II",
      "Formulación de Proyectos en Gestión y Gerencia",
      "Investigación en Enfermería I",
      "Inglés IV"
    ]
  },
  {
    nombre: "Semestre 7",
    ramos: [
      "Gestión del Cuidado del Adulto y Adulto Mayor III",
      "Enfermería Comunitaria y Salud Familiar III",
      "Gerencia en Enfermería",
      "Género, Cultura y Sexualidad",
      "Electivo III",
      "Investigación en Enfermería II"
    ]
  },
  {
    nombre: "Semestre 8",
    ramos: [
      "Enfermería en Urgencias",
      "Administración en Enfermería",
      "Seminario de Grado",
      "Proyecto de Seminario de Grado",
      "Taller de Desarrollo Integral",
      "Metodología de la Investigación II"
    ]
  },
  {
    nombre: "Semestre 9",
    ramos: [
      "Internado Enfermería del Adulto",
      "Internado Enfermería del Niño y Adolescente"
    ]
  },
  {
    nombre: "Semestre 10",
    ramos: [
      "Internado Enfermería Comunitaria"
    ]
  }
];

const malla = document.getElementById("malla");

semestres.forEach((semestre) => {
  const div = document.createElement("div");
  div.className = "semestre";

  const h2 = document.createElement("h2");
  h2.textContent = semestre.nombre;
  div.appendChild(h2);

  semestre.ramos.forEach((ramo) => {
    const p = document.createElement("p");
    p.className = "ramo";
    p.textContent = ramo;
    p.addEventListener("click", () => {
      alert(`Ramo: ${ramo}`);
    });
    div.appendChild(p);
  });

  malla.appendChild(div);
});
