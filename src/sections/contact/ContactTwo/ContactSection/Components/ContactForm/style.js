import styled from "styled-components";
import { Box } from "~styled";

const Form = styled(Box)`
  .form-title {
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 28px;
  }
  .form-floating {
    label {
      padding-left: 25px;
      font-size: 15px;
      min-height: 45px;
      padding-top: 0;
      padding-bottom: 0;
      color: rgba(38 39 41, 0.5);
    }

    textarea {
      min-height: 175px;

      & ~ label {
        margin-top: 20px;
      }
    }

    input {
      & ~ label {
        display: flex;
        align-items: center;
      }
    }
  }

  .form-control {
    background: #fff;
    padding-left: 25px;
    padding-right: 25px;
    border: 0;
    font-size: 15px;
    border: 1px solid rgb(38 39 41 / 10%) !important;
  }

  input.form-control {
    border-radius: 500px;
    background: #fff;
    color: rgb(38 39 41);
    height: 45px !important;
    background: transparent;
    &:focus {
      background: white !important;
    }
    &::placeholder {
      color: transparent;
    }
  }

  textarea {
    background: transparent !important;
    min-height: 175px;
    border-radius: 15px;
    color: rgb(38 39 41);
    &:focus {
      background: white !important;
    }
    &::placeholder {
      color: transparent;
    }
    & ~ label {
    }
  }

  .form-check {
    input.form-check-input {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      border-radius: 3px;
      border: 0;

      &:checked[type="checkbox"] {
        background-color: var(--bs-secondary) !important;
        box-shadow: none;
      }

      &:focus {
        box-shadow: none;
      }
    }

    .form-check-label {
      margin-left: 8px;
      font-size: 13px;
    }
  }
  .btn {
    border-radius: 500px !important;
    min-width: 180px;
    height: 56px;
    border-radius: 5px;
    font-size: 15px;
    background-color: #ff5722;
    border-color: #ff5722;
    &:hover {
      background-color: #ff5722;
      border-color: #ff5722;
    }
  }
`;
export default Form;
