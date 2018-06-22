import React, { Component } from "react";
import { PageContainer } from "../../styled/Containers";

class DogSports extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSport: "agility" };
  }
  componentDidMount() {}
  render() {
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
        </div>
      </PageContainer>
    );
  }
}

export default DogSports;
