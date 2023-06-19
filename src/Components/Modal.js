// import React, { useState } from "react";
// import "./Modal.css";

// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   return (
//     <>
//       <button onClick={toggleModal} className="btn-modal">
//         <i class="fa-solid fa-circle-info"></i> More info
//       </button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>{this.props.title}</h2>
//             <p>{this.props.id}</p>
//             <button className="close-modal" onClick={toggleModal}>
//               x
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
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
