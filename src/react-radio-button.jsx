import React from 'react';

class ReactRadioButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        const { value, group } = this.props;

        return (
            <div className='react-radio-button'>
                <input onChange={this.handleChange}
                    className='react-radio-button__input'
                    type='radio'
                    name={group}
                    value={value}
                    id={`${group}[${value}]`}
                />
                <label className='react-radio-button__control' htmlFor={`${group}[${value}]`} >
                    {this.props.children}
                </label>
            </div>
        );
    }
}

ReactRadioButton.propTypes = {
    value: React.PropTypes.string.isRequired,
    group: React.PropTypes.string,
    onChange: React.PropTypes.func,
}

export default ReactRadioButton;
