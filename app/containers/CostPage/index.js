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
  selectAwsPrice,
} from './selectors';

import Button from 'components/Button';
import H1 from 'components/H1';
import Table from 'components/Table';

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
    // console.log(this.props.aws.toArray());
    // console.log(this.props);
    // this.props.aws.forEach( (aws) => {
    //   console.log(aws);
    //   aws.map( (row)=> {
    //     console.log(row);
    //   } )
    // });
    return (
      <div>
        <H1>Costs</H1>

        <Table items={this.props.aws_price} />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>Testing:</p>
          </li>

        </ul>
        <Button handleRoute={this.openHomePage}>Home</Button>
      </div>
    );
  }
}
CostPage.propTypes = {
  aws_price: React.PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  selectAwsPrice(),
  (aws_price) => ({ aws_price })
), mapDispatchToProps)(CostPage);
// export default connect(createSelector(
//   selectRepos(),
//   selectLoading(),
//   selectError(),
//   selectAwsPrice(),
//   (repos, loading, error, aws_price) => ({ repos, loading, error, aws_price })
// ), mapDispatchToProps)(CostPage);
