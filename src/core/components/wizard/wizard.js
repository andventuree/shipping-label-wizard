import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AddressForm,
  WeightForm,
  ShipOption,
  ConfirmSummary
} from "../../../features/shipping-label-maker";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
    this.onAction = this.onAction.bind(this);
  }

  onAction(action) {
    // The steps will instruct the wizard to move forward or backwards, or end the wizard.
    let { currentStep } = this.state;
    if (action === "prev" && currentStep > 0) {
      this.setState({ currentStep: currentStep - 1 });
    } else if (action === "next" && currentStep < this.props.steps.length - 1) {
      this.setState({ currentStep: currentStep + 1 });
    } else if (
      action === "end" &&
      currentStep !== this.props.steps.length - 1
    ) {
      //What does it mean to end the wizard????
      this.setState({ currentStep: this.props.steps.length - 1 });
    }
  }

  render() {
    let {
      header,
      steps,
      wizardContext,
      onComplete,
      updateContext
    } = this.props;
    return (
      <div>
        This is the Wizard Component!
        <div>
          ---------------- {(this.state.currentStep / steps.length) * 100}%
          ----------------
        </div>
        {this.state.currentStep === 0 ? (
          <AddressForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            addressee="sender"
            updateContext={updateContext}
            title={steps[0]}
          />
        ) : null}
        {this.state.currentStep === 1 ? (
          <AddressForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            addressee="receiver"
            updateContext={updateContext}
            title={steps[1]}
          />
        ) : null}
        {this.state.currentStep === 2 ? (
          <WeightForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={steps[2]}
          />
        ) : null}
        {this.state.currentStep === 3 ? (
          <ShipOption
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={steps[3]}
          />
        ) : null}
        {this.state.currentStep === 4 ? (
          <ConfirmSummary
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={steps[4]}
          />
        ) : null}
      </div>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
