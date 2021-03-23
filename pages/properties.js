import React from 'react';
import { Layout } from '../components/layout';
import { Cards } from '../components/cards';
import api from "../auth/axios";
import Head from 'next/head';
import { MDBContainer } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import {SearchFilter} from "../components/searchFilter";

const Properties = ({ properties, currentPage, pageCount }) => {
  
  const router = useRouter();
  const paginationHandler = page => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router.push({
      pathname: currentPath,
      query: currentQuery
    }).then(() => window.scrollTo(0, 0));
  }
    return (
        <>
            <Layout>
            <Head>
                <title>Liste des biens</title>
          </Head>
     
          <MDBContainer   >
          <SearchFilter />
            <Cards properties={properties} />
            <div className="my-5">
              <ReactPaginate
                pageClassName = "page-item"
                onPageChange={paginationHandler}
                initialPage={currentPage - 1}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                previousLabel="Précédent"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                nextLabel="Suivant"
                activeClassName="active"
                breakLabel="..."
                pageLinkClassName="page-link"
                containerClassName="pagination justify-content-center"
                
              />
            </div>
                </MDBContainer>
                
            </Layout>
        </>
    );
}
export const getServerSideProps = async ({query}) => {
  const page = query.page || 1;
    const { data } = await api.get(`/api/properties?page=${page}`); 
    const properties = data.data;
    const currentPage = data.currentPage;
    const pageCount = data.totalPages;
    
    return {
      props: {
        properties,
        currentPage,
        pageCount
      }
    }
  }
export default Properties;
