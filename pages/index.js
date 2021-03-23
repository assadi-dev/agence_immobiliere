
import styles from '../styles/Home.module.css';
import { Layout } from '../components/layout';
import api from "../auth/axios";
import {MDBContainer} from "mdb-react-ui-kit";
import { PropetyVip } from "../components/propetyVip";
import { PropertySection } from "../components/propertySection";
import { CarouselPicture } from "../components/carousel";

export default function Home({propertiesVip,properties}) {
  return (
 
   <>

      <Layout>

      <CarouselPicture />
        <MDBContainer>
       
          <PropetyVip properties={propertiesVip} />
          <PropertySection properties={properties} />
        </MDBContainer>
        

      </Layout>
      
    </>

  )
}

export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get("/api/properties/vip"); 
  const { data } = await api.get("/api/properties?limit=6"); 
  const properties = data.data;
  
  return {
    props: {
      propertiesVip,
      properties
    }
  }
}