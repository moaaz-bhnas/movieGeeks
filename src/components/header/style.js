import styled, { css } from 'styled-components';
import theme from '../../shared/theme';

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${theme.border.light};
`;

export const Title = styled.h1`
  position: absolute;
  left: -200rem;
`;

export const Navigation = styled.nav`
  max-width: 60rem;
  margin: auto;

  display: flex;
  align-items: center;
`;

export const LogoLink = styled.a`
  display: flex;
`;

export const LogoImg = styled.img`
  width: 3rem;
  height: auto
  padding: .35rem;
  margin-left: -.35rem; // To be aligned with the content
`;

export const StyledSearchForm = styled.form`
  display: flex;
  border: 1px solid ${theme.border.light};
  border-radius: .2rem;
  margin-right: auto;
`;

export const SearchInput = styled.input`
  width: 15rem;
  padding-left: .5rem;
  border: none;
  border-right: 1px solid ${theme.border.light};
`;

export const SearchBtn = styled.button`
  display: flex;
  padding: 0;
  padding: .2rem .8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color .1s;

  &:hover,
  &:focus {
    background-color: ${theme.bg.grey};
  }
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: auto;
  padding: .2rem;
`;

const listStyles = css`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const StyledFeaturesList = styled.ul`
  ${listStyles}
`;

export const Feature = styled.li`
  height: 3rem;
  display: flex;

  &:not(:last-child) {
    border-right: 1px solid ${theme.border.light};
  }
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  background: transparent;
  cursor: pointer;
  border: none;
  transition: background-color .1s;

  &:hover,
  &:focus {
    background-color: ${theme.bg.grey};
  }
`;

export const DropdownToggler = styled.button`
  ${buttonStyles}
`;

export const UserName = styled.span`
  margin: 0 .4rem 0 .3rem;
`;

export const DownArrow = styled.img`
  width: .6rem;
`;

export const DropdownMenu = styled.ul`
  ${listStyles}
`;

export const MenuItem = styled.li``;

export const FeatureButton = styled.button`
  ${buttonStyles}
`;