import { ColorRing } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;
const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      ;
    </LoaderWrapper>
  );
};

export default Loader;
