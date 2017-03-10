import React from 'react';
import './react-radio-buttons-group.scss';

class ReactRadioButtonsGroup extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.onChange(value);
    }

    render() {
        const { children, group } = this.props;
        const childProps = {
             onChange: this.handleChange,
             group,
        };

        return (
            <div className='react-radio-buttons-group'>
              {
                  React.Children.map(children, (child) => (
                      <div className='react-radio-buttons-group__item'>
                          {React.cloneElement(child, childProps)}
                      </div>
                  ))
              }
            </div>
        );
    }
}

ReactRadioButtonsGroup.propTypes = {
    group: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default ReactRadioButtonsGroup;
