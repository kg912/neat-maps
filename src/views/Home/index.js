import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import CSVReader from './components/CSVReader';
import Maps from './components/Maps/index';
import Table from './components/Table/index';

import history from '../../store/history';

import { TitleBar, Heading, ButtonWrapper, Container, Content, ResetButtonWrapper } from './style';

import utilActions from '../../store/modules/utils/actions';

const { setTableData, reset, enableSelects, toggleResetButton } = utilActions;


class Home extends Component {
	constructor() {
		super();
		this.state = {
			tableData: [],
		}
	}

	componentDidMount() {
		if(!this.props.authenticated) {
			history.push('/');
		}
	}

	static getDerivedStateFromProps(nextProps, state) {
		if(nextProps.tableData !== state.tableData) {
			return {
				tableData: nextProps.tableData
			}
		}
		return null;
	}

	render() {
		const { resetDisabled, reset, setTableData, enableSelects, toggleResetButton } = this.props;
		return (
			<Container>
				<Maps/>
				<Content>
					<Table dataSource={this.state.tableData} />
				</Content>
					<TitleBar>
						<Heading>Neat Maps</Heading>
						<ResetButtonWrapper>
							<Button type="danger" disabled={resetDisabled} onClick={reset}>Reset</Button>
						</ResetButtonWrapper>
						<ButtonWrapper>
							<CSVReader onCSVLoad={tableData => {
								if(tableData) {
									enableSelects();
									toggleResetButton();
									setTableData(tableData)
								}
							}}/>
						</ButtonWrapper>
					</TitleBar>
			</Container>
		);
	}
}

export default connect(state => ({
	authenticated: state.Auth.get('authenticated'),
	resetDisabled: state.Utils.get('resetDisabled'),
	tableData: state.Utils.get('tableData')
}), { setTableData, reset, enableSelects, toggleResetButton })(Home);