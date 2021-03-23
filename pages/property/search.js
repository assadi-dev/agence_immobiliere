import React,{useState,useEffect} from 'react';
import { Layout } from '../../components/layout';
import { useRouter } from "next/router";
import api from '../../auth/axios';
import { Cards } from "../../components/cards";
import ReactPaginate from "react-paginate";
import {SearchFilter} from "../../components/searchFilter";


const Search = () => {

    const router = useRouter();
    const [properties, setProperties] = useState("");

    useEffect(() => {
        
        async function getProperty() {
            const { data } = await api.post("/api/property/list/search", {
                filters: {
                    title: router.query.title,
                    category: router.query.category
                }
            })
            setProperties(data)
        }
        getProperty();
    },[router.query.title,router.query.category])



    return (
        <div>
            <Layout>
                <div className="container">
                    <SearchFilter />

                    {
                        router.query.category || router.query.title ? (
                            <div>
                                <div className="text-center mb-4 font-weight-bolder ">
                                    {
                                        `${properties.size} Propriétée(s) trouvé(s)`
                                    }
                                </div>
                                <Cards properties = {properties.data} />
                            </div>
                        ):null
                    }
                </div>
            </Layout>
        </div>
    );
}

export default Search;
