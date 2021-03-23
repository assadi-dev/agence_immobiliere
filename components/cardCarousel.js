import React from 'react';


const CardCarousel = ({property}) => {
    return (
        <>
            <div className="myCarousel">
            <div id="carouselExampleControls" className="carousel slide " data-mdb-ride="carousel">
                <div className="carousel-inner carouselMain">

                    <div className="carousel-item  active">
                        {
                            property && property.pictures[0] ? (
                                <img
                                src={property.pictures[0]}
                                className="d-block w-100 carousel-img "
                                alt="..."
                            />
                            ):null
                        }

                    </div> 

                    <div className="carousel-item ">
                    {
                            property && property.pictures[1] ? (
                                <img
                                src={property.pictures[1]}
                                className="d-block w-100 carousel-img "
                                alt="..."
                            />
                            ):null
                        }
                    </div>
        
                </div>
                    
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleControls"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselExampleControls"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

              
                </div>
            </div>
            <style jsx >
                {
                    `
                    @media (min-width:768px){
                        .myCarousel{
                            width:100%;
                        }
                        .carousel-img{
                            widht:100%;
                            height:420px;
                            display: block;
                        }
                    }
                    @media (max-width:768px){
                        .myCarousel{
                            width:100%;
                        }
                        .carousel-img{
                            widht:100%;
                            height:250px;
                            display: block;
                        }
                    }
                    @media (max-width:468px){
                        .myCarousel{
                            width:100%;
                        }
                        .carousel-img{
                            widht:100%;
                            height:200px;
                            display: block;
                        }
                    }
                    `
                }
            </style>
        </>
    );
}

export default CardCarousel;
