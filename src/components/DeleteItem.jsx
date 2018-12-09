import React, { Component } from "react";
import { getGroceriesToBuy, deleteItem, getAllItems } from "../queries";
import { Mutation } from "react-apollo";

import Button from "@material-ui/core/Button";

class DeleteItem extends Component {
  deleteItem(delete_grocerylist) {
    delete_grocerylist({
      variables: this.props,
      refetchQueries: [{ query: getGroceriesToBuy }, { query: getAllItems }]
    });
  }
  render() {
    return (
      <Mutation mutation={deleteItem}>
        {(delete_grocerylist, { data }) => (
          <div>
            <Button
              style={{
                paddingLeft: 0,
                position: "relative",
                left: -30,
                fontSize: 17
              }}
              onClick={e => {
                e.preventDefault();
                this.deleteItem(delete_grocerylist);
              }}
            >
              [X]
            </Button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
