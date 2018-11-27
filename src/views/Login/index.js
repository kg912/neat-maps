import React, { Component } from 'react';
import { Form, Checkbox, Button, Card, Input, Icon } from 'antd';
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

const LoginCard = styled(Card)`
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

const InputContainer = styled('div')`
	width: 100%;
	margin: 1.5em 0em 1.5em 0em;
`;

class Login extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
		};
	}
	render() {
		return (
			<Container>
				<LoginCard>
					<Content>
						<Heading>Neat Maps</Heading>
						<Input
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							disabled={this.state.loading}
						/>
						<InputContainer>
							<Input
								placeholder="Enter your password"
								type="password"
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								disabled={this.state.loading}
							/>
						</InputContainer>
						<Button type="primary" block onClick={() => this.setState({ loading: true })} loading={this.state.loading}>Login</Button>
					</Content>
				</LoginCard>
			</Container>
		)
	}
}

export default Login;