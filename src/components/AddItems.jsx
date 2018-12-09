import React, { Component } from "react";
import { getGroceriesToBuy, addItem } from "../queries";
import { Mutation } from "react-apollo";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
              onSubmit={async e => {
                e.preventDefault();
                // await this.setState({ item_text: this.input.value });
                await this.additem(insert_grocerylist);
                await this.setState({ item_text: "" });
              }}
            >
              <TextField
                id="outlined-email-input"
                // label="Grocery"
                placeholder="Grocery items"
                name="Grocery"
                autoComplete="Grocery"
                margin="normal"
                variant="outlined"
                style={{ height: 40 }}
                onChange={e => this.setState({ item_text: e.target.value })}
                value={this.state.item_text}
              />
              {/* <input
                ref={node => {
                  this.input = node;
                }}
                placeholder="insert a grocery item"
                onChange={e => this.setState({ item_text: e.target.value })}
                value={this.state.item_text}
              /> */}
              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                style={{ positon: "relative", top: 15 }}
              >
                Add
              </Button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddItems;
