import React,{useState,useRef} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,

} from 'mdb-react-ui-kit';
import Link from "next/link";
import Head from 'next/head';
import useAuth from "../auth/context";
import { useRouter } from "next/router";
  
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout, user, isAuthenticated } = useAuth();
    const router = useRouter();
    const toogleMenu = useRef();

    const handleToogle = () => {
        setIsOpen(!isOpen);
        !isOpen?  toogleMenu.current.classList.remove("collapse") : toogleMenu.current.classList.add("collapse")     
    }

    

    return (
        <>
            <Head>
                <title>Agence Immobiliere</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
            </Head>
            
            <MDBNavbar dark bgColor="dark" expand="lg" sticky  >
                <MDBContainer fluid>
                    
                    <MDBNavbarToggler
                        type='button'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={handleToogle}
                    >
                        <MDBIcon icon='bars' fas />
                       
                    </MDBNavbarToggler>
                        
                    <div ref={toogleMenu}  className='collapse navbar-collapse'  id='navbarSupportedContent'>
                        <MDBNavbarNav right>
                            <MDBNavbarItem active={router.pathname === "/"}>
                            <Link href="/"   >
                                <a className="nav-link">
                                    <MDBIcon icon="home" fas className="me-1" />
                                    Accueil
                                </a>
                            </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem active={router.pathname === "/properties"}>
                                <Link href="/properties" passHref  >
                                    <a className="nav-link">
                                        
                                        Liste des biens
                                    </a>
                                </Link>

                            </MDBNavbarItem>
                            {
                                isAuthenticated && user.role === "admin" && (
                                    <MDBNavbarItem active={router.pathname === "/property"}>
                                    <Link href="/property/list" passHref  >
                                        <a className="nav-link">
                                            
                                            Dashboard
                                        </a>
                                    </Link>
    
                                </MDBNavbarItem>
                                )

                            }
                        </MDBNavbarNav>
                        <MDBNavbarNav className="d-flex justify-content-end">
                            <MDBNavbarItem active={router.pathname == "/contact"}>
                                <Link href="/contact">
                                    <a className="nav-link" >
                                        <MDBIcon icon="address-book" className="me-1" />
                                        Contact</a>
                                </Link>
                            </MDBNavbarItem>
                            {
                                !isAuthenticated && (
                                    <MDBNavbarItem active={router.pathname === "/login"} >
                                    <Link href="/login">
                                        <a className="nav-link" >
                                            <MDBIcon icon="user-alt" className="me-1" />
                                                Connexion
                                        </a>
                                    </Link>
                                </MDBNavbarItem>
                                )
                            }
                                                        {
                                isAuthenticated && (
                                    <>
                                    <MDBNavbarItem>
                                    
                                        <span className="nav-link" >
                                            <MDBIcon icon="user-alt" className="me-1" />
                                                Bonjour {user.username}
                                        </span>
                                    
                                </MDBNavbarItem>
                                    <MDBNavbarItem >
                                        <Link href="">
                                        <a className="nav-link" onClick={logout} >
                                            <MDBIcon icon="power-off" className="me-1" />
                                            Déconnexion
                                        </a>
                                        </Link>
                                    </MDBNavbarItem>
                                  </>      
                                )
                            }

                        </MDBNavbarNav>
                    </div>
                </MDBContainer>

            </MDBNavbar>
        </>
    ) 
        
}