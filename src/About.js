function About(props) {
  document.title=props.name;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" >
            <img className="img-fluid rounded-end rounded-bottom rounded-circle" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-6 p-5 text-end"  >
          <h1 className="fw-bold"> <span className="text-primary">About </span>Us</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci nulla, faucibus rhoncus rhoncus vitae, dignissim non magna. Proin sem sem, laoreet eget augue bibendum, venenatis facilisis mi. Cras eu pretium risus, ac convallis mauris. Morbi commodo lectus ut orci posuere molestie.</div>
        </div>
      </div>
        
    </>
  );
}

export default About;
