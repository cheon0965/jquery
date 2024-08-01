import styled from 'styled-components';

const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};
const ReactLargeButton = styled(ReactButton)`
  font-size: 20px;
  color: tomato;
`;

const PrimartButton = styled(ReactButton)`
  color: ${function ({ stock }) {
    if (stock < 20) {
      return 'blue';
    } else {
      return 'red';
    }
  }};
`;

export default function App() {
  return (
    <>
      <ReactLargeButton>스타일버튼</ReactLargeButton> <PrimartButton stock="10">function버튼</PrimartButton>{' '}
      <PrimartButton stock="50">function버튼</PrimartButton>
    </>
  );
}
