import React from "react";
import api from "../../auth/axios";
import { Layout } from "../../components/layout";
import { MDBCard, MDBContainer, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import CardCarousel from "../../components/cardCarousel";
import { Slug } from "../../components/slug";
import { CardVip } from "../../components/cardVip";
import { CardRelated } from "../../components/CardRelated";

const Property = ({ property,properties,propertyRelated }) => {
    const styles = {
        fontSize: 15
    }
    return (
    <>
    {
            property && (
                <Layout >
                        <MDBContainer>
                            <MDBCard className="my-5 px-5 pb-5">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol  lg="9">
                                                <CardCarousel property={property} />
                                                < Slug property={property} />
                                        </MDBCol>
                                        <MDBCol   lg="3">
                                            <h4 className="mt-5" >Contactez-nous</h4>
                                            <div style={styles} >
                                                <MDBIcon icon="calculator" className="me-1" />
                                                10 rue des vainqueurs
                                            </div>
                                            <div style={styles} >
                                                <MDBIcon icon="phone-alt" className="me-1" />
                                                +33 05-123-456
                                            </div>
                                            <div style={styles} >
                                                <MDBIcon icon="mobile-alt" className="me-1" />
                                                +33 07-123-456
                                            </div>
                                            <div style={styles} >
                                                <MDBIcon icon="envelope" className="me-1" />
                                                agence-immo@immo.com
                                            </div>
                                            <h3 className="mt-4 mb-3">Biens Sponsorisés</h3>
                                            <CardVip properties={properties} />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                            <hr className="mt-4" />
                            <MDBRow >
                                {
                                    propertyRelated && propertyRelated.length !== 0 && (
                                        <MDBCol>
                                            <h2>Biens similaires</h2>
                                            <CardRelated properties={propertyRelated} />
                                        </MDBCol>
                                        
                                    )
                                }
                            </MDBRow>
                    </MDBContainer>
                </Layout>
        )
    }
    </>
    )
}


export const getStaticPaths = async () => {
    const { data } = await api.get("/api/properties?limit=100");
    const properties = data.data;
    const paths = properties.map(property => ({
        params:{slug: property.slug}
    }))
    return {paths,fallback:true}
}

export const getStaticProps = async ({params}) => {
    const { slug } = params;
    const { data: property } = await api.get(`/api/property/${slug}`);

    const { data: properties } = await api.get('/api/properties/vip');
    const { data: propertyRelated } = await api.get(`/api/properties/related/${property._id}`);
    
    return {
        props: {
            property,
            properties,
            propertyRelated
        }
    }
};


export default Property;