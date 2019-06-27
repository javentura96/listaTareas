(function(){
	//crear variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	//Funciones

	//agregar tarea
	var agregarTarea = function(){
		var tarea = tareaInput.value;
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea)

		if(tarea === ""){
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for(i = 0; i <= lista.children.length -1; i++){
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		};
	};

	//comprobarInput
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute = ("placeholder", "Escribe una nueva tarea");
	};

	//eliminar tarea
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};


	//eventos
	//click agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
	tareaInput.addEventListener("click", comprobarInput);

	for (var i=0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	};

}())