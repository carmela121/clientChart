import React from 'react';
import MaterialTable from "material-table";
import { Dialog, Toolbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


const SystemClosureTable = (props) => {

  const [state, setState] = React.useState({
    columns: [{
      title: "Accounts", field: "# Accounts"
    },
    {
      title: "System Name", field: "System Name"
    }]
  })

  return (
    <div>
      <Dialog
        style={{ width: "100%" }}
        onClose={props.handleClose}
        open={props.open}>
        <Toolbar>
          <IconButton
            style={{ position: "absolute", right: "20px" }}
            edge="start"
            color="inherit"
            onClick={props.handleClose}>
            <CloseIcon />

          </IconButton>
        </Toolbar>
        {props.closureData &&
          <div style={{ width: "500px", textAlign: "center" }}>
            <h2>Closure Systems for {props.region}</h2>

            <MaterialTable
              title="Export"
              columns={state.columns}
              data={props.closureData}
              options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF',
                  fontWeight: "bold"
                },
                exportButton: true,
                exportAllData: true,
                search: false,
                showTitle: true,
                toolbarButtonAlignment: "left"
              }}
            />
          </div>}
        {props.paChecks &&
          <div style={{ width: "500px", textAlign: "center" }}>
            <h2>P & A Checks for {props.region}</h2>
            <MaterialTable
              title="Export"
              columns={state.columns}
              data={props.paChecks}
              options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF',
                  fontWeight: "bold"
                },
                exportButton: true,
                exportAllData: true,
                search: false,
                showTitle: true,
                toolbarButtonAlignment: "left"
              }} />
          </div>}
      </Dialog>
    </div>

  );
}
export default SystemClosureTable