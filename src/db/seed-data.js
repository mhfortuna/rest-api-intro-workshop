const {personModel} = require("../models");

function getSeedMovieGenres() {
  return [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime and mystery",
    "Drama",
    "Fantasy",
    "Historical",
    "Horror",
    "Romance",
    "Satire",
    "Science Fiction",
    "Thriller",
    "Western",
  ];
}

async function getSeedMovies() {
const marlonBrando = await getPersonIdObject("Marlon Brando");
const francisFordCoppola = await getPersonIdObject("Francis Ford Coppola");
const alPacino = await getPersonIdObject("Al Pacino");
const jamesCaan = await getPersonIdObject("James Caan");
const robertDeNiro = await getPersonIdObject("Robert De Niro");
const joePesci = await getPersonIdObject("Joe Pesci");
const martinScorsese = await getPersonIdObject("Martin Scorsese");
const bradPitt = await getPersonIdObject("Brad Pitt");
const edwardNorton = await getPersonIdObject("Edward Norton");
const meatLoaf = await getPersonIdObject("Meat Loaf");
const davidFincher = await getPersonIdObject("David Fincher");
const tomHanks = await getPersonIdObject("Tom Hanks");
const robinWright = await getPersonIdObject("Robin Wright");
const garySinise = await getPersonIdObject("Gary Sinise");
const robertZemeckis = await getPersonIdObject("Robert Zemeckis");
const stevenSpielberg = await getPersonIdObject("Steven Spielberg");
const mattDamon = await getPersonIdObject("Matt Damon");
const tomsizemore = await getPersonIdObject("Tom Sizemore");
const frankDarabont = await getPersonIdObject("Frank Darabont");
const davidMorse = await getPersonIdObject("David Morse");
const stephenKing = await getPersonIdObject("Stephen King");
const timRobbins = await getPersonIdObject("Tim Robbins");
const morganFreeman = await getPersonIdObject("Morgan Freeman");




  return [
    {
      title: "The Shawshank Redemption",
      releaseYear: new Date("1994"),
      originalLanguage: "English",
      posterPath:
        "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/?ref_=tt_ov_i",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      budget: 25000000,
      duration: 142,
      genres: ["Drama"],
      cast: [morganFreeman, timRobbins],
      crew: [frankDarabont, stephenKing],
    },
    {
      title: "The Green Mile",
      releaseYear: new Date("1999"),
      originalLanguage: "English",
      posterPath:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuvf_VftTT1yl108n-djjrs73_e6Rzx6iIeZLt8V7W66XxNfmx",
      plot: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      budget: 60000000,
      duration: 188,
      genres: ["Drama", "Fantasy"],
      cast: [tomHanks, davidMorse],
      crew: [ stephenKing, frankDarabont],
    },
    {
      title: "Saving Private Ryan",
      releaseYear: new Date("1998"),
      originalLanguage: "English",
      posterPath:
        "https://images-na.ssl-images-amazon.com/images/I/41zN6HGkL1L._AC_.jpg",
      plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      budget: 70000000,
      duration: 169,
      genres: ["Drama", "Historical", "War"],
      cast: [tomHanks, mattDamon, tomsizemore],
      crew: [ stevenSpielberg ],
    },
    {
      title: "Forrest Gump",
      releaseYear: new Date("1994"),
      originalLanguage: "English",
      posterPath:
        "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg",
      plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      budget: 55000000,
      duration: 142,
      genres: ["Comedy", "Drama"],
      cast: [tomHanks, robinWright, garySinise],
      crew: [robertZemeckis],
    },
    {
      title: "Fight Club",
      releaseYear: new Date("1999"),
      originalLanguage: "English",
      posterPath:
        "https://pics.filmaffinity.com/fight_club-320750671-large.jpg",
      plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      budget: 63000000,
      duration: 139,
      genres: ["Drama"],
      cast: [ bradPitt, edwardNorton, meatLoaf],
      crew: [davidFincher],
    }, {
      title: "The Godfather",
      releaseYear: new Date("1972"),
      originalLanguage: "English",
      posterPath:
        "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/?ref_=tt_ov_i",
      plot: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      budget: 6000000,
      duration: 175,
      genres: ["Drama", "Crime and mystery"],
      cast: [ marlonBrando, alPacino, jamesCaan],
      crew: [francisFordCoppola],
    }, {
      title: "The Irishman",
      releaseYear: new Date("2019"),
      originalLanguage: "English",
      posterPath:
        "https://www.imdb.com/title/tt1302006/mediaviewer/rm2556990465/?ref_=tt_ov_i",
      plot: "Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.",
      budget: 159000000,
      duration: 209,
      genres: ["Drama", "Crime and mystery"],
      cast: [ alPacino, robertDeNiro, joePesci],
      crew: [martinScorsese],
    },
  ];
}

function getSeedPeople() {
  return [
    {
      name: "Francis Ford Coppola",
      dateOfBirth: new Date("1939-04-07"),
      placeOfBirth: "Detroit, Michigan, USA",
      roles: ["director", "writer", "producer"]
    },{
      name: "Marlon Brando",
      dateOfBirth: new Date("1924-04-03"),
      placeOfBirth: "Omaha, Nebraska, USA",
      roles: ["actor", "director"]
    },{
      name: "Al Pacino",
      dateOfBirth: new Date("1940-04-25"),
      placeOfBirth: "Manhattan, New York City, New York, USA",
      roles: ["actor", "producer", "director"]
    },{
      name: "James Caan",
      dateOfBirth: new Date("1940-03-26"),
      placeOfBirth: "The Bronx, New York, USA",
      roles: ["director", "actor"]
    },{
      name: "Robert De Niro",
      dateOfBirth: new Date("1943-08-17"),
      placeOfBirth: "New York City, New York, USA",
      roles: ["actor", "producer", "director"]
    },{
      name: "Joe Pesci",
      dateOfBirth: new Date("1943-02-09"),
      placeOfBirth: "Newark, New Jersey, USA",
      roles: ["actor"]
    },{
      name: "Martin Scorsese",
      dateOfBirth: new Date("1942-11-17"),
      placeOfBirth: "Queens, New York City, New York, USA",
      roles: ["actor", "producer", "director"]
    },{
      name: "Brad Pitt",
      dateOfBirth: new Date("1963-12-18"),
      placeOfBirth: "Shawnee, Oklahoma, USA",
      roles: ["producer", "actor"]
    },{
      name: "Edward Norton",
      dateOfBirth: new Date("1969-08-18"),
      placeOfBirth: "Boston, Massachusetts, USA",
      roles: ["actor", "producer", "writer"]
    },{
      name: "Meat Loaf",
      dateOfBirth: new Date("1947-09-27"),
      placeOfBirth: "Dallas, Texas, USA",
      roles: ["actor", "producer"]
    },{
      name: "David Fincher",
      dateOfBirth: new Date("1962-08-28"),
      placeOfBirth: "Denver, Colorado, USA",
      roles: ["director", "producer", "writer"]
    },{
      name: "Tom Hanks",
      dateOfBirth: new Date("1956-07-09"),
      placeOfBirth: "Concord, California, USA",
      roles: ["actor", "producer", "writer"]
    },{
      name: "Robin Wright",
      dateOfBirth: new Date("1966-04-08"),
      placeOfBirth: "Dallas, Texas, USA",
      roles: ["actress", "producer", "writer"]
    },{
      name: "Gary Sinise",
      dateOfBirth: new Date("1955-03-07"),
      placeOfBirth: "Blue Island, Illinois, USA",
      roles: ["actor", "producer", "director"]
    },{
      name: "Robert Zemeckis",
      dateOfBirth: new Date("1951-05-14"),
      placeOfBirth: "Chicago, Illinois, USA",
      roles: ["director"]
    },{
      name: "Steven Spielberg",
      dateOfBirth: new Date("1946-12-18"),
      placeOfBirth: "Cincinnati, Ohio, USA",
      roles: ["director", "producer", "writer"]
    },{
      name: "Matt Damon",
      dateOfBirth: new Date("1970-10-08"),
      placeOfBirth: "Boston, Massachusetts, USA",
      roles: ["producer", "actor", "writer"]
    },{
      name: "Tom Sizemore",
      dateOfBirth: new Date("1961-11-29"),
      placeOfBirth: "Detroit, Michigan, USA",
      roles: ["writer", "actor", "producer"]
    },{
      name: "Frank Darabont",
      dateOfBirth: new Date("1959-01-28"),
      placeOfBirth: "Montbéliard, Doubs, France",
      roles: ["director", "writer", "producer"]
    },{
      name: "David Morse",
      dateOfBirth: new Date("1953-10-11"),
      placeOfBirth: "Hamilton, Massachusetts, USA",
      roles: ["director", "actor", "producer"]
    },{
      name: "Stephen King",
      dateOfBirth: new Date("1947-09-21"),
      placeOfBirth: "Portland, Maine, USA",
      roles: ["writer", "producer", "actor"]
    },{
      name: "Tim Robbins",
      dateOfBirth: new Date("1958-10-16"),
      placeOfBirth: "West Covina, California, USA",
      roles: ["director", "actor", "producer"]
    },{
      name: "Morgan Freeman",
      dateOfBirth: new Date("1937-06-01"),
      placeOfBirth: "Memphis, Tennessee, USA",
      roles: ["director", "actor", "producer"]
    },
  ];
}

async function getPersonIdObject(name) {
  return idObj = await personModel.findOne({name: name}, {_id: 1});


}

module.exports = {
  getSeedMovies: getSeedMovies,
  getSeedMovieGenres: getSeedMovieGenres,
  getSeedPeople: getSeedPeople
};