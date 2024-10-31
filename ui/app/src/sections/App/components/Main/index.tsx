export const Main = () => {
  return (
    <section>
      <div className="container-fluid padding-side">
        <div className="row">
          <div className="col-sm-6" style={ { alignContent: "center", paddingBottom: "1rem" } }>
            <img
              alt="main"
              className="img-fluid"
              src="https://placehold.co/1000x600?text=Главная+картинка" />
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12 text-end" style={ { backgroundColor: "#fff", paddingBottom: "1rem" } }>
                <img
                  alt="secondary"
                  className="img-fluid"
                  src="https://placehold.co/500x300?text=Второстепенная+картинка" />
              </div>
              <div className="col-sm-12 text-end" style={ { backgroundColor: "#fff", paddingBottom: "1rem" } }>
                <img
                  alt="secondary"
                  className="img-fluid"
                  src="https://placehold.co/500x300?text=Второстепенная+картинка" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}