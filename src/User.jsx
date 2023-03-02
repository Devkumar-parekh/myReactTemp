import { useLocation, useNavigate, useParams } from "react-router-dom";

function User(props) {
    document.title = props.name;
    const { userId, name } = useParams();
    console.log(userId);

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();
  return (
    <>
          <div className="container">
              {/* <button onClick={()=>navigate(-1)}>Go Back</button>
              <button onClick={()=>navigate('/')}>home</button> */}
            <div className="row">
                <div className="card col-md-4 m-auto p-3" >
                    <img className="card-img-top " src="https://picsum.photos/800" alt="Card image"/>
                    <div className="card-body">
                          <h4 className="card-title">{userId} {name} Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
                
        </div>
        
    </>
  );
}

export default User;




