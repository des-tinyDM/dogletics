import React, { Component } from "react";
import styled from "styled-components";
import { PageContainer } from "../../styled/Containers";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/userReducer";
import { getOrders } from "../../../ducks/cartReducer";
import moment from "moment";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props
      .getUser()
      .then(
        () => this.props.user && this.props.user.id && this.props.getOrders()
      );
  }

  render() {
    let orderList =
      this.props.completedOrders &&
      this.props.completedOrders.map((e, i) => {
        return (
          <tr>
            <td className="rowItem id">
              <p>{e.cart_id}</p>
            </td>
            <td className="rowItem amount">
              <p>{e.final_amt}</p>
            </td>
            <td className="rowItem date">
              <p>
                {moment(e.time_paid, moment.ISO_8601).format(
                  "MMM Do, YYYY -- h:mm a"
                )}
              </p>
            </td>
            <td>
              <button>View Order</button>
            </td>
          </tr>
        );
      });
    console.log(this.props);
    return (
      <PageContainer>
        {this.props.user &&
          this.props.user.id && (
            <div>
              <h1>Past Orders</h1>
              {this.props.completedOrders[0] && (
                <OrdersTable>
                  <thead>
                    <tr>
                      <th>
                        <h2 className="colTitle id">Transaction #</h2>
                      </th>
                      <th>
                        <h2 className="colTitle amount">Amount</h2>
                      </th>
                      <th>
                        <h2 className="colTitle date">Date Paid</h2>
                      </th>
                      <th>
                        <h2 className="colTitle nav">More Info</h2>
                      </th>
                    </tr>
                  </thead>
                  {this.props.completedOrders[0] ? orderList : null}
                </OrdersTable>
              )}
              {!this.props.completedOrders[0] && (
                <h1>No orders. Go buy stuff.</h1>
              )}
            </div>
          )}
        {this.props.user === undefined && (
          <NoUser>
            <img
              src="http://www.highlandcanine.com/wp-content/uploads/2013/12/tracking-dog.jpg"
              onError={e => {
                e.target.src =
                  "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
              }}
            />
            <h1>Who are you?</h1>
            <p>Login to view your past orders.</p>
            <a className="navlink login" href={process.env.REACT_APP_LOGIN}>
              <button>Login</button>
            </a>
          </NoUser>
        )}
      </PageContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    completedOrders: state.cartReducer.completedOrders
  };
};
export default connect(
  mapStateToProps,
  { getUser, getOrders }
)(Orders);

const OrdersTable = styled.table`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  margin: 5vh auto;
  & tr {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  & td,
  th {
    font-size: 2rem;
    width: 100%;
    border: 1px solid lightgrey;
  }
  & .colTitle {
    font-size: 3rem;
  }
`;

const NoUser = styled.div`
  & h1 {
    font-size: 36px;
    margin: 0 auto 1vh auto;
  }
  & p {
    font-size: 30px;
    margin: 0 auto 1vh auto;
  }
  & img {
    margin: 5vh auto;
    width: 40vw;
  }
  & button {
    margin: 3vh auto;
    padding: 1vh 2vw;
    font-size: 30px;
  }
`;
