// Función para cargar y mostrar todos los ramos
function loadAllCourses() {
    const coursesList = document.getElementById('courses-list');
    
    // Limpiar el contenedor primero
    coursesList.innerHTML = '';
    
    // Verificar si curriculumData está definido y tiene semestres
    if (!window.curriculumData || !curriculumData.semesters) {
        coursesList.innerHTML = '<p class="error">No se encontraron datos de la malla curricular.</p>';
        return;
    }
    
    // Ordenar semestres por número
    const sortedSemesters = [...curriculumData.semesters].sort((a, b) => a.semester - b.semester);
    
    // Crear elementos para cada ramo
    sortedSemesters.forEach(semester => {
        // Verificar si el semestre tiene cursos
        if (!semester.courses || semester.courses.length === 0) return;
        
        // Crear contenedor del semestre
        const semesterContainer = document.createElement('div');
        semesterContainer.className = 'semester-container';
        
        // Título del semestre
        const semesterTitle = document.createElement('h4');
        semesterTitle.className = 'semester-title';
        semesterTitle.textContent = `Semestre ${semester.semester}`;
        semesterContainer.appendChild(semesterTitle);
        
        // Lista de cursos
        semester.courses.forEach(course => {
            // Verificar que el curso tenga datos mínimos
            if (!course.name || !course.credits) return;
            
            const courseItem = document.createElement('div');
            courseItem.className = `course-item ${getAreaClass(course.area)}`;
            
            // Nombre del curso
            const nameElement = document.createElement('div');
            nameElement.className = 'course-name';
            nameElement.textContent = course.name;
            
            // Créditos y prerrequisitos
            const detailsElement = document.createElement('div');
            detailsElement.className = 'course-details';
            
            const creditsSpan = document.createElement('span');
            creditsSpan.className = 'course-credits';
            creditsSpan.textContent = course.credits;
            
            const prereqSpan = document.createElement('span');
            prereqSpan.className = 'course-prerequisites';
            const prereqText = course.prerequisites && course.prerequisites.length > 0 
                ? `Prerrequisitos: ${course.prerequisites.join(', ')}` 
                : 'Sin prerrequisitos';
            prereqSpan.textContent = prereqText;
            
            detailsElement.appendChild(creditsSpan);
            detailsElement.appendChild(document.createTextNode(' • '));
            detailsElement.appendChild(prereqSpan);
            
            // Área
            const areaElement = document.createElement('div');
            areaElement.className = 'course-area';
            areaElement.textContent = course.area || 'Área no especificada';
            
            // Agregar elementos al item
            courseItem.appendChild(nameElement);
            courseItem.appendChild(detailsElement);
            courseItem.appendChild(areaElement);
            
            // Hacer clickable
            courseItem.addEventListener('click', () => {
                showCourseDetail(course, semester.semester);
                infoPanel.style.display = 'none';
            });
            
            semesterContainer.appendChild(courseItem);
        });
        
        coursesList.appendChild(semesterContainer);
    });
}

// Función auxiliar para obtener clase CSS según área
function getAreaClass(area) {
    if (!area) return '';
    return 'area-' + area.toLowerCase().replace(/\s+/g, '-');
}

// Event listener mejorado
if (toggleInfoBtn) {
    toggleInfoBtn.addEventListener('click', function() {
        try {
            loadAllCourses();
            infoPanel.style.display = 'block';
            
            // Desplazarse al inicio del panel
            infoPanel.scrollTo(0, 0);
        } catch (error) {
            console.error('Error al cargar los cursos:', error);
            const coursesList = document.getElementById('courses-list');
            coursesList.innerHTML = '<p class="error">Error al cargar la información. Por favor intenta nuevamente.</p>';
        }
    });
}
