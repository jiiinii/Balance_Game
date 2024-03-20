import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const ProducerInfo = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      {!display && (
        <StyledButton
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <img src="../img/myProfile.png" alt="profile" />
        </StyledButton>
      )}
      {display && (
        <InfoDiv id="informationdiv">
          <Div>
            <div>
              <p>맛 :지도</p>
              <button
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                <IoClose />
              </button>
            </div>
          </Div>
          <h2>
            전국 곳곳의 숨은 맛집을
            <br />
            '맛 :지도'를 통해서 알아보세요😊
          </h2>
          <LinkTag
            href="https://github.com/jiiinii"
            target="_blank"
            rel="noreferrer"
          >
            '맛 :지도' 개발자 github
          </LinkTag>
          <LinkTag
            href="https://www.instagram.com/_doom_chit?igsh=YnNuNHo4aXdxZXR6&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            '맛 :지도' 개발자 instagram
          </LinkTag>
        </InfoDiv>
      )}
    </>
  );
};

export default ProducerInfo;

const StyledButton = styled.button`
  border: none;
  display: block;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  font-weight: 700;
  font-size: 15px;
  margin: 0 30px;
  background-color: #f4e384;
  padding: 20px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 6.25em;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 1.875em;
  right: 2.1875em;

  background-color: #efe4a2;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    background-color: #efe4a2;
  }

  @media (max-width: 480px) {
    width: 332px;
  }

  @media (max-width: 365px) {
    border-radius: 40px;
    width: 268px;
  }

  h2 {
    margin: 0 73px 30px 54px;
    font-family: Gaegu;
    font-size: 25px;
    color: #222;
  }
`;

const Div = styled.div`
  display: flex;

  div {
    margin: 32px 15px 31px 36px;
    width: 150px;
    height: 63px;

    @media (max-width: 480px) {
      margin: 25px 15px 20px 20px;
      width: 55px;
      height: 55px;
    }

    @media (max-width: 365px) {
      margin: 25px 10px 15px 20px;
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 2.5em;
      font-family: Stylish;
    }
  }
`;

const LinkTag = styled.a`
  display: flex;
`;
