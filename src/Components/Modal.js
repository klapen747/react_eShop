import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  componentDidMount() {
    if (this.state.modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }

  componentDidUpdate() {
    if (this.state.modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }

  render() {
    return (
      <>
        <button onClick={this.toggleModal} className="btn-modal">
          <i className="fa-solid fa-circle-info"></i> More info
        </button>

        {this.state.modal && (
          <div className="modal">
            <div onClick={this.toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
              <button className="close-modal" onClick={this.toggleModal}>
                x
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
