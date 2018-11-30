import styled from "styled-components";

const Container = styled('div')`
	display: flex;
	justify-content: center;
	width: 100vw;
	flex-direction: column-reverse;
	padding: 0;
	overflow-x: hidden;
`;

const TitleBar = styled('div')`
  display: flex;
  background: #FFFFFF;
  padding: 20px;
  height: 20%;
  width: 100%;
  justify-content: space-between;
`;

const Heading = styled('div')`
	overflow: hidden;
	width: 75%;
	font-size: 3em;
	font-weight: 600;
`;

const ButtonWrapper = styled('div')`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 15%
	overflow: hidden;
`;

const ResetButtonWrapper = styled('div')`
	display: flex;
	width: 10%;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const Content = styled('div')`
	width: 100%;
	padding: 0 5px 0 5px;
	background: white;
	min-height: 35vh;
	max-height: 300px;
	overflow-y: scroll;
`;

export { TitleBar, Heading, ButtonWrapper, Container, Content, ResetButtonWrapper };