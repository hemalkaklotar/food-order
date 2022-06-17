import img1 from "../Images/banner.png";
import "../styles/Home.css";
import Menu from "./common/Menu";
const Home = () => {
    return (
        <>
            <div className="container pt-pd-45">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <h1 className="heading">
                            Delicious food for <br /> your cravings
                        </h1>
                        <h5 className="sunheading">
                            We made fresh and helthy meals with different recipes

                        </h5>
                        <a className="btn-viewmenu" href="#">View Menu</a>

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="imgbox">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    );
}

export default Home