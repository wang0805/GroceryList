import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import GroceriesList from "./groceryList";

const ACCESS_TOKEN = localStorage.getItem("access_token");
export const client = new ApolloClient({
  uri: "http://fxchange2.herokuapp.com/v1alpha1/graphql",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {isAuthenticated() && (
          <ApolloProvider client={client}>
            <GroceriesList />
          </ApolloProvider>
        )}
      </div>
    );
  }
}

export default Home;
