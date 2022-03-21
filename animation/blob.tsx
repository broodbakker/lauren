import React, { FunctionComponent } from "react"
import styled, { keyframes } from "styled-components"

type BlobProps = {
  className?: string
}

const BlobComponent: FunctionComponent<BlobProps> = ({ className, children }) =>
  <div className={className}>
    <div className="body">
      <div className="blob">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
      {/* <h1>look at<br />this go!</h1> */}
      {children}
    </div>
  </div>


const rotate = keyframes`
  0%   { transform: scale(1)   translate(10px, -30px); }
  38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
  80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
  100% { transform: scale(1)   translate(10px, -30px); }
`;

export const Blob = styled(BlobComponent)`
  .body {
    position:relative;
}
  .blob {
    position: absolute;
    top: 0;
    left: 0;
    fill: ${props => props.theme.global.colors.theme};
    width: 50vmax;
    z-index: -1;
    animation:  ${rotate} 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
}
`
