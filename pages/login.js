import React, {useState,useEffect } from 'react';
import {MDBContainer,MDBModalFooter, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput} from "mdb-react-ui-kit";
import { Layout } from '../components/layout';
import useAuth from "../auth/context";
import {useRouter} from "next/router";

const Login = () => {

    const [values, setValues] = useState({
        username: "",
        password:""
    })

    const router = useRouter();
    const { login, isAuthenticated } = useAuth();
    const handleChange = (name) => e => {
        setValues({
            ...values, [name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        login(values.username, values.password).catch(error=>alert("Mot de passe invalide"))
    }

    useEffect(() => {
        if(isAuthenticated) router.push("/")
    },[isAuthenticated])

    return (
        <Layout>
        <div>
            <MDBContainer >
                    <MDBRow className="d-flex justify-content-center my-5">
                        <MDBCol md="6"  >
                            <MDBCard>
                            <form onSubmit={onSubmit} >
                                <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Se connecter</strong>
                                    </h3>
                                </div>
                                <MDBInput
                                    label="Votre Identifiant"
                                    group
                                    name="username"
                                    type="text"
                                    
                                    onChange={handleChange("username")}
                                    className="mb-3"
                                />
                                <MDBInput
                                    label="Mot de passe"
                                    name="password"
                                    group
                                    type="password"
                                    onChange={handleChange("password")}
                                    className="mb-3"
                                />
                                <p className="font-small text-primary d-flex justify-content-end pb-3">
                                    Mot de passe
                                    <a href="#!" className="blue-text ms-1">

                                    Oublié?
                                    </a>
                                </p>
                                <div className="text-center mb-3">
                                    <MDBBtn
                                    type="submit"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    >
                                    Connexion
                                    </MDBBtn>
                                </div>
                            
                                </MDBCardBody>
                            </form>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        </div>
      </Layout>      
    );
}

export default Login;
