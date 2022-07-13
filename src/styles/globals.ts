import { css } from '@emotion/react';
import tw from 'twin.macro';
import { MQ } from './customStyle';

export const globalStyle = () => css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  a,
  p,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    letter-spacing: -0.3px;
    vertical-align: baseline;
    box-sizing: border-box;
    color: #332226;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    line-height: 1em;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    /* &::-webkit-scrollbar {
      background-color: #f9fafb;
      width: 16px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f9fafb;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #f9fafb;
    }

    &::-webkit-scrollbar-button {
      display: none;
    } */
  }

  body {
    background-color: #e5e5e5;
  }

  a {
    color: #332226;
    text-decoration: none;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: #332226;
    line-height: 1.25em;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: #332226;
  }

  .cm-line {
    ${tw`text-[#a9b7c6]! text-18px! py-3px!`}
    font-family: monospace !important;
    * {
      font-family: monospace !important;
    }
  }
  .cm-theme,
  .cm-scroller {
    &::-webkit-scrollbar {
      display: none !important;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none !important; /* IE and Edge */
    scrollbar-width: none !important; /* Firefox */
  }
  .cm-focused {
    ${tw`outline-none!`}
    outline-offset: 0 !important;
  }
  .cm-editor {
    ${tw`py-15px! px-30px! rounded-20px!`}
    &::-webkit-scrollbar {
      display: none !important;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none !important; /* IE and Edge */
    scrollbar-width: none !important; /* Firefox */
    ${MQ('700px')} {
      ${tw`px-15px!`}
    }
  }
  .cm-gutters {
    display: none !important;
  }

  input,
  textarea {
    border: none;
    resize: none;
    padding: 0;
    margin: 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  @keyframes flip {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes dicing {
    from {
      transform: rotateZ(0);
    }

    to {
      transform: rotateZ(720deg);
    }
  }
`;
