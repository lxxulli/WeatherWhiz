import { RingLoader } from "react-spinners";
import styled from "styled-components";

const SLoding = styled.div`
  height: 100vh;
  background: linear-gradient(
    54deg,
    rgba(255, 213, 223, 1) 0%,
    rgba(255, 253, 209, 1) 50%,
    rgba(209, 250, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <SLoding>
      <RingLoader color="#f4edc3" size={150} />
    </SLoding>
  );
};
