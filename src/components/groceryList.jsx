import React, { Component } from "react";
import { Query } from "react-apollo";
import { getGroceriesToBuy } from "../queries";
import AddItems from "./AddItems";
import MarkDone from "./MarkDone";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

class GroceriesList extends Component {
  render() {
    let count = 0;
    return (
      <Query query={getGroceriesToBuy}>
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
                    <MarkDone item_id={item.item_id} />
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
    );
  }
}

export default GroceriesList;
