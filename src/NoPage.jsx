import { useNavigate } from "react-router-dom";

function NoPage() {
  const myNavigate = useNavigate();
  return (
    <div className="NoPage container">
      <h1>404 Error</h1>
      <h3>The page you are looking for does not exist, or move somewhere else.</h3>
      <button onClick={() => myNavigate('/')}>home</button>
    </div>
  );
}

export default NoPage;
