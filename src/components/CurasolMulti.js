import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CurasolMulti = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is optional if you are not using partialVisible props
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
    }
  };
  return (
    <div style={{ paddingBottom: "100px" }}>
      <p
        style={{
          fontSize: '4rem',
          fontWeight: '900',
          textAlign: 'center',
          lineHeight: '60px',
          marginTop: '100px'
        }}
      >New generation of<br /> Crypto.Chicks</p>
      <p style={{ fontWeight: '800', marginBottom: '63px', textAlign: 'center', }}>Crypto.Chicks = 10K gorgeous, proud, independent, and empowered girls</p>

      <Carousel
        arrows={true}
        showDots={true}
        infinite={true}
        containerClass="container-padding-bottom"
        responsive={responsive} 
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
        <div> <img className="d-block w-100" src="/images/girl1.jpg" alt="Image One" /></div>
        <div> <img className="d-block w-100" src="/images/girl2.jpg" alt="Image Two" /></div>
      </Carousel>
    </div>
  );
};


export default CurasolMulti;
