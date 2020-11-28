import React, { Component } from 'react';
import './styles.module.css'
class AllInput extends Component {
  state = {
    formFields: [],
    popupFields: {
      radioBox: ['gender'],
      file: ['file'],
      text: ['name', 'email', 'phone', 'city', 'message']
    }
  };
  componentDidMount() {
    if (this.props.form_fields) {
      this.setState({ formFields: this.props.form_fields });
    }
  }


  /**
  * Set Fields according to Names
  */
  setDataFormFields = (d, index) => {
    d.name = d.name.toLowerCase();

    if (this.state.popupFields.text.includes(d.name)) {
      return (
        <React.Fragment>
          <div className="profile-block we-block">
            <label>{d.name}</label>
            {
              d.name === 'message' ? (
                <textarea
                  type="text"
                  name={d.name}
                  value={d.value}
                  onBlur={e => { this.props.onBlurChange(e, index) }}
                  onChange={e => { this.props.handleChange(e, index) }}
                  placeholder={d.placeholder ? d.placeholder : ''}
                ></textarea>
              ) : (
                  <input
                    type="text"
                    name={d.name}
                    value={d.value}
                    onBlur={e => { this.props.onBlurChange(e, index) }}
                    onChange={e => { this.props.handleChange(e, index) }}
                    placeholder={d.placeholder ? d.placeholder : ''}
                  />
                )
            }
          </div>
        </React.Fragment>
      );
    }

  };
  render() {
    let {
      formFields
    } = this.state;

    return (
      <div className="popup-wrapper">
        <div className="d-flex popup__Box">
          <div className="popup-image-block">
            <img
              alt=""
              src={this.props.image}
              className="popup-image"
            />
          </div>
          <div className="popup-form-block">
            {formFields && formFields.length !== 0 && formFields.map((d, index) => {
              return (
                <div style={{}} className="newsletter-box">
                  {this.setDataFormFields(d, index)}
                </div>
              )
            })}

          </div>
        </div>
      </div>
    );
  }
}
export default AllInput