'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --foreground: #171717;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #ffffff;
      --foreground: #ededed;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-montserrat), sans-serif;
    color: var(--foreground);
    background-color: var(--background);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--foreground);
  }

  p {
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`