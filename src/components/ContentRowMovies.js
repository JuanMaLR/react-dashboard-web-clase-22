import React from 'react';
import CardForMovies from './CardForMovies';

const movieProps = [
    {title:"Movies in Data Base", colorBorde:"primary", cantidad:21, icon:"fa-film"},
    {title:"Total awards", colorBorde:"success", cantidad:79, icon:"fa-award"},
    {title:"Actors quantity", colorBorde:"warning", cantidad:49, icon:"fa-user"},
];

function ContentRowMovies() {
    return (
        <div className="row">

            {movieProps.map((movie, index) => (
                <CardForMovies key={movie.title+index} title={movie.title} colorBorde={movie.colorBorde} cantidad={movie.cantidad} icon={movie.icon}/> 
                //<CardForMovies key={movie.title+index} {...movie} />
            ))}

        </div>
    );
}

export default ContentRowMovies;