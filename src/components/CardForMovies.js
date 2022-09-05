import React from 'react';
import PropTypes from 'prop-types';

function CardForMovies(props) {
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.colorBorde} shadow py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cantidad}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CardForMovies.propTypes = {
    colorBorde: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    icon: PropTypes.oneOf(['fa-film', 'fa-award', 'fa-user']).isRequired,
};

CardForMovies.defaultProps = {
    cantidad : 0,
    colorBorde : 'success'
}

export default CardForMovies;