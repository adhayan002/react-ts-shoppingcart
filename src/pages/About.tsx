import "../pages/About.css"

export function About(){
    return <>
        <h1>About</h1>
        <div className="mb-5 shadow-sm" style={{whiteSpace:'pre-line'}}>
        <span>
        Welcome to ConvenientCart.com, your one-stop destination for convenient and hassle-free shopping! We take pride in offering a curated selection of top-quality products that cater to your every need, all delivered right to your doorstep. With a commitment to exceptional customer service and a seamless shopping experience, we strive to make your life easier and more enjoyable.
        </span>
        </div>
        <h3>Our Mission</h3>
        <div className="mb-5 shadow-sm" style={{whiteSpace:'pre-line'}}>
        At ConvenientCart.com, our mission is simple: to provide you with access to the finest products and make your shopping experience as convenient as possible. We believe that shopping should be a joy, not a chore, and our team works tirelessly to ensure that every aspect of your online shopping journey is easy, enjoyable, and efficient.
        </div>
        <div className="d-flex justify-content-evenly">
        <img src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=600" className="imgstylebout"/>
        <div className="text">
        <h3 style={{marginLeft:'2vw'}}>
        Our Products   
        </h3>
        <div className="mb-5 shadow-sm" style={{whiteSpace:'pre-line',float:'right',marginLeft:'2vw'}}>
        Discover a wide range of products carefully selected to enhance your life. From household essentials and electronics to fashion, beauty, and beyond, our catalog is designed to meet your diverse needs. We source products from trusted brands and suppliers to ensure you receive only the best quality items.
        </div>
        </div>
        </div>

    </>
}