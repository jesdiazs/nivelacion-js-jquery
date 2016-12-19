$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for(i=0; i< recipesArray; i++){
		if('highlighted'== true){
			console.log('Recipes: ', recipesArray);
		}
	}
	
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

/*Etapa 1: funcion para ocultar iconos */


$(document).ready(function(){
	$('#ocultaItem').hide(function(){
		$('span').onload();
	});
});  

/* Etapa 2: funcion para pintar noticia*/

$(document).ready(function printNews(){
  	$('#addNews').html('"NUEVAS RECETAS"');
	
});

/*Etapa 3:* verificar funcion renderHighlightedRecipes que esta arriba /
