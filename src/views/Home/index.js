import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSVReader from './components/CSVReader';
import Maps from './components/Maps/index';
import Table from './components/Table/index';

import history from '../../store/history';

import { TitleBar, Heading, ButtonWrapper, Container, Content } from './style';


class Home extends Component {
	constructor() {
		super();
		this.state = {
			tableData: null
		}
	}

	componentWillMount() {
		if(!this.props.authenticated) {
			history.push('/');
		}
	}


	render() {
		return (
			<Container>
				<Maps/>
				<Content>
					<Table dataSource={this.state.tableData} />
				</Content>
					<TitleBar>
						<Heading>Neat Maps</Heading>
						<ButtonWrapper>
							<CSVReader onCSVLoad={tableData => this.setState({ tableData })}/>
						</ButtonWrapper>
					</TitleBar>
			</Container>
		);
	}
}

export default connect(state => ({
	authenticated: state.Auth.get('authenticated')
}), null)(Home);