function About(props) {
  document.title=props.name;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ backgroundColor: "lavender" }}>
            <img className="img-fluid" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-6 p-5" style={{ backgroundColor: "lavenderblush" }}>.col-sm-8</div>
        </div>
      </div>
        
    </>
  );
}

export default About;
