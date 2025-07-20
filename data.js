const curriculumData = {
    institution: "Universidad de Santiago de Chile",
    career: "Enfermería",
    year: 2016,
    totalCredits: 240,
    degreeCredits: 120,
    semesters: [
        {
            semester: 1,
            courses: [
                {
                    name: "Biología",
                    area: "Preclínica",
                    credits: "TEL 6 - SGT 5",
                    prerequisites: []
                },
                {
                    name: "Anatomía",
                    area: "Preclínica",
                    credits: "TEL 6 - SGT 7",
                    prerequisites: []
                },
                {
                    name: "Introducción a la Enfermería",
                    area: "Preclínica",
                    credits: "TEL 6 - SGT 4",
                    prerequisites: []
                },
                {
                    name: "Taller de desarrollo integral",
                    area: "Preclínica",
                    credits: "TEL 6 - SGT 3",
                    prerequisites: []
                },
                {
                    name: "Inglés I",
                    area: "Institucional",
                    credits: "TEL 2 - SGT 3",
                    prerequisites: []
                }
            ]
        },
        {
            semester: 2,
            courses: [
                {
                    name: "Fisiología",
                    area: "Preclínica",
                    credits: "TEL 6 - SGT 7",
                    prerequisites: ["Biología"]
                },
                {
                    name: "Histología",
                    area: "Preclínica",
                    credits: "TEL 4 - SGT 4",
                    prerequisites: ["Biología"]
                },
                {
                    name: "Introducción a la Enfermería II",
                    area: "Preclínica",
                    credits: "TEL 6 - SGT 6",
                    prerequisites: ["Introducción a la Enfermería"]
                },
                {
                    name: "Sociología",
                    area: "Preclínica",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: []
                },
                {
                    name: "Inglés II",
                    area: "Institucional",
                    credits: "TEL 2 - SGT 3",
                    prerequisites: ["Inglés I"]
                }
            ]
        },
        {
            semester: 3,
            courses: [
                {
                    name: "Farmacología",
                    area: "Clínica I",
                    credits: "TEL 6 - SGT 4",
                    prerequisites: ["Fisiología"]
                },
                {
                    name: "Metodología de la Investigación",
                    area: "Clínica I",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: []
                },
                {
                    name: "Educación para la Salud",
                    area: "Clínica I",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: []
                },
                {
                    name: "Terapia y Atención de Enfermería",
                    area: "Clínica I",
                    credits: "TEL 14 - SGT 9",
                    prerequisites: ["Anatomía", "Fisiología"]
                },
                {
                    name: "Inglés III",
                    area: "Institucional",
                    credits: "TEL 2 - SGT 3",
                    prerequisites: ["Inglés II"]
                }
            ]
        },
        {
            semester: 4,
            courses: [
                {
                    name: "Salud Pública",
                    area: "Clínica II",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: []
                },
                {
                    name: "Administración en Enfermería",
                    area: "Clínica II",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: ["Metodología de la Investigación"]
                },
                {
                    name: "Enfermería en Urgencia",
                    area: "Clínica II",
                    credits: "TEL 14 - SGT 8",
                    prerequisites: ["Terapia y Atención de Enfermería"]
                },
                {
                    name: "Inglés IV",
                    area: "Institucional",
                    credits: "TEL 2 - SGT 3",
                    prerequisites: ["Inglés III"]
                }
            ]
        },
        {
            semester: 5,
            courses: [
                {
                    name: "Gestión del Cuidado de Enfermería",
                    area: "Clínica III",
                    credits: "TEL 16 - SGT 10",
                    prerequisites: ["Terapia y Atención de Enfermería"]
                },
                {
                    name: "Investigación en Enfermería",
                    area: "Clínica III",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: ["Metodología de la Investigación"]
                },
                {
                    name: "Electivo III",
                    area: "Clínica III",
                    credits: "TEL 4 - SGT 3",
                    prerequisites: []
                }
            ]
        },
        {
            semester: 6,
            courses: [
                {
                    name: "Enfermería Comunitaria",
                    area: "Clínica III",
                    credits: "TEL 18 - SGT 12",
                    prerequisites: ["Salud Pública", "Gestión del Cuidado de Enfermería"]
                },
                {
                    name: "Odonto Cultural y Sexualidad",
                    area: "Clínica III",
                    credits: "TEL 16 - SGT 4",
                    prerequisites: []
                }
            ]
        },
        {
            semester: 7,
            courses: [
                {
                    name: "Gerencia en Enfermería",
                    area: "Título Profesional",
                    credits: "TEL 6 - SGT 6",
                    prerequisites: ["Administración en Enfermería"]
                },
                {
                    name: "Proyecto de Servicio de Gestión",
                    area: "Título Profesional",
                    credits: "TEL 6 - SGT 5",
                    prerequisites: ["Investigación en Enfermería"]
                }
            ]
        },
        {
            semester: 8,
            courses: [
                {
                    name: "Internado de Enfermería",
                    area: "Título Profesional",
                    credits: "TEL 44 - SGT 20",
                    prerequisites: ["Todos los cursos anteriores"]
                },
                {
                    name: "Seminario de Grado",
                    area: "Título Profesional",
                    credits: "TEL 6 - SGT 6",
                    prerequisites: ["Investigación en Enfermería"]
                }
            ]
        }
    ]
};
