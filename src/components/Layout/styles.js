import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow-y: scroll;
  height: 450px;
  width: 450px;
  box-shadow: 1px 2px #ccc, -1px 2px #ccc;
  &::-webkit-scrollbar {
    width: 0;
  }
  > div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    width: 450px;
    > button {
      margin-bottom: 80px;
      color: #ccc;
      border: none;
      margin-left: 100px;
      font-size: 40px;
      font-weight: bold;
      &:focus {
        outline: none;
      }
    }
  }
`;
export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 100px;
  height: 70px;
  margin-right: 20px;
  margin-left: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;

  > ul {
    padding: 0;
    list-style: none;
    > h3 {
      text-transform: uppercase;
    }
    > li {
      max-width: 300px;
      font-size: 15px;
      margin: 0;
      color: gray;
      > p {
        margin-left: 10px;
      }
    }
    li.expand-btn {
      max-width: 300px;
      font-size: 15px;
      margin: 0;
      color: gray;
      margin-left: 10px;
    }
    li.expand-nothing {
      max-height: 0;
      overflow: hidden;
    }
  }
`;
export const SearchWrapper = styled.div`
  max-height: 57px;
  display: flex;
  flex-direction: column;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 2px 0 12px;
  border-bottom: 1px solid #ccc;

  outline: 0;

  &:focus {
    border-bottom: 1px solid #7a7a7a;
  }
  &::placeholder {
    color: #7a7a7a;
    margin-right: 20px;
  }
`;
export const SearchTagInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 2px 0 12px;

  outline: 0;

  &:focus {
    border-bottom: 1px solid #7a7a7a;
  }
  &::placeholder {
    color: #7a7a7a;
    margin-right: 20px;
  }
`;
export const InputAddTag = styled.input`
  &.add-tag-input {
    outline: 0;
    margin-left: 10px;
    width: 100px;
    height: 20px;
    &:focus {
      border-bottom: 1px solid #7a7a7a;
    }
  }
  &.add-nothing {
    max-height: 0;
    overflow: hidden;
    outline: 0;
  }
`;
export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
