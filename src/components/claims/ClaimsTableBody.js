import { Claim, newStatementClaim } from 'model/Shapes';
import React, { PureComponent } from 'react';
import ClaimAddButtonCell from './ClaimAddButtonCell';
import ClaimsTableRows from './ClaimsTableRows';
import { connect } from 'react-redux';
import PropertyDescription from 'core/PropertyDescription';
import PropTypes from 'prop-types';
import styles from '../core.css';

class ClaimsTableBody extends PureComponent {

  static TABLE_COLUMNS = ClaimsTableRows.TABLE_COLUMNS;

  static propTypes = {
    claims: PropTypes.arrayOf( PropTypes.shape( Claim ) ),
    onClaimAdd: PropTypes.func.isRequired,
    onClaimAddTwice: PropTypes.func.isRequired,
    onClaimDelete: PropTypes.func.isRequired,
    onClaimUpdate: PropTypes.func.isRequired,
    propertyDescription: PropTypes.instanceOf( PropertyDescription ),
  };

  render() {
    const { claims, onClaimAdd, onClaimAddTwice, onClaimUpdate, onClaimDelete, propertyDescription } = this.props;

    let children;
    if ( !claims || claims.length === 0 ) {
      const newClaim = newStatementClaim( propertyDescription );
      children = [ <ClaimsTableRows
        claim={newClaim}
        firstCell={<ClaimAddButtonCell onClick={onClaimAddTwice} />}
        hasClaimDelete={false}
        key={newClaim.id}
        onClaimDelete={onClaimDelete}
        onClaimUpdate={onClaimUpdate}
        propertyDescription={propertyDescription} /> ];
    } else {
      children = claims.map( ( claim, i ) => <ClaimsTableRows
        claim={claim}
        firstCell={i == 0 ? <ClaimAddButtonCell onClick={onClaimAdd} /> : <td />}
        hasClaimDelete
        key={claim.id}
        onClaimDelete={onClaimDelete}
        onClaimUpdate={onClaimUpdate}
        propertyDescription={propertyDescription} /> );
    }

    return <tbody className={styles.wef_property_editor_tbody}>{children}</tbody>;
  }
}

const EMPTY_ARRAY = [];

const mapStateToProps = ( state, ownProps ) => ( {
  claims: state.entity.claims[ ownProps.propertyDescription.id ] || EMPTY_ARRAY,
} );

const mapDispatchToProps = ( dispatch, ownProps ) => ( {
  onClaimAdd: () => dispatch( { type: 'CLAIM_ADD', propertyDescription: ownProps.propertyDescription } ),
  onClaimAddTwice: () => {
    dispatch( { type: 'CLAIM_ADD', propertyDescription: ownProps.propertyDescription } );
    dispatch( { type: 'CLAIM_ADD', propertyDescription: ownProps.propertyDescription } );
  },
  onClaimUpdate: claim => dispatch( { type: 'CLAIM_UPDATE', claim } ),
  onClaimDelete: claim => dispatch( { type: 'CLAIM_DELETE', claim } ),
} );

const ClaimsTableBodyConnected = connect( mapStateToProps, mapDispatchToProps )( ClaimsTableBody );
export default ClaimsTableBodyConnected;