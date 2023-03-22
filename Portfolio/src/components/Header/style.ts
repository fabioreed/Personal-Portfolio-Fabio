import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;

    div {
      h3 {
        font-weight: bold;
      }

      span {
        color: var(--primary-color);
        font-weight: bold;
      } 
  }

  ul {
    display: none;
  }

  button {
    padding: .4rem 1rem;

    background-color: var(--black);

    color: var(--white);
    font-size: .8rem;

    transition: .3s ease;

    :hover {
      background-color: var(--yellow);
      color: var(--black);
    }
  }

  @media (min-width: 769px) {
    padding: 1.7rem 8rem;

    ul {
      display: flex;
      gap: 1rem;
    }

    button {
      padding: .7rem 2rem;
    }
}
`

export const LinkTag = styled(Link)`
    font-size: .9rem;
    color: var(--black);
    font-weight: 400;

    list-style: none;
    text-decoration: none;

    transition: .2s;

    :hover {
      font-weight: 400;
      color: var(--primary-color);
      /* border-bottom: 1px solid var(--yellow); */
    }
`