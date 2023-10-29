import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { UnsavedConfirmDialog } from "../components/UnsavedConfirmDialog";
import { useState } from "react";
import Header from "../components/Header";

function Input() {
  const [input, setInput] = useState("");

  return (
    <StyledContainer>
      <Header />
      <StyledTextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
      />
      <UnsavedConfirmDialog when={!!input} />
    </StyledContainer>
  );
}

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 100px;
  margin: 0 auto;
  width: 400px;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 400px;
`;

export default Input;
