import React from 'react';
import { MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { PriceFormated } from "./helper";

export const PropertySection = ({properties}) => {
    return (
        <>
            <h2 className="font-weight-bold h2-responsive text-center my-4">Notre catalogue</h2>
            <MDBRow>
                {
                    properties && properties.map(property => (
                        <MDBCol md="4" lg="4" key={property._id}>
                             <div className='bg-image hover-zoom ' style={{ maxWidth: '22rem' }}>
                                <MDBCardImage className="globalImg " src={property.pictures[0]} alt={property.title} /> 
                            </div>
                     
                            <MDBCardBody>
                                <MDBCardTitle>{property.title}</MDBCardTitle>
                                <MDBCardText>
                                    <span className="font-weight-bold">{PriceFormated(property.price)}</span>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    ))
                }
            </MDBRow>
            <div className="text-center mt-3">
                <MDBBtn outline rounded color="dark">
                    Afficher plus
                </MDBBtn>
            </div>
            <hr className="my-5" />
        </>
    );
}


