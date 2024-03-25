import styled from "styled-components";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <Container>
      <Button children={""} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  padding: 60px 24px;
  margin: 0 auto;
`;
