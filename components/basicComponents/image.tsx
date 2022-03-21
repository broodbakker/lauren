import React, { FunctionComponent } from 'react'
import styled from "styled-components"

type Image1Props = {
  className?: string
  src: string,
  title: string,
  subtitle: string
}

const Image1: FunctionComponent<Image1Props> = ({ className, src, title, subtitle }) => {
  return (
    <div className={className}>
      <div className="card">
        <div className="imgBox">
          <img src={src} alt="images" />
        </div>
        <div className="details">
          <h2>{title}<br /><span>{subtitle}</span></h2>
        </div>
      </div>
    </div>
  )
}

export const Image = styled(Image1)`
.card{
  position: relative;
  width: 300px;
  height: 350px;
  background:#fff;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow:0 2px 10px rgba(0,0,0,.2);
}

.card:before,
.card:after
{
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #fff;
  transition: 0.5s;
  z-index:-1;
}

.card:hover:before{
transform: rotate(20deg);
box-shadow: 0 2px 20px rgba(0,0,0,.2);
}

.card:hover:after{
transform: rotate(10deg);
box-shadow: 0 2px 20px rgba(0,0,0,.2);
}

.card .imgBox{
position: absolute;
top: 10px;
left: 10px;
bottom: 10px;
right: 10px;
background: #222;
transition: 0.5s;
z-index: 1;
}

.card:hover .imgBox
{
  bottom: 80px;
}

.card .imgBox img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .details{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
}

.card .details h2{
 margin: 0;
 padding: 0;
 font-weight: 600;
 font-size: 20px;
 color: #777;
 text-transform: uppercase;
}

.card .details h2 span{
font-weight: 500;
font-size: 16px;
color: #f38695;
display: block;
margin-top: 5px;
 }
`;
