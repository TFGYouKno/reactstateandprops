import { useState } from "react";


const MovieTitleFunction = () => {
    const [movieTitles, setTitles] = useState(['Nightmare on Elm St', 'Inglorious Basterds', 'The Strangers', 'A Serbian Film'])
    
    const [movieDescriptions, setDescrip] = useState(['A group of teenagers try to escape a supernatural killer who is able to murder them in their dreams', 'An alternate universe where a specially comprised task force manages to take out Hitler and end WWII early','A family is trapped inside their house and must survive a group of masked killers bent on eliminating them one by one', 'Ask yourself, what is the worst thing the average person could possibly imagine? That is the entire plot of this movie. Do not watch it. Do not do it to yourself. There is nothing to be gained, and only your time and possible stomach contents to lose.'])

    const [selectedMovie, setSelectedMovie] = useState(-1)

    const deleteMovie = (index) => {
        setTitles(movieTitles.filter((movie, x) => x !== index));
        setDescrip(movieDescriptions.filter((movie, x) => x !== index));
    }

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movieTitles.map((title, index) => (
                    index == selectedMovie ?
                    <>
                    <li onClick={() => setSelectedMovie(index)} key={index}>{title}<button onClick={() => deleteMovie(index)}>Remove</button></li>
                    <p>{movieDescriptions[selectedMovie]}</p>
                    </>
                    : <li onClick={() => setSelectedMovie(index)} key={index}>{title}<button onClick={() => deleteMovie(index)}>Remove</button></li>
                    ))}
            </ul>
        </div>
    )
}


export default MovieTitleFunction