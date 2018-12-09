import React, { Component } from "react";
import { Query } from "react-apollo";
import { getGroceriesToBuy } from "../queries";
import AddItems from "./AddItems";
import MarkDone from "./MarkDone";
import DeleteItem from "./DeleteItem";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

class GroceriesList extends Component {
  render() {
    let count = 0;
    return (
      <Query query={getGroceriesToBuy}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading...</p>;
          if (error)
            // return `Error ${
            //   error.message
            // }, please try again ${window.location.reload()}`;
            return `Error ${error.message}, please try again`;
          if (data.grocerylist.length === 0) {
            return (
              <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
              >
                <h2>Empty Grocery list</h2>
                <AddItems />
              </Grid>
            );
          }

          return (
            <div>
              <List>
                {data.grocerylist.map((item, index) => (
                  <ListItem key={index} button>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <h4>
                        {(count = count + 1)}. {item.item_text}
                      </h4>
                      <MarkDone item_id={item.item_id} />
                      <DeleteItem item_id={item.item_id} />
                    </Grid>
                  </ListItem>
                ))}
              </List>
              <List>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <AddItems />
                </Grid>
              </List>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default GroceriesList;
