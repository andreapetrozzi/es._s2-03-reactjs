### Description
Route Navigation for Neftlix React

Knowledge about the `react-router-dom` to your Netflix app. 
Remember to install the npm package with `npm i react-router-dom``

1. Create a Route for a `TVShows` component. A simple static route, without parameters.
   Mount a component of your choice on this page. Ex. `/tv-shows`;

2 Add a Link to the `TVShows` page in the application's Navbar, to navigate through it conveniently;

3. Create a parametric route to mount a `MovieDetails` component.
   It should allow to receive an id parameter from the URL. Ex. /movie-details/:movieId

4. Create `MovieDetails` component to display individual movie details and comments. This information will have to be fetched every time the MovieDetails component is mounted; you will need to fetch the movieId from the URL (to retrieve both the movie details and its comments you will need to perform two fetches: one to omdbAPI and one to our internal API). In each `SingleMovie` component add a button; it will be used to navigate to its detail page, using the parametric route created above. Enter the movie id in the URL.
    
5. Change the behavior of the SearchBar: if the user is on the TVShows page, the placeholder should become: "Search TV Series..."
   If you haven't already, improve your browsing by adding loaders and error handling

### API Docs:
OMDB file
Register at http://www.omdbapi.com/
Once done you will receive an email with your API Key.
The endpoint to obtain the details of a film will be as follows:

http://www.omdbapi.com/?apikey=[PUT_YOUR_API_KEY_HERE]&i=tt0241527

The call returns an object similar to this:

     {
         "Title": "Harry Potter and the Sorcerer's Stone",
         "Year": "2001",
         "Rated": "PG",
         "Released": "16 Nov 2001",
         "Runtime": "152 mins",
         "Genre": "Adventure, Family, Fantasy",
         "Director": "Chris Columbus",
         "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
         "Actors": "Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets",
         "Plot": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
         "Language": "English",
         "Country": "UK, USA",
         "Awards": "Nominated for 3 Oscars. Another 17 wins & 62 nominations.",
         "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
         "Ratings": [
             {
                 "Source": "Internet Movie Database",
                 "Value": "7.6/10"
             },
             {
                 "Source": "Rotten Tomatoes",
                 "Value": "81%"
             },
             {
                 "Source": "Metacritic",
                 "Value": "64/100"
             }
         ],
         "Metascore": "64",
         "imdbRating": "7.6",
         "imdbVotes": "572,463",
         "imdbID": "tt0241527",
         "Type": "movie",
         "DVD": "28 May 2002",
         "BoxOffice": "$317,557,891",
         "Production": "Warner Bros. Pictures",
         "Website": "http://movies.warnerbros.com/awards/harry.html",
         "Response": "True"
     }

     
### COMMENTS

Do you have a CRUD endpoint for comments on:

https://striveschool-api.herokuapp.com/api/comments/

This means you can GET, DELETE, POST, PUT data from there.

### ❗❗❗ IMPORTANT ❗❗❗
You will need to use Authentication headers
get a new token at https://strive.school/studentlogin if the previous one has expired)

The comment is structured as an object in this way:

     {
       "comment": string
       "rates": string,
       "elementId": string
     }

     Where:
         comment is the text of the comment entered by the user
         rate is the value between 1 and 5
         elementId is the imdbID of the movie

     Example:

     {
       "comment": "A good movie but definitely I don't like many parts of the plot"
       "rates": "3",
       "elementId": "tt0076759"
     }

     
### WARNING
Do a GET on
https://striveschool-api.herokuapp.com/api/comments/
will return ALL comments to database.
You'll probably be primarily interested in receiving comments for a single movie at a time:
to do this you will need to specify the imdbID of the movie in your URL:

https://striveschool-api.herokuapp.com/api/comments/:elementId

Example:

https://striveschool-api.herokuapp.com/api/comments/tt0076759 will find the comments of a single movie.


### Terminal Command
- `npm i bootstrap@4.6.1`;
- `npm i react-bootstrap@1.6.5`;
- `npm i react-router-dom`







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
