import styled from "styled-components";
import { CommonButton } from "./components/Common";

const App = () => {
  return (
    <ComponentsContainer>
      <CommonButton label={""} />
    </ComponentsContainer>
  );
};

export default App;

const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 56.25rem;
  max-width: 1200px;
  padding: 60px 24px;
  margin: 0 auto;
`;
