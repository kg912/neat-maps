import React, { Component } from 'react';
import { Button, Card, Input, Icon, message } from 'antd';
import { connect } from 'react-redux';

import authActions from '../../store/modules/auth/actions';
import { Content, Container, LoginCard as LCard, Heading, StyledInput as SInput } from './style';

const { login } = authActions;
const LoginCard = LCard.withComponent(Card);
const StyledInput = SInput.withComponent(Input);

class Login extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			email: '',
			password: '',
		};
	}

	static getDerivedStateFromProps(nextProps, state) {
		if(nextProps.loading !== state.loading) {
			return {
				loading: nextProps.loading
			}
		}
		return null;
	}

	render() {
		return (
			<Container>
				<LoginCard>
					<Content>
						<Heading>Neat Maps</Heading>
						<StyledInput
							placeholder="Enter your email"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							onChange={e => this.setState({ email: e.target.value })}
						/>
						<StyledInput
							placeholder="Enter your password"
							type="password"
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							onChange={e => this.setState({ password: e.target.value })}
							onPressEnter={this.onLogin}
						/>
						<Button type="primary" block onClick={this.onLogin} loading={this.state.loading}>Login</Button>
					</Content>
				</LoginCard>
			</Container>
		)
	}

	onLogin = () => {
		const { login } = this.props;
		const { email, password } = this.state;
		this.setState({ loading: true });
		login(email, password, message);
	}
}

export default connect(state => ({
	loading: state.Auth.get('loading')
}), { login })(Login);