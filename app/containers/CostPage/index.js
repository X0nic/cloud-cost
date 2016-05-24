/*
 * CostPage
 *
 * List all the features
 */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createSelector } from 'reselect';

import {
  selectRepos,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import {
  selectAws,
} from './selectors';

import Button from 'components/Button';
import H1 from 'components/H1';

import styles from './styles.css';

export class CostPage extends React.Component {

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/'
   */
  openHomePage = () => {
    this.openRoute('/');
  };

  render() {
    console.log(this.props.aws.toArray());
    // this.props.aws.forEach( (aws) => {
    //   console.log(aws);
    //   aws.map( (row)=> {
    //     console.log(row);
    //   } )
    // });
    return (
      <div>
        <H1>Costs</H1>

        <table>
          <tr><th>Name</th><th>CPU</th><th>Memory</th><th>Storage</th><th>Cost Per/Hour</th></tr>
          <tr><td>Name</td><td>CPU</td><td>Memory</td><td>Storage</td><td>Cost Per/Hour</td></tr>
        </table>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Testing:</p>
            <p>1{this.props.testing}</p>
            <p>2{this.props.username}</p>
            <p>3{this.props.cost}</p>
            <p>3{this.props.aws}</p>
          </li>

        </ul>
        <Button handleRoute={this.openHomePage}>Home</Button>
      </div>
    );
  }
}
CostPage.propTypes = {
  // aws: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  selectAws(),
  (aws) => ({ aws })
), mapDispatchToProps)(CostPage);
