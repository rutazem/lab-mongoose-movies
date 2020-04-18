

const mongoose = require('mongoose');
//const Celebrity = require('../models/celebrity-model');
const Movie = require('../models/movie-model')

mongoose.connect(`mongodb://localhost/lab-mongoose-movies`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// celebrities = [

//   {
//     name: "Beyonce",
//     occupation: 'Singer',
//     catchPhrase: 'I woke up like this',
//   },


//   {
//     name: 'Keanu Reeves',
//     occupation: 'Actor',
//     catchPhrase: 'I know kung-fu',
//   },


//   {
//     name: 'J.K. Rowling',
//     occupation: 'Author',
//     catchPhrase: 'Read my book',
//   }
// ]

// Celebrity.create(celebrities).then(() => {
//   console.log(`Created celebrities: ${celebrities} `);
//   mongoose.connection.close();
// });


movies = [

  {
    title: "Titanic",
    genre: "Drama",
    plot: "Sinks",
  },


  {
    title: "Avatar",
    genre: "Adventure",
    plot: "VR",
  },


  {
    title: "Matrix",
    genre: "SCIFI",
    plot: "Complicated",
  }
]

Movie.create(movies).then(() => {
  console.log(`Created movies: ${movies.body} `);
  mongoose.connection.close();
});
