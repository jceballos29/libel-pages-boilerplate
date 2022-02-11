import React from 'react'
import "../css/Categories.css"

import flag from "../images/flag.png"
import badge from "../images/badge.png"

const Categories = () => {
    return (
        <section className="Categories" id="categories">
            <div className="categories-container container">
                <h1>CATEGORÍAS</h1>
                <p className="categories-legend">
                    Si no estás seguro(a) de tu categoría, no te preocupes;
                    después de inscribirte recibirás un formulario de
                    inscripción en donde encontrarás una guía para que puedas
                    revisar si estás escogiendo la categoría correcta en cada
                    entrenamiento.
                </p>
                <div className="categories-content padding">
                    <div className="category">
                        <div className="category-emblem">
                            <img src={flag} alt="Junior" />
                        </div>
                        <div className="category-info">
                            <h2 className="category-name">Junior</h2>
                            <p className="category-description">
                                En esta categoría podrás estar si te encuentras
                                en cero, principiante o nivel muy básico.
                            </p>
                        </div>
                    </div>

                    <div className="category">
                        <div className="category-emblem">
                            <img src={badge} alt="Evolution" />
                        </div>
                        <div className="category-info">
                            <h2 className="category-name">Evolution</h2>
                            <p className="category-description">
                                En esta categoría podrás estar si te encuentras
                                en nivel básico consolidado en adelante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories
