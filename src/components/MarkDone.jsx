import React, { Component } from "react";
import { getGroceriesToBuy, markItem, getAllItems } from "../queries";
import { Mutation } from "react-apollo";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class MarkDone extends Component {
  state = {
    checked: false
  };

  handleChange = name => event => {
    console.log("event target: ", event.target);
    this.setState({ [name]: event.target.checked });
  };

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
          <div style={{ paddingLeft: 10 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checked}
                  onChange={async e => {
                    console.log("what is e", e.target);
                    await this.markitem(update_grocerylist);
                    // this e is different from the 'event' in handleChange
                    await this.handleChange("checked");
                  }}
                  value="checked"
                />
              }
            />
          </div>
          // <button
          //   onClick={e => {
          //     e.preventDefault();
          //     this.markitem(update_grocerylist);
          //   }}
          // />
        )}
      </Mutation>
    );
  }
}

export default MarkDone;
