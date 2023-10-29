import ReactRouterPrompt from "./ReactRouterPrompt";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  when: boolean;
};

export function UnsavedConfirmDialog({ when }: Props) {
  return (
    <ReactRouterPrompt when={when}>
      {({ isActive, onConfirm, onCancel }) =>
        isActive && (
          <Dialog open={isActive}>
            <DialogTitle>Do you really want to leave?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Your changes will not be saved.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onCancel}>cancell</Button>
              <Button onClick={onConfirm} autoFocus>
                ok
              </Button>
            </DialogActions>
          </Dialog>
        )
      }
    </ReactRouterPrompt>
  );
}
