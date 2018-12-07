import React, { Component } from "react";
import { getGroceriesToBuy, addItem } from "../queries";
import { Mutation } from "react-apollo";

class AddItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item_text: "",
      item_user: ""
    };
  }

  additem(insert_grocerylist) {
    console.log("userid: ", localStorage.getItem("sub"));
    let item_user = localStorage.getItem("sub");
    // set state of item_user THEN execute the callback so that we have the variables values in this.state
    // all variables are included in a dict with variable name as key and value as dict
    // then the variable dict is assigned to 'variables' key as per below
    // refetchQueries is a list of dictionaries with each dictionary containing the name of query to execute ON mutation completion
    this.setState({ item_user }, () => {
      insert_grocerylist({
        variables: this.state,
        refetchQueries: [{ query: getGroceriesToBuy }]
      });
    });
  }

  render() {
    return (
      <Mutation mutation={addItem}>
        {(insert_grocerylist, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.setState({ item_text: this.input.value });
                this.additem(insert_grocerylist);
              }}
            >
              <input
                ref={node => {
                  this.input = node;
                }}
                placeholder="insert a grocery item"
                onChange={e => this.setState({ item_text: e.target.value })}
              />
              <button type="submit">Add Item</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddItems;
