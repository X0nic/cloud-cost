import React from 'react';

import styles from './styles.css';

function Table(props) {
  let content = (<div></div>);

  // console.log('-------');
  // console.log(props.items);
  // console.log(props.items.toJS());
  // props.items.forEach( (item, index) => {
  //   console.log(item);
  //   console.log(item.get('sku'));
  // });
  // console.log('-------');

  // const rows = (<td></td>);
  const rows = props.items.map((item, index) => (
    <tr key={`item-${index}`}><td item={item}>{item.get('sku')}</td></tr>
  ));

  // console.log(rows.toArray());

  // <tr><td>Name</td><td>CPU</td><td>Memory</td><td>Storage</td><td>Cost Per/Hour</td></tr>
  if (props.items) {
    content = (
      <table><tbody>
        <tr><th>Name</th><th>CPU</th><th>Memory</th><th>Storage</th><th>Cost Per/Hour</th></tr>
        {rows}
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
