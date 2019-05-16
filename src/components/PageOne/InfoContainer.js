import React, { Component } from 'react'
import './InfoContainer.css'
import CompanyInfoForm from './CompanyInfoForm'
import MarketInfoForm from './MarketInfoForm'
import { connect } from 'react-redux';
import {submitInput} from '../../actions/submitInput'
import PageHeader from '../PageHeader'

class InfoContainer extends Component {
    state = {
        industry: '',
        turnover: 0, // euros
        turnoverGrowth: 0, // percentage
        profit: 0, // percentage
        elasticity: 0, // between -2 and 0
        taxToConsumer: 0, // percentage
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = () => {
        this.props.submitInput(this.state)
        this.props.history.push('/step-2')
    }

    render() {
        return (
            <div className="info container">
                <PageHeader />
                <CompanyInfoForm values={this.state} onChange={this.onChange} />
                <MarketInfoForm values={this.state} onChange={this.onChange} />
                <button onClick={this.onSubmit} className="continue-button"> Continue </button>
            </div>
        )
    }
}

export default connect(null, {submitInput})(InfoContainer)