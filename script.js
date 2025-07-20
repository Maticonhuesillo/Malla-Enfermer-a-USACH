document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const semestersContainer = document.getElementById('semesters-container');
    const infoPanel = document.getElementById('info-panel');
    const toggleInfoBtn = document.getElementById('toggle-info');
    const closeInfoBtn = document.getElementById('close-info');
    const resetViewBtn = document.getElementById('reset-view');
    const courseDetail = document.getElementById('course-detail');
    const closeDetailBtn = document.getElementById('close-detail');
    
    // Generar la malla curricular
    function generateCurriculum() {
        semestersContainer.innerHTML = '';
        
        curriculumData.semesters.forEach((semester, index) => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            
            const semesterHeader = document.createElement('div');
            semesterHeader.className = 'semester-header';
            
            const semesterTitle = document.createElement('h3');
            semesterTitle.className = 'semester-title';
            semesterTitle.textContent = `${semester.semester}° Semestre`;
            
            semesterHeader.appendChild(semesterTitle);
            semesterElement.appendChild(semesterHeader);
            
            semester.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = `course course-${course.area.toLowerCase().replace(/\s/g, '')}`;
                
                const courseName = document.createElement('div');
                courseName.className = 'course-name';
                courseName.textContent = course.name;
                
                const courseCredits = document.createElement('div');
                courseCredits.className = 'course-credits';
                courseCredits.textContent = `${course.credits} créditos`;
                
                courseElement.appendChild(courseName);
                courseElement.appendChild(courseCredits);
                
                // Agregar evento de clic para mostrar detalles
                courseElement.addEventListener('click', () => showCourseDetail(course, semester.semester));
                
                semesterElement.appendChild(courseElement);
            });
            
            semestersContainer.appendChild(semesterElement);
        });
    }
    
    // Mostrar detalles del curso
    function showCourseDetail(course, semester) {
        document.getElementById('detail-title').textContent = course.name;
        document.getElementById('detail-semester').textContent = semester;
        document.getElementById('detail-area').textContent = course.area;
        document.getElementById('detail-credits').textContent = course.credits;
        
        const prerequisites = course.prerequisites && course.prerequisites.length > 0 
            ? course.prerequisites.join(', ') 
            : 'Ninguno';
        document.getElementById('detail-prerequisites').textContent = prerequisites;
        
        courseDetail.style.display = 'block';
    }
    
    // Event listeners
    toggleInfoBtn.addEventListener('click', () => {
        infoPanel.style.display = 'block';
    });
    
    closeInfoBtn.addEventListener('click', () => {
        infoPanel.style.display = 'none';
    });
    
    resetViewBtn.addEventListener('click', () => {
        generateCurriculum();
    });
    
    closeDetailBtn.addEventListener('click', () => {
        courseDetail.style.display = 'none';
    });
    
    // Cerrar paneles al hacer clic fuera de ellos
    window.addEventListener('click', (event) => {
        if (event.target === infoPanel) {
            infoPanel.style.display = 'none';
        }
        if (event.target === courseDetail) {
            courseDetail.style.display = 'none';
        }
    });
    
    // Inicializar la malla
    generateCurriculum();
});

  malla.appendChild(div);
});
