import styled from "styled-components";
import { Button } from "./components/Button";

const App = () => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <Container>
      <Button
        variant="ghost"
        backgroundColor="#72d45233"
        label="Button"
        onClick={onClick}
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  padding: 60px 24px;
  margin: 0 auto;
`;
