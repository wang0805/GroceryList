import React, { Component } from "react";
import { getGroceriesToBuy, addItem } from "../queries";

class AddItems extends Component {
  contructor(props) {
    super(props);

    this.state = {
      item_text: "",
      item_user: ""
    };
  }

  additem(insert_grocerlist) {
    let item_user = localStorage.getItem("sub");
    // set state of item_user THEN execute the callback so that we have the variables values in this.state
    // all variables are included in a dict with variable name as key and value as dict
    // then the variable dict is assigned to 'variables' key as per below
    // refetchQueries is a list of dictionaries with each dictionary containing the name of query to execute ON mutation completion
    this.setState({ item_user }, () => {
      insert_grocerlist({
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
                this.additem(insert_grocerylist);
              }}
            >
              <input
                ref={node => {
                  this.input = node;
                }}
                placeholder="insert a grocery item"
                onChange={e => this.setState({ item_text: this.input.value })}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddItems;
