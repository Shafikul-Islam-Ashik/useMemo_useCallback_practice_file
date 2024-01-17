import { memo } from "react";

const Counter2 = ({ count2, handleDesc2, handleInc2 }) => {
  console.log("rendering counter 2");

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h4>Countet 2</h4>
              <h1>{count2}</h1>
              <hr />
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={handleDesc2}
              >
                --
              </button>
              <button className="btn btn-sm btn-info" onClick={handleInc2}>
                ++
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Counter2);
