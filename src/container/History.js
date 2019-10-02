import { connect } from 'react-redux'
import HistoryView from  '../components/HistoryView';

const mapStateToProps = (state, ownProps) => {
    return {
        history: state.history,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

const History = connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryView);

export default History