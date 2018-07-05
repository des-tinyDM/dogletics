import React, { Component } from "react";
import { PageContainer } from "../../styled/Containers";
import SportCarousel from "./Carousel";
import { connect } from "react-redux";
import { getSportInfo } from "../../../ducks/miscReducer";

class DogSports extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSport: "agility", photoIndex: 0 };
  }
  selectSport = sport => {
    this.setState({ currentSport: sport }, () =>
      this.props.getSportInfo(this.state.currentSport)
    );
  };
  componentDidMount() {
    this.props.getSportInfo(this.state.currentSport);
  }
  lastPhoto = e => {
    this.state.photoIndex === 0
      ? this.setState({ photoIndex: this.props.info.images.length - 1 }, () =>
          console.log(this.state)
        )
      : this.setState({ photoIndex: this.state.photoIndex - 1 });
  };
  nextPhoto = () => {
    this.state.photoIndex === this.props.info.images.length - 1
      ? this.setState({ photoIndex: 0 })
      : this.setState({ photoIndex: this.state.photoIndex + 1 });
  };
  render() {
    console.log(this.props, this.state);
    let { info } = this.props;
    let { currentSport, photoIndex } = this.state;
    {
      console.log(info, currentSport);
    }
    return (
      <PageContainer id="sportspage">
        <div>
          <h1>Canine Sports</h1>
          <p className="sportsBlurb">
            There are a broad range of canine sports that you and your dogs can
            participate in. While many of the sports have human interacting with
            dogs to give direction (e.g., obedience trials, herding trials, and
            sled dog racing), other events, such as greyhound racing, have
            minimal involvement from humans during the competition. Some of the
            sports (e.g., agility trials, Disc dog, and dock jumping) are viewed
            by a wide audience and may commonly be televised. Whether you're
            looking to compete, or have leisurely fun with your dog, there is a
            sport for you!
          </p>
          <h1 className="chooseASport">Choose a Sport:</h1>
          <div className="carouseloptions">
            <h2
              onClick={() => this.selectSport("agility")}
              className={currentSport === "agility" ? "active" : null}
            >
              Agility
            </h2>
            {info && currentSport === "agility" && <p>{info.description}</p>}
            <h2
              onClick={() => this.selectSport("flyball")}
              className={currentSport === "flyball" ? "active" : null}
            >
              Flyball
            </h2>
            {info && currentSport === "flyball" && <p>{info.description}</p>}
            <h2
              onClick={() => this.selectSport("discdog")}
              className={currentSport === "discdog" ? "active" : null}
            >
              Disc dog (Frisbee)
            </h2>
            {info && currentSport === "discdog" && <p>{info.description}</p>}
          </div>
        </div>
        <div className="carousel">
          <h1 id="carouseltitle">{currentSport} slideshow</h1>
          <div className="photocontainer">
            <span className="carouselicon" onClick={e => this.lastPhoto(e)}>
              <i
                onClick={e => this.lastPhoto(e)}
                className="fas fa-chevron-circle-left"
              />
            </span>

            {info &&
              info.images && (
                <img
                  src={info.images[photoIndex]}
                  onError={e => {
                    e.target.src =
                      "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
                  }}
                />
              )}
            <button onClick={() => this.nextPhoto()}>
              <i className="fas fa-chevron-circle-right fa-lg" />
            </button>
          </div>
          <div className="photoDesc">
            <h2>Image Description</h2>
            {info.img_desc && info.img_desc[photoIndex]}
          </div>
        </div>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.miscReducer.sportInfo
  };
};

export default connect(
  mapStateToProps,
  { getSportInfo }
)(DogSports);
