import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBRow,
    MDBCardImage,
    MDBFooter
} from "mdb-react-ui-kit";
import { PriceFormated } from "./helper";

export const CardRelated = ({properties}) => {
    
    return (
        <MDBRow>
            {
                properties && properties.map(property => (
                    <MDBCol className="mb-3 " md="4" lg="4" key={property._id} >
                        <MDBCard>
                            <MDBCardHeader>
                                {property.title}
                            </MDBCardHeader>
                            <MDBCardImage src={property.pictures[0]} className="globalImg" />
                            <MDBFooter className="px-3 mt-1">
                                <div className="globalColor">
                                    <strong>{PriceFormated(property.price)}</strong>
                                </div>
                                <p>
                                    <small>{property.city} , Monde</small>
                                </p>
                            </MDBFooter>
                        </MDBCard>
                    </MDBCol>
                ))
            }
        </MDBRow>
    )
}