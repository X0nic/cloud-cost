import React from 'react';
import { fromJS } from 'immutable';

import styles from './styles.css';

import TableRow from 'components/TableRow';

function Table(props) {
  let content;

  let headers = fromJS(['Name', 'CPU', 'Memory', 'Storage', 'Cost Per/Hour']);
  let rows = fromJS(['instanceType', 'vcpu', 'memory', 'storage']);

  // console.log('-------');
  // console.log(props.items);
  // console.log(props.items.toJS());
  // props.items.forEach( (item, index) => {
  //   console.log(item);
  //   console.log(item.get('sku'));
  // });
  // console.log('-------');

  // const rows = (<td></td>);
  const rowContent = props.items.map((row, index) => {
    let attrs = row.get('attributes');
    return (<TableRow key={`row-${index}`} headers={rows} items={attrs} />)
  });

  const headerContent = headers.map((item, index) => (
    <th>{item}</th>
  ));

  if (props.items) {
    content = (
      <table><tbody>
        <tr>{headerContent}</tr>
        {rowContent}
      </tbody></table>
    );
  } else {
    content = (<div>Nothing to render</div>);
  }

  return content;
}

Table.propTypes = {
  // component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};
export default Table;
