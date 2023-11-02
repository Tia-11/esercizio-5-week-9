import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
   const [movieDetails,setMovieDetails] = useState(null)
   const [comments, setComments] = useState([])

   const fetchMovieDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=f28573be&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dettagli del film:", error);
      });
  };


  const fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQxMDk1YmIxODE2MzAwMTRjOGZmODciLCJpYXQiOjE2OTg5Mzg3OTIsImV4cCI6MTcwMDE0ODM5Mn0.G8_tGrFZyRe7IUKBcRn0yQw-wMDqIMh7DxEi29ZgyAo"
            }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setComments(data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei commenti:", error);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchComments();
  }, [movieId]);

  

  if (movieDetails === null) {
    return <p>Caricamento in corso...</p>;
}

  
   return(
    
    <div className="text-white ms-5">
    <h1 className="mb-3">{movieDetails.Title}</h1>
    <img src={movieDetails.Poster} alt={movieDetails.Title} />
    <p className="mt-4">{movieDetails.Plot}</p>

    <h2>Commenti:</h2>
    <ul>
      {comments.map((comment) => (
        <li key={comment._id}>
          <p>Commento: {comment.comment}</p>
          <p>Valutazione: {comment.rate}</p>
        </li>
      ))}
    </ul>
  </div>
   )
}

export default MovieDetails