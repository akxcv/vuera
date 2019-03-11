import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Page } from '@components';
import { BankDetailsContent } from '@components/Contents';
import { FormValidation } from 'calidation';
import FormModel from './BankDetails.form';
import { connect } from 'react-redux';
import InfoAction from '../../store/actions/information';
import APIs from '../../services/APIs';

export class BankDetails extends Component {
    static propTypes = {
        onNextStep: PropTypes.func,
        onGoBack: PropTypes.func,
        onExit: PropTypes.func
    };
    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getInitialState() {
        const { bankDetails } = this.props;
        return {
            data: {
                bankName: '',
                bankBranch: '',
                bankAccount: '',
                bankSuffix: '',
                ...bankDetails
            }
        };
    }

    componentDidMount() {
        APIs.status('bankDetails');
    }

    /**
     * Handle the confirm button
     * @param {FormValidation} options
     * @return {Void}
     */
    handleConfirm({ isValid, errors }) {
        const { data } = this.state;
        if (isValid) {
            this.props.setBankDetails(data);
            this.props.onNextStep();
        }
    }

    /**
     * Handle changes
     * @param {String} id
     * @param {String} value
     * @return {Void}
     */
    handleChange(id, value) {
        this.setState(({ data }) => ({
            data: {
                ...data,
                [id]: value
            }
        }));
    }

    render() {
        const { data } = this.state;
        const { onGoBack, onExit } = this.props;
        const buttons = [
            { label: 'Exit', variant: 'outline', onClick: onExit },
            { label: 'Confirm', type: 'submit' }
        ];
        return (
            <FormValidation onSubmit={this.handleConfirm} config={FormModel} initialValues={data}>
                {({ errors }) => (
                    <Page onGoBack={onGoBack} buttons={buttons} title="Bank Account Details">
                        <BankDetailsContent
                            {...data}
                            errors={errors}
                            onChange={this.handleChange}
                        />
                    </Page>
                )}
            </FormValidation>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BankDetails);

/**
 * Map the store's state to the component's props
 * @param  {Object} state
 * @return {Object}
 */
function mapStateToProps({ information }) {
    return {
        bankDetails: information.bankDetails
    };
}

/**
 * Map the dispatch function of the store to the component's props
 * @param  {Function} dispatch The dispatch function
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        setBankDetails: data => dispatch(InfoAction.setBankDetails(data))
    };
}
