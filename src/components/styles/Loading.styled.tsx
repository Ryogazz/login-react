import styled from 'styled-components';
// css do componente Loading do styled-components
export const LoadingBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: #f8fafc;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;

  .spinner {
    @keyframes spin {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(90deg); }
      50% { transform: rotate(180deg); }
      75% { transform: rotate(270deg); }
      100% { transform: rotate(360deg); }
    }

    animation: spin 1500ms infinite linear;
    fill: #475569;
    z-index: 100;
  }
`;

export const LoadingTitle = styled.span`
  z-index: 100;
  font-size: 3rem;
`;
