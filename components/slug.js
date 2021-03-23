import React from 'react';
import { Collapse } from "./collapse";
import { PriceFormated } from './helper';
import dayjs from "dayjs";

export const Slug = ({property}) => {
    return (
        <div className="mt-4">
            <h2 className="text-dark">{property.title}</h2>
            <hr className="my-3" />
            <div><strong>Categorie: </strong> {property.category.name}</div>
            <div> <strong>Address: </strong> {property.address}</div>
            <hr className="my-2" />
            <div className="description mt-4 mb-3">
                {property.description}
                <Collapse titre="Adresse de la Proprieté">
                    <section className="mt-4 pl-3">
                        <div>
                            <span className="font-weight-bolder" >Ville : </span> {property.city }
                        </div>
                        <div>
                            <span className="font-weight-bolder" >Adresse :</span> {property.address }
                        </div>
                        <div>
                            <span className="font-weight-bolder" >Region : </span>Monde
                        </div>
                    </section>
                </Collapse>
                <Collapse titre="Details de la Proprieté">
                    <section className="mt-4 pl-3">
                        <div>
                            <span className="font-weight-bolder" >Surface: </span> {property.surface }
                        </div>
                        <div>
                            <span className="font-weight-bolder" >Prix :</span> {PriceFormated(property.price) }
                        </div>
                        <div>
                            <span className="font-weight-bolder" >Chambre : </span> {property.bedrooms}
                        </div>
                        <div>
                            <span className="font-weight-bolder" >Catégorie : </span> {property.category.name}
                        </div>
                        <div>
                            <span className="font-weight-bolder" >Date de création : </span> {dayjs(property.createdAt).format("DD/MM/YYYY à HH:mm:ss") }
                        </div>
                    </section>
                </Collapse>
            </div>
            <style jsx>
                {
                `
                    .description{
                        white-space: pre-line
                     } 
                `
                }
                
            </style>
        </div>

    );
}

