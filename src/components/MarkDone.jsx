import React, { Component } from "react";
import { getGroceriesToBuy, markItem, getAllItems } from "../queries";
import { Mutation } from "react-apollo";

class MarkDone extends Component {
  markitem(update_grocerylist) {
    update_grocerylist({
      variables: this.props,
      refetchQueries: [{ query: getGroceriesToBuy }, { query: getAllItems }]
    });
  }

  render() {
    return (
      <Mutation mutation={markItem}>
        {(update_grocerylist, { data }) => (
          <button
            onClick={e => {
              e.preventDefault();
              this.markitem(update_grocerylist);
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default MarkDone;
