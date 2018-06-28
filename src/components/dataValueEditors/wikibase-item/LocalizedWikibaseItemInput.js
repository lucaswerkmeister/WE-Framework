import React, { Component } from 'react';
import { connect } from 'react-redux';
import { labelDescriptionQueue } from 'caches/actions';
import PropTypes from 'prop-types';
import WikibaseItemInput from './WikibaseItemInput';

class LocalizedWikibaseItemInput extends Component {

  static propTypes = {
    ...WikibaseItemInput.propTypes,
    cache: PropTypes.object.isRequired,
    queue: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { cache, entityId, queue } = this.props;
    if ( !!entityId && typeof cache[ entityId ] === 'undefined' ) {
      queue( entityId );
    }
  }

  componentDidUpdate( prevProps ) {
    const { cache, entityId, queue } = this.props;

    if ( prevProps.entityId !== this.props.entityId
        && !!entityId
        && typeof cache[ entityId ] === 'undefined' ) {
      queue( entityId );
    }
  }

  render() {
    /* eslint no-unused-vars: 0 */
    const { cache, entityId, queue, ...etc } = this.props;

    if ( !entityId ) {
      return <WikibaseItemInput
        {...etc}
        entityId={entityId}
        entityLabel={null} />;
    } else {
      const labelDescription = cache[ entityId ];
      const entityLabel = labelDescription ? labelDescription.label : null;
      return <WikibaseItemInput
        {...etc}
        entityId={entityId}
        entityLabel={entityLabel} />;
    }
  }
}

const mapStateToProps = state => ( {
  cache: state.LABELDESCRIPTIONS.cache,
} );

const mapDispatchToProps = dispatch => ( {
  queue: key => dispatch( labelDescriptionQueue( key ) ),
} );

const LocalizedWikibaseItemInputConnected = connect( mapStateToProps, mapDispatchToProps )( LocalizedWikibaseItemInput );
export default LocalizedWikibaseItemInputConnected;
