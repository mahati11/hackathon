import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Investors" img="card1.png" text="Connect to your potential Investors" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Forums" img="card2.png" text="Get access to information, blogs and various forums to stay up-to-date" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Events" img="card3.png" text="Participate in various events to build connections and share knowledge" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
