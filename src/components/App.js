import React from 'react';
import MainField from '../container/MainField';
import History from '../container/History';
import ControlButton from '../container/ControlButton';
import NumberTable from '../container/NumberTable';
import ResetController from  '../container/ResetController';
import {
    Grid,
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const App = () => {
  return (
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <MainField/>
              </Grid>
              <Grid item xs={12}>
                <ControlButton/>
              </Grid>
              <Grid item xs={12}>
                <History/>
              </Grid>
              <Grid item xs={12}>
                  <ExpansionPanel>
                      <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon/>}
                          aria-controls="table-content"
                          id="table-header">
                          Table
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                          <NumberTable/>
                      </ExpansionPanelDetails>
                  </ExpansionPanel>
              </Grid>
              <Grid item xs={12}>
                  <ResetController/>
              </Grid>
          </Grid>
      </Container>
  )
};

export default App;
