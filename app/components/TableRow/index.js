import React from 'react';
import { fromJS } from 'immutable';

import styles from './styles.css';

function TableRow(props) {
  let content;

  if (props.items) {
    content = props.items.map((item, index) => (
        <td key={`item-${index}`}>{item}</td>
    ));
  } else {
    content = (<td>Nothing to render</td>);
  }

  return (<tr>{content}</tr>);
}

TableRow.propTypes = {
  // component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
  headers: React.PropTypes.array,
};
export default TableRow;
