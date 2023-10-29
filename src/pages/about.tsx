import styled from "styled-components";
import Header from "../components/Header";

function About() {
  return (
    <StyledContainer>
      <Header />
      <span>About</span>
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

export default About;
