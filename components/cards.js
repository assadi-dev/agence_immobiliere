import React from 'react';
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBBtn,MDBIcon } from "mdb-react-ui-kit";
import { PriceFormated } from './helper';
import Link from "next/link";


export const Cards = ({properties}) => {
    return (
        <div>
                <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody>
            {
                properties && properties.map(property => (
             
                
                                    <MDBRow key={property._id}>

                                        <MDBCol lg="5">
                                            <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                                <img
                                                    className="globalImg"
                                                    src={property.pictures[0]}
                                                    alt={property.title}
                                            />

                    
                                            </div>    
                                        </MDBCol>
                                    <MDBCol lg="7">
                                        <span className="text-success">
                                        <h6 className="font-weight-bold mb-3">
                                            <MDBIcon icon="university" fas className="pe-2" />
                                            {property.category.name}
                                        </h6>
                                        </span>
                                        <h3 className="font-weight-bold mb-3 p-0">
                                        <strong>{property.title}</strong>
                                        </h3>
                                        <p>
                                            {property.description.slice(0,150)}
                                        </p>
                                        <p>
                                        <strong>{PriceFormated(property.price) }</strong>
                                        </p>
                                        <p>
                                            <MDBIcon icon="city" fas className="pe-2" />
                                            <strong>{property.city}</strong>
                                        </p>
                                    <Link href="/property/[slsug]" as = {`/property/${property.slug}`} passHref >
                                        <MDBBtn color="primary" size="md" className="waves-light ">
                                                   Details
                                        </MDBBtn>
                                    </Link>

                                       
                                    </MDBCol>
                                    <hr className="my-5" />
                                </MDBRow>
                            
                        
                ))
            }
            </MDBCardBody>
            </MDBCard>
        </div>
    );
}


