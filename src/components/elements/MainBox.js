const MainBox = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              <div className="main-box-header bg-gradient">
                <h1>{props.title}</h1>
              </div>
              <div className="main-box-body"><div className="row">{props.children}</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainBox;
