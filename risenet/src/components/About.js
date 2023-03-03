function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            Introducing a software platform that connects small and medium-sized enterprises (SMEs) in underdeveloped regions with the resources and support they need to grow, innovate, and create jobs. This platform aims to address two of the United Nations Sustainable Development Goals - Decent Work and Economic Growth, and Industry, Innovation and Infrastructure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
