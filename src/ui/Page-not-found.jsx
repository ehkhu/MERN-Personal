import { useMoveBack } from "../hook/useMoveBack";
function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container">
      <section className="hero is-small is-primary">
        <div className="hero-body">
        <p className="title"> 
          The page you are looking for could not be found 😢
        </p>
          <p className="subtitle">
          <button onClick={moveBack} className="button is-ghost">
          &larr; Go back
        </button>
          </p>
        </div>
      </section>
      
      </div>
  );
}

export default PageNotFound;