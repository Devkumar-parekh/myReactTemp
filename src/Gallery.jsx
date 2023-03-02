import { useEffect, useState } from "react";

function Gallery(props) {
  const [mydata, setmydata] = useState([]);
  const [page, setpage] = useState(1);
  const [pageIp, setPageip] = useState(1);
  document.title = props.name;
  const GetImg = async () => {
    const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=100`);
    const actualData = await res.json();
    // console.log(actualData);
    setmydata(actualData);
    
  }
  useEffect(() => { GetImg() },[page]);
  const prev = () => {
    let temp = page>1? (page - 1) : 1;
    setpage(temp);
    GetImg();
  }
  const next = () => {
    let temp = page + 1;
    setpage(temp);
  }
  const gotopage = () => {
    setpage(pageIp);
  }
  const updateIp = (e) => {
    setPageip(e.target.value);
  }
  return (
    <div className="Gallery container">
      <div className="d-flex justify-content-between m-5">
        <button onClick={prev} className="btn-dark btn">⏮️</button>
        <div className="row">
          <span className='col float-end'>{ page}</span><input  className='form-control col' type='number' onChange={updateIp} value={pageIp}/><button onClick={gotopage} className='col btn btn-primary'>Go To page</button>
        </div>
        <button onClick={next} className="btn-dark btn">⏭️</button>
      </div>
      <div className="row g-2">
        {/* <ShowData/> */}
        {
          mydata.map((val) => {
            console.log(val.download_url);
            return (
              <>
                <div className="col-sm-4" style={{ backgroundColor: "lavender" }}>
                    <img className="img-fluid" src={val.download_url} alt=""/>
                </div>
              </>
            );
            
          })
        }
        {/* <div className="col-sm-4" style={{ backgroundColor: "lavender" }}>
            <img className="img-fluid" src="https://picsum.photos/800" alt=""/>
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "lavender" }}>
            <img className="img-fluid" src="https://picsum.photos/800" alt=""/>
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "lavender" }}>
            <img className="img-fluid" src="https://picsum.photos/800" alt=""/>
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "lavender" }}>
            <img className="img-fluid" src="https://picsum.photos/800" alt=""/>
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "lavender" }}>
            <img className="img-fluid" src="https://picsum.photos/800" alt=""/>
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;
