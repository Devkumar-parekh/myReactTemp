function Home(props) {
  document.title=props.name;
  return (
    <>
      <div className="jumbotron mb-5">
        <img className="w-100 m-0" src="https://picsum.photos/800/500" alt=""/>
      </div>
      <div className="container">
        <div className="row m-5 d-flex align-items-center">
          <div className="col-sm-6  py-5 ">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-6 py-5 text-end">
            <h1 className="fw-bold "><span className="text-primary">WHO</span> We Are?</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci nulla, faucibus rhoncus rhoncus vitae, dignissim non magna. Proin sem sem, laoreet eget augue bibendum, venenatis facilisis mi. Cras eu pretium risus, ac convallis mauris. Morbi commodo lectus ut orci posuere molestie. </p>
          </div>
        </div>
        
        <div className="row m-5 align-items-center">
          <div className="col-sm-6 py-5 text-start ">
            <h1 className="fw-bold "><span className="text-primary">Our </span>Work</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci nulla, faucibus rhoncus rhoncus vitae, dignissim non magna. Proin sem sem, laoreet eget augue bibendum, venenatis facilisis mi. Cras eu pretium risus, ac convallis mauris. Morbi commodo lectus ut orci posuere molestie.</p>
          </div>
          <div className="col-sm-6">
            <img className="img-fluid rounded-circle" src="https://picsum.photos/800" alt=""/>
          </div>
          
        </div>
        <div className="row m-5">
          <h1 className="fw-bold text-center">Our <span className="text-primary">Partners</span></h1>
          <div className="col-sm-2">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-2">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-2">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-2">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-2">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
          <div className="col-sm-2">
            <img className="img-fluid rounded" src="https://picsum.photos/800" alt=""/>
          </div>
        </div>
        <div className=" m-5">
          <h1 className="fw-bold text-center"> <span className="text-primary">Contact </span>Us</h1>
          <div className="row">
            <div className="col-md-4">
              <label>Fname</label>
              <input className="form-control"/>
            </div>
            <div className="col-md-4">
              <label>Mname</label>
              <input className="form-control"/>
            </div>
            <div className="col-md-4">
              <label>Lname</label>
              <input className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Email</label>
              <input className="form-control"/>
            </div>
            <div className="col-md-3">
              <label>Phone</label>
              <input className="form-control"/>
            </div>
            <div className="col-md-3">
              <label>Phone 2</label>
              <input className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Message</label>
              <textarea className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center p-2">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
    </div>
    </>
    
  );
}

export default Home;
