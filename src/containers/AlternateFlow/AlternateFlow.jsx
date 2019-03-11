import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prepare from '@components/Contents/FaceScan/Prepare';
import { SelfiesTip, Face, TurnHead } from '@components/Contents/AlternateFlow';

export default class AlternateFlow extends Component {
    static propTypes = {
        onNextStep: PropTypes.func,
        onGoBack: PropTypes.func
    };

    static defaultProps = {
        onNextStep: () => null
    };

    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            totalSteps: 4,
            smile: true
        };

        this.element = null;

        this.handleNextStep = this.handleNextStep.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleCapture = this.handleCapture.bind(this);
    }

    componentDidMount() {
        const random = Math.floor(Math.random() * 2);
        this.setState({ smile: !random });
    }

    /**
     * Go to the next step
     * @return {Void}
     */
    handleNextStep() {
        const { totalSteps, step } = this.state;
        if (step < totalSteps - 1) {
            this.setState(({ step }) => ({ step: step + 1 }));
        } else {
            this.props.onNextStep({ completed: true });
        }
    }

    /**
     * Go back to the previous step
     * @return {Void}
     */
    handleGoBack() {
        const { step } = this.state;
        if (step) {
            this.setState(({ step }) => ({ step: step - 1 }));
        } else {
            this.props.onGoBack();
        }
    }

    /**
     * Handle the capture
     * @return {Void}
     */
    handleCapture() {
        this.element.click();
        this.handleNextStep();
    }

    render() {
        const { step, smile } = this.state;
        return (
            <div>
                {!step && (
                    <Prepare
                        onGoBack={this.handleGoBack}
                        onNextStep={this.handleNextStep}
                    />
                )}
                {step === 1 && (
                    <SelfiesTip
                        onGoBack={this.handleGoBack}
                        onNextStep={this.handleNextStep}
                    />
                )}
                {step === 2 && (
                    <Face smile={smile} onCapture={this.handleCapture} />
                )}
                {step === 3 && <TurnHead onCapture={this.handleCapture} />}
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    capture="user"
                    ref={ref => (this.element = ref)}
                    style={{ opacity: 0, zIindex: 99 }}
                />
            </div>
        );
    }
}
