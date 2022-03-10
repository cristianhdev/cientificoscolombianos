
let video;

let filterBoton = null

let botones = [
    '.contenedor-imagen-c1',
    '.contenedor-imagen-c2',
    '.contenedor-imagen-c3',
    '.contenedor-imagen-c4',
    '.contenedor-imagen-c5',
    '.contenedor-imagen-c6',
    '.contenedor-imagen-c7',
    '.contenedor-imagen-c8',
    '.contenedor-imagen-c9'
]

let cientificos = [
    {
        texto:
            `<div>
                <h1>Adriana Ocampo</h1>
                <div class="descripcion">
                    
                    <div class="adriana animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                    <p>Esta extraudinaria mujer, nacida en Colombia y criada en Argentina, está vinculada desde 1973 con el prestigioso Jet PropulsionLaboratory (JPL), encargado de controlar las misiones espaciales de la NASA. Por cierto, ha trabajado activamente en muchas de ellas, incluidas las misiones Voyager y Galileo, dos de las más exitosas de toda la historia de la exploración espacial.</p>
                    <p>Su lista de logros es tan impresionante, qué lo único que podemos hacer en esta breve nota es resumir los más destacados. En 1992 fue galardonada como la Mujer de Año en la Ciencia por la "Comision Femenil" de los Angeles. En 1994 fue la única cientifica seleccionada por el JPL para presentarlo en la Conferencia de Liderazgo para Mujeres en la Ciencia y la Ingenieria, en Washington DC. Y en 2002, fue destacada como una de las mujeres más importantes en la Ciencia por la revista Discover.</p>
                    </div>
                </div>
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Emilio Yunis</h1>
                <div class="descripcion">
                    
                    <div class="emilio animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                    <p>Nacido en Sincelejo (departamento de Sucre) es un genetista Colombiano, miembro del Department of CancerImmunology and AIDS en el DanaFarberCancerInstitute y profesor de patología en el Harvard Medical School y antiguo Chief of Division of Immunogenetics en el Dana-FarberCancerInstitute en Boston, Massachussets.</p>
                    <p>El 22 de octubre de 2005 fue elegido cientifico hispano del año en Estados Unidos. Yunis es considerado el padre de la genética humana y de la genética médica en Colombia y en América Latina. Sus trabajos en genética le han servido para explicar cientificament la historia y regionalismo de Colombia.</p>
                    </div>
                </div>
               
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Jorge Reynolds</h1>
                <div class="descripcion">
                    
                    <div class="reinolds animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                    <p>Es un ingeniero Colombiano nacido en (Bogota 22 de junio de 1936), conocido mundialmente por ser el inventor del primer marcapasos artificial externo con electrodos internor, en 1958.</p>
                    <p>El trabajo de Reynolds ha sido valorado mundialmente []. Ha obtenido tres doctorados honoris causa en medicina, po sus aportes a la investigación y al desarrollo de tecnologías para la cardiología. Además, se suman más de 70 producciones entre documentales, corto y medio metrajes realizados con la ayuda de importante canales cientificos como NationalGeographic y DiscoveryChannel. entre otros.</p>
                    <p>Es miembro de 42 sociedades cientificas en Colombia y el exterior; en algunas de ellas como miembro honorario. Es miembro de la Academia de Ciencias de Nueva York desde 1989, miembro de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales también desde 1989 y miembro Asociado de la Academia Nacional de Medicina desde el año 2004. También es miembro fundador de varias sociedades cientificas.</p>
                </div>

            </div>
                
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Salomón Hakim</h1>
                <div class="descripcion">
                    
                    <div class="salomon animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                        <p>(Barranquilla 4 de junio de 1929 - Bogotá 5 de mayo de 2011) fue un médico e investigador Colombiano, descendiente de inmigrandes libaneses, conocido por su trabajo en el campo de la neurocirugía.</p>
                        <p>Se desempeñó como profesor e investigador dentro de distintas ramas de la medicina, como la fisica médica, la neurocirugía y la ingenieria biomédica, en universidades Colombianas.</p>
                        <p>Hakim es conocido por describir la hidrocefalia normotensiva, cuadro clínico conocido como Sindrome de Hakim asi como por haber inventado la válvula de derivación ventriculoperitoneal que lleva su nombre, utilizada en el tratamiento quirúrgico de la hidrocefalia.</p>
                        <p>Posee, asimismo, alrededor de 30 patentes por inventos. El Dr. Hakim fallecio el 5 de mayo de 2011 a la madrugda debido a una reaccion indesperada a un anticuagulante inyectado para tratar una patología que padecía en una de sus piernas.</p>
                     </div>
                </div>
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Nubia Muñoz</h1>
                <div class="descripcion">
                    
                    <div class="nubia animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                    <p>Nuria Muñoz Calero, que en 1964 se graduó de la Facultad de Medicina de la Universidad del Valle, ha realizado investigación epidemiológica en casi todos los tipos de cánceres también ha trabajado en la supervisión de ensayos clínicos de una vacuna contra el virus del papiloma humano, para demostrar su eficacia en la prevención del cáncer de cuello uterino, el más frecuente en el ámbito mundial entre las mujeres. Gracias a ese trabajo fue nominada al premio Nobel. </p>
                    </div>
                </div>
                
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Rodolfo Linas</h1>
                <div class="descripcion">
                        
                    <div class="rodolfo animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                        <p>Es un médico neurofisiólogo nacido en Bogotá (Colombia) en 1934. Se graduó como médico cirujano de la Pontificia Universidad javeriana y obtuvo su doctorado en neurofisiología en la Universidad Nacional de Australia.</p>
                        <p>Actualmente es profesor de neurociencia en la Escuela de Medicina de la Universidad de Nueva York, en la que es además director del departamento de Physiology&Neuroscience, y desempeña la cátedra “Tomás y Suzanne Murphy” en el centro médico de la Universidad de Nueva York. Dirigió el programa del grupo de trabajo científico “Neurolab” de la NASA. Entre las distintas aportaciones por las por las que es conocido se encuentra en sus trabajos sobre fisiología comparada del cerebelo, las propiedades electrofisiológicas intrínsecas de las neuronas con la enunciación de la hoy conocida como la “Ley de Linás”, y sobre la relación entre la actividad cerebral y la conciencia. </p>
                    </div>
                 </div>
               
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Raúl Cuero</h1>
                <div class="descripcion">
                        
                    <div class="raulcuero animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                        <p>Es un micro-biólogo e inventor colombiano especializado en biogénesis. Desarrolló una sustancia que despierta los genes dormidos de las células vegetales y genera resistencia al ataque microbacterial y el aumento del contenido proteínico. La patente fue comprada por la Vason-DuPont. Sus observaciones del suelo de Marte le llevaron a descubrir que este puede ser importante para limpiar la tierra de elementos tóxicos, evidencias que le han ganado un gran prestigio en el mundo científico. </p>
                        <p>El Dr. Cuero se ha convertido en un reconocido científico e inventor en los Estados Unidos y a nivel internacional. Su trabajo posterior sobre la biogénesis, es la investigación que ha disfrutado al máximo, porque tiene que ver con la vida misma y la imprevisibilidad de lo desconocido, como él afirma. Ha escrito el libro “El triunfo y la supervivencia”, basado en sus 20 años de experiencia en el campo de la ciencia, los descubrimientos e inventos como y exploraciones a través de la vuelta al mundo. </p>
                    </div>
                </div>

                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Manuel Patarroyo</h1>
                <div class="descripcion">
                        
                    <div class="patarroyo animate__animated animate__bounceIn animate__delay-1s"> 
                        
                    </div>
                    <div>
                    <p>Patarroyo (Atacó, Tolima, Colombia, 3 de noviembre de 1946) es un inmunólogo colombiano. Culminó sus estudios de bachillerato en el Colegio José Max León. Posteriormente ingresó a la Universidad Nacional de Colombia para estudiar medicina dónde empezaría una brillante carrera en el campo científico. Obtuvo su doctorado en la Universidad Rockefeller de Nueva York. hizo el primer intento para fabricar una vacuna sintética para la malaria, enfermedad transmitida por mosquitos y que afecta a millones de personas en regiones tropicales y subtropicales de América, Asia y África. Desarrollada por primera vez en 1987, fue evaluada en pruebas clínicas de la Organización Mundial de la salud en Gambia, Tanzania y Tailandia, sin resultados concluyentes. en 2009, un completo estudio de la Cochrane Library concluyó que la vacuna SPf66 no era eficaz en África y Asia y que tenía una eficacia muy baja 28% en Sudamérica. A la fecha, después de más de 33 años de investigación, la vacuna SPf66 no es recomendada para la profilaxis de la malaria. En la página sobre vacunas para la malaria de la Organización Mundial de la salud aparece como “inactiva o descontinuada”. </p>
                    </div>
                </div>

                
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    },
    {
        texto:
            `<div>
                <h1>Angela Restrepo</h1>
                <div class="descripcion">
                        
                <div class="angela animate__animated animate__bounceIn animate__delay-1s"> 
                    
                </div>
                <div>
                <p>Patarroyo (Atacó, Tolima, Colombia, 3 de noviembre de 1946) es un inmunólogo colombiano. Culminó sus estudios de bachillerato en el Colegio José Max León. Posteriormente ingresó a la Universidad Nacional de Colombia para estudiar medicina dónde empezaría una brillante carrera en el campo científico. Obtuvo su doctorado en la Universidad Rockefeller de Nueva York. hizo el primer intento para fabricar una vacuna sintética para la malaria, enfermedad transmitida por mosquitos y que afecta a millones de personas en regiones tropicales y subtropicales de América, Asia y África. Desarrollada por primera vez en 1987, fue evaluada en pruebas clínicas de la Organización Mundial de la salud en Gambia, Tanzania y Tailandia, sin resultados concluyentes. en 2009, un completo estudio de la Cochrane Library concluyó que la vacuna SPf66 no era eficaz en África y Asia y que tenía una eficacia muy baja 28% en Sudamérica. A la fecha, después de más de 33 años de investigación, la vacuna SPf66 no es recomendada para la profilaxis de la malaria. En la página sobre vacunas para la malaria de la Organización Mundial de la salud aparece como “inactiva o descontinuada”. </p>
                </div>
            </div>
                <div>
                    <div class="contenedor-volver">
                        <div class="button" onclick="reiniciarAnimacion()">VOLVER</div>
                    </div>
                 </div>
            </div>`
    }
]


function init() {

}


function cargarActividad(){
    document.querySelector('.bienvenida').style.display='none'
    document.querySelector('.contenido-actividad-bienvenida').style.display='block'
}

function animarBotonClick(boton) {
    filterBoton = botones[boton]
    let botonesOriginal = botones;

    botonesOriginal.splice(boton, 1)

    gsap.fromTo(botonesOriginal, { alpha: 1 }, {
        alpha: 0, duration: .2, ease: Linear.easeNone, onComplete: () => {


            gsap.to(filterBoton, {
                alpha: 0, x: '-=' + window.width / 2, y: '-=' + window.height / 2, duration: 0.6, scaleX: 1.6, scaleY: 1.6, ease: Linear.easeNone, onComplete: () => {
                    document.querySelector('.texto-imagenes').style.display = 'flex'
                    document.querySelector('.texto-imagenes').style.opacity = '1'
                    document.querySelector('.texto-descripcion').innerHTML = cientificos[boton].texto
                    setTimeout(() => {
                        document.querySelector('.contenedor-volver').style.visibility = 'visible'

                    }, 1200);
                }
            });
        }
    });

}

function reiniciarAnimacion() {
    //texto-imagenes
    gsap.to(document.querySelector('.texto-imagenes'), {
        alpha: 0, duration: 1, scaleX: 1.3, scaleY: 1.3, ease: Linear.easeNone, onComplete: () => {
            gsap.to(filterBoton, {
                alpha: 1, duration: 1, scaleX: 1, scaleY: 1, ease: Linear.easeNone, onComplete: () => {
                    document.querySelector('.texto-imagenes').style.display = 'none'
                    document.querySelector('.texto-descripcion').innerHTML = ''
                    botones.forEach(element => {
                        document.querySelector(element).style.display = 'block'
                        gsap.fromTo(element, { alpha: 0 }, {
                            alpha: 2, duration: .2, ease: Linear.easeNone, onComplete: () => {
                            }
                        })
                    });
                   
                    botones = [
                        '.contenedor-imagen-c1',
                        '.contenedor-imagen-c2',
                        '.contenedor-imagen-c3',
                        '.contenedor-imagen-c4',
                        '.contenedor-imagen-c5',
                        '.contenedor-imagen-c6',
                        '.contenedor-imagen-c7',
                        '.contenedor-imagen-c8',
                        '.contenedor-imagen-c9'
                    ]
                    filterBoton = ''
                }
            });


        }
    });




}





// Get the modal
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

/* span.addEventListener('click', ocultarModal); */
window.addEventListener('click', ocultarModalVentana)

function ocultarModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function MostrarVideo() {
    modal.style.display = "flex";
}

function OcultarVideo() {
    video.currentTime = 0
    videoMobile.currentTime = 0
    video.pause()
    videoMobile.pause()
    modal.style.display = "none";
}

function ReproducirVideo(e) {
    video.play()
    document.querySelector('#videoOthers').classList.add("disabledbutton")
    video.addEventListener('ended', function (e) {

        document.querySelector('#videoOthers').classList.remove("disabledbutton")

    })
}
