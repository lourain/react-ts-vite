import styled from '@emotion/styled';

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number | string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : undefined)};
  & > * {
    margin-top: 0;
    margin-bottom: ${props => props.marginBottom + 'rem'};
    margin-right: ${props => (typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined)};
  }
`;
