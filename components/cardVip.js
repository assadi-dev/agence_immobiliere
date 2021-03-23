import { MDBCard,MDBCardImage } from "mdb-react-ui-kit";
import React from "react";
import { PriceFormated } from "./helper";


export const CardVip = ({ properties }) => {
    
    return (
        <>
            {
                properties && properties.map(property => (
                    <MDBCard >
                        <MDBCardImage src={property.pictures[0]} className="d-block w-100" zoom />
                        <div className="imgTop">
                            <span className="d-inline-flex vedette" >En Vedette</span>
                            <span className="d-inline-flex exclu">Exclusivité</span>
                        </div>
                        <div>
                            {
                                PriceFormated(property.price)
                            }
                        </div>
                    </MDBCard>
                ))
            }
            <style jsx>
                {` 
                    .imgTop {
                        position: absolute;
                        top: 10px;
                        left: 5px;
                    }
                    .vedette {
                        background-color: #00695c;
                        color: white;
                        text-transform: capitalize;
                        font-size: 10px;
                        font-weight: bolder;
                        border: 0px;
                        margin-right: 5px;
                    }
                    .exclu {
                        border: 0px;
                        background-color: red;
                        color: white;
                        font-weight: bolder;
                        text-transform: capitalize;
                        font-size: 10px;
                    }
                    .price {
                        position: absolute;
                        bottom: 5px;
                        left: 16px;
                        font-weight: bold;
                        color: white;
                    }
               `}
            </style>
        </>
    )
};