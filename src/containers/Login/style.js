import styled from 'styled-components';

const Content = styled('div')`
	width: 100%;
	margin: 0;
	overflow: hidden;
`;

const Container = styled('div')`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 20vh 0 0 0;
	justify-content: center;
	text-overflow: none;
	overflow: hidden;
`;

const LoginCard = styled('div')`
	width: 600px;
	height: 400px;
	margin: 0.8em auto 0.8em auto;
	text-overflow: none;
	background: #FFFFFF;
`;

const Heading = styled('div')`
	overflow: hidden;
	width: 100%;
	margin: 0 0 0.5em 0;
	font-size: 3em;
	font-weight: 600;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-wrap: normal;
`;

const StyledInput = styled('input')`
	width: 100%;
	margin: 0em 0em 1.5em 0em;
`;

export { Content, Container, LoginCard, Heading, StyledInput }