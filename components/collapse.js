import React, { useState } from 'react';
import { MDBCollapse, MDBBtn,MDBIcon } from 'mdb-react-ui-kit';

export const Collapse =({titre,children}) => {
    
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    const [collapseID, setCollapseID] = useState();

    const toggleCollapse = collapseID =>() =>{
        setCollapseID(prevState =>(
            collapseID = prevState !== collapseID ? collapseID : ""
        ))
    }

    const styles = {
        collapse: {
            backgroundColor: "#e0e0e0",
            padding: 10,
            fontSize: 20
        },
        icon: {
            padding:10
        }
    }

  



  return (
    <div className="mt-4 ">
  
          
          <div style={styles.collapse} onClick={toggleShow} >
              {titre}
            {
                showShow && <MDBIcon icon="angle-up" style={styles.icon} className="float-end" />
            }
            {
                !showShow && <MDBIcon icon="angle-down" style={styles.icon} className="float-end" />
            }
          </div>
        <MDBCollapse show={showShow}  >
            {children}
      </MDBCollapse>
    </div>
  );
}