import styled from "styled-components";
import Header from "../components/Header";

function Home() {
  return (
    <StyledContainer>
      <Header />
      <span>Home</span>
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

export default Home;
