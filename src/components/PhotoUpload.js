import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import ApiProvider from "utils/ApiProvider";
import { useHistory } from "react-router-dom";
import "styles/PhotoUpload.css";

// const PhotoUpload = (props) => {

//   return (
//     <div id="upload" role="navigation">
//       <Modal isOpen={props.open} id="photo-upload">
//         <ModalHeader className="modalHeader">
//           <div id="mainTitle">Upload Photos here</div>
//           <Button className="closeModal" onClick={props.close}>
//             <span>x</span>
//           </Button>
//         </ModalHeader>
//         <ModalBody id="modalBody">
//             <Form id="upload" onSubmit={handleSubmit}>
//               <FormGroup>
//                 <Label htmlFor="upload-image">upload</Label>
//                 <Input></Input>
//               </FormGroup>
//             </Form>
//           </div>
//         </ModalBody>
//         <ModalFooter>
//           <Button type="submit">
//             Upload
//           </Button>{" "}
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default PhotoUpload;
