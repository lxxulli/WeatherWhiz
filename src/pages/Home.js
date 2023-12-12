import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  background: linear-gradient(
    54deg,
    rgba(255, 213, 223, 1) 0%,
    rgba(255, 253, 209, 1) 50%,
    rgba(209, 250, 255, 1) 100%
  );
`;
const Container = styled.div``;
const MainScreen = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

export const Home = () => {
  return (
    <Wrap>
      <Container>
        <MainScreen>
          <Form>
            <Input />
          </Form>
        </MainScreen>
      </Container>
    </Wrap>
  );
};
