import styled from 'styled-components';

const Wrapper = styled.div`
	height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Text = styled.span`
	font-size: 24px;
`;

export default function Loader() {
  return (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
}
