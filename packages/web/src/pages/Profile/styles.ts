import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  padding: 40px 40px;

  position: relative;

  > header {
    position: absolute;
    padding: 0 20px;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;

    div {
      width: 100%;
      display: flex;
      margin: 0 auto;
      max-width: 900px;
      align-items: center;
      justify-content: space-between;

      button {
        border: 0;
        background: none;
      }

      svg {
        color: #f9c74f;
        width: 25px;
        height: 25px;

        &:hover {
          color: ${shade(0.2, '#f9c74f')};
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 320px;
    text-align: left;

    span {
      width: 100%;
      font-size: 14px;
      margin-bottom: 8px;

      > a {
        color: #f9c74f;
        margin-left: 5px;
        transition: 0.2s;

        &:hover {
          color: ${shade(0.2, '#f9c74f')};
        }
      }
    }

    button + span {
      margin-top: 25px;
    }
  }
`;

export const AvatarInput = styled.div`
  display: flex;
  position: relative;
  width: 182px;
  height: 182px;
  align-items: center;
  justify-content: center;

  border-color: #f9c74f;
  border-width: 4px;
  border-style: solid;
  border-radius: 50%;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #f9c74f;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #282a36;
    }

    &:hover {
      background: ${shade(0.2, '#f9c74f')};
    }
  }
`;
