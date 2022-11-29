//Your code comes  here

// Example
// let anArray  = ["item1", "item2"];
// let theCallBackFunction = function (itemAsParameter){
//   console.log(itemAsParameter);
// }
// anArray.forEach(theCallBackFunction);
// or it is possible to give directly the function to the forEach:

// let anArray  = ["item1", "item2"];
// anArray.forEach(function (itemAsParameter){
//   console.log(itemAsParameter);
// });

let favMovies = [
	{
		title: "Luca"
		, year: 2021
		, rating: 7.4
		, description: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human."
		, directors: "Enrico Casarosa"
		, writers: ["Enrico Casarosa", "Jesse Andrews", "Simon Stephenson"]
		, stars: ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman"]
		, genres: ["Animation", "Adventure", "ComedyFamily", "Fantasy"]
	}, {
		title: "Zootopia"
		, year: 2016
		, rating: 8
		, description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
		, directors: ["Byron Howard", "Rich MooreJared Bush"]
		, writers: ["Byron Howard", "Rich Moore", "Jared Bush"]
		, stars: ["Ginnifer Goodwin", "Jason Bateman"]
		, genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Mystery"]
	}
	, {
		title: "Vaiana"
		, year: 2016
		, rating: 7.6
		, description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
		, directors: ["Ron Clements", "John Musker", "Don Hall"]
		, writers: ["Ron Clements", "John Musker", "Don Hall"]
		, stars: ["Auli'i Cravalho", "Dwayne Johnson"]
		, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
	}

	, {
		title: "Frozen"
		, year: 2013
		, rating: 7.4
		, description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
		, directors: ["Chris Buck", "Jennifer Lee"]
		, writers: ["Jennifer Lee", "Chris Buck"]
		, stars: ["Kristen Bell", "Indina Menzel"]
		, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
	}
];

// forEach
console.log("------------------forEach------------------")

const myFirstFunction = (movie) => {
	console.log(movie.title);
}
favMovies.forEach(myFirstFunction);

// Callback breakdown
console.log("-------------Callback breakdown-------------")

// const moviesList = (movie, titleLogger) => {
// 	Object.values(movie).forEach(val => { 
// 		titleLogger(val.title);
// })
// }

// const titleLogger = (favMovies) => { 
// 	console.log(favMovies); 
// };

// moviesList(favMovies, titleLogger);

// version 2

// const moviesList = (movie, titleLogger) => {
// 	Object.values(movie).forEach(val => { 
// 		titleLogger(val.title);
// })
// }

// const titleLogger = (favMovies) => { 
// 	console.log(favMovies); 
// };

// moviesList(favMovies, titleLogger);

// Timeout
console.log("---------------Timeout---------------")

function moviesList(movies, titleLogger) {
    let timeOut = 1000;
    Object.values(movies).forEach(val => {
        setTimeout(() => {
            titleLogger(val.title);
          }, timeOut)
          timeOut += 1000
        })
}

const titleLogger = (favMovies) => { 
	console.log(favMovies); 
};

moviesList(favMovies, titleLogger);



































// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{ name: "favMovies", content: favMovies, type: "array" },
		{ name: "moviesList", content: moviesList, type: "function" },
		{ name: "titleLogger", content: titleLogger, type: "function" },
	]
} catch (error) {

	toExport = { error: error.message }

}

export { toExport };
