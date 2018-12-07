import React, { Component } from "react";
import { getGroceriesToBuy, deleteItem, getAllItems } from "../queries";
import { Mutation } from "react-apollo";

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
          <button
            onClick={e => {
              e.preventDefault();
              this.deleteItem(delete_grocerylist);
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
