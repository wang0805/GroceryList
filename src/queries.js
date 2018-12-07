import gql from "graphql-tag";

export const getGroceriesToBuy = gql`
  {
    grocerylist(where: { item_mark: { _eq: false } }) {
      item_id
      item_text
      item_mark
      item_user
    }
  }
`;

export const addItem = gql`
  mutation($item_text: String!, $item_user: String!) {
    insert_grocerylist(
      objects: [{ item_text: $item_text, item_user: $item_user }]
    ) {
      affected_rows
    }
  }
`;

export const markItem = gql`
  mutation($item_id: Int!) {
    update_grocerylist(
      where: { item_id: { _eq: $item_id } }
      _set: { item_mark: true }
    ) {
      affected_rows
    }
  }
`;

export const deleteItem = gql`
  mutation($item_id: Int!) {
    delete_grocerylist(where: { item_id: { _eq: $item_id } }) {
      affected_rows
    }
  }
`;

export const getAllItems = gql`
  {
    grocerylist(order_by: { item_mark: asc, item_id: asc }) {
      item_id
      item_text
      item_mark
      item_user
    }
  }
`;
