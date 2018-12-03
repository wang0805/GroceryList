import React, { Component } from "react";
import { Query } from "react-apollo";
import { getAllItems } from "../queries";
import AddItems from "./AddItems";
import MarkDone from "./MarkDone";
import { ApolloProvider } from "react-apollo";
import { client } from "./home";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class GroceriesList extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    let count = 0;
    return (
      isAuthenticated() && (
        <ApolloProvider client={client}>
          <Query query={getAllItems}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;
              if (error)
                return `Error ${
                  error.message
                }, please try again ${window.location.reload()}`;
              if (data.orders.length === 0) {
                return (
                  <div>
                    <h2>Empty Grocery list</h2>
                    <AddItems />
                  </div>
                );
              }

              return (
                <div>
                  <List dense className={classes.root}>
                    {data.grocerylist.map(item => (
                      <ListItem button>
                        <h4>
                          {(count = count + 1)}. {item.item_text}
                        </h4>
                        {!item.item_mark && <MarkDone item_id={item.item_id} />}
                        <DeleteItem item_id={item.item_id} />
                      </ListItem>
                    ))}
                  </List>
                  <List>
                    <AddItems />
                  </List>
                </div>
              );
            }}
          </Query>
        </ApolloProvider>
      )
    );
  }
}

export default GroceriesList;
