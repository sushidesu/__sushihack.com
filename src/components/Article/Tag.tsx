import { styled } from "../../themes"

export const Tag = styled.span`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 6px;
  height: 33px;
  line-height: 33px;
  padding: 0 8px;
`
