import React from 'react';



export const CarouselPicture = () => {
    return (
        <>

            <div id="carouselExampleControls" className="carousel slide " data-mdb-ride="carousel">
                <div className="carousel-inner carouselMain">
                    <div className="carousel-item active">
                        <img
                            src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg"
                            className="d-block w-100 carouselItems "
                            alt="..."
                        />
                    </div> 
                    <div className="carousel-item ">
                        <img
                            src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg"
                            className="d-block w-100 carouselItems"
                            alt="..."
                        />
                    </div>
        
                    <div className="carousel-item">
                        <img
                            src="https://res.cloudinary.com/beloved/image/upload/v1594004148/Assets/Apt-Premium2-4-HD-15_m3ztht.jpg"
                            className="d-block w-100 carouselItems"
                            alt="..."
                        />
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


        </>
    );
}


