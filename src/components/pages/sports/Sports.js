import React, { Component } from "react";
import { PageContainer } from "../../styled/Containers";
import SportCarousel from "./Carousel";
import { connect } from "react-redux";
import { getSportInfo } from "../../../ducks/miscReducer";

class DogSports extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSport: "agility" };
  }
  selectSport = sport => {
    this.setState({ currentSport: sport }, () =>
      this.props.getSportInfo(this.state.currentSport)
    );
  };
  componentDidMount() {
    this.props.getSportInfo(this.state.currentSport);
  }
  render() {
    console.log(this.props);
    return (
      <PageContainer id="sportspage">
        <div>
          <h1>Canine Sports</h1>
          <p>
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
          <div className="carouseloptions">
            <h2
              onClick={() => this.selectSport("agility")}
              className={
                this.state.currentSport === "agility" ? "active" : null
              }
            >
              Agility
            </h2>
            <h2
              onClick={() => this.selectSport("flyball")}
              className={
                this.state.currentSport === "flyball" ? "active" : null
              }
            >
              Flyball
            </h2>
            <h2
              onClick={() => this.selectSport("discdog")}
              className={
                this.state.currentSport === "discdog" ? "active" : null
              }
            >
              Disc dog (Frisbee)
            </h2>
          </div>
        </div>
        <div className="carousel">
          {this.props.sportInfo && (
            <img
              src={this.props.sportInfo.images}
              onError={e => {
                e.target.src =
                  "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
              }}
            />
          )}
        </div>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    sportInfo: state.miscReducer.sportInfo
  };
};

export default connect(
  mapStateToProps,
  { getSportInfo }
)(DogSports);
