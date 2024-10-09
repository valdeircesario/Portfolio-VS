/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
const Button = ({ downloadLink }) => {
  return (
    <StyledWrapper>
      <a href={downloadLink} download>
        <button className="botao">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mysvg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <g id="Interface / Download">
                <path
                  id="Vector"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="#f1f1f1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
          </svg>
          <span className="texto">Download</span>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
   .botao {
  width: 125px;
  height: 45px;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 1px rgba(107, 221, 215, 0.37);
  padding: 5px 10px;
  background: rgb(47,93,197);
  background: linear-gradient(160deg, rgba(47,93,197,1) 0%, rgba(46,86,194,1) 5%, rgba(47,93,197,1) 11%, rgba(59,190,230,1) 57%, rgba(0,212,255,1) 71%);
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 505;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  filter: drop-shadow(0 0 10px rgba(59, 190, 230, 0.568));
  transition: .5s linear;
}

.botao .mysvg {
  display: none;
}

.botao:hover {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: .5s linear;
}

.botao:hover .texto {
  display: none;
}

.botao:hover .mysvg {
  display: inline;
}

.botao:hover::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3.5px solid transparent;
  border-top: 3.5px solid #fff;
  border-right: 3.5px solid #fff;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}

@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`;

export default Button;