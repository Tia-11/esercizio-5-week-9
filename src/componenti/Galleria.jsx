import { Component } from "react";

class Galleria extends Component {

    state = {
        movies: []
    }

     PrendiFilm = () => {
    fetch(`http://www.omdbapi.com/?apikey=f28573be&s=${this.props.films}`)
    .then((res) =>  {
        if(res.ok) {
            return res.json()
        } else {
            throw new Error ('errore')
        }
    })

    .then((data) => {
      console.log(data)
      this.setState({ movies: data.Search})
      
    })
    .catch((error) => {
      console.error("Errore durante il recupero dei dati: ", error);
    });
 }

 componentDidMount(){
    this.PrendiFilm()
 }

    

 render() {
    return(
      <div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 mb-4 me-2 ms-2 ">
          {this.state.movies.map((movie) => {
            return (
            <div key={movie.imdbID} className="col mb-2 text-center px-1 " >
              <img
                style={{width:'20em',height:'30em', objectFit: 'cover'}}
                className="img-fluid "
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
            )
            })
          }
        </div>
      </div>
    );
  }
}


export default Galleria 