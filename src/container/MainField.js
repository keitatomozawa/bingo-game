import { connect } from 'react-redux'
import NumberField  from '../components/NumberField';

const mapStateToProps = (state, ownProps) => {
    return {
        displayed: state.displayed,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

const MainField = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberField);

export default MainField