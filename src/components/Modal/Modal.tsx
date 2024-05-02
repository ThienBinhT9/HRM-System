import React from "react";
import { Modal, ModalProps } from "antd";

import "./Modal.scss";
import Button from "../Button/Button.tsx";

interface Props extends ModalProps {
  show: boolean;
  confirmDisabled?: boolean;
  onSubmit: () => void;
  onHide: () => void;
}

function ModalContent(props: Props) {
  const {
    title,
    show,
    confirmLoading,
    confirmDisabled,
    onHide,
    onSubmit,
    ...passProps
  } = props;

  return (
    <Modal
      title={title}
      open={show}
      footer={
        <div className="modal__footer">
          <Button onClick={onHide}>Cancel</Button>
          <Button
            type="primary"
            loading={confirmLoading}
            disabled={confirmDisabled}
            onClick={onSubmit}
          >
            OK
          </Button>
        </div>
      }
      {...passProps}
    ></Modal>
  );
}

export default ModalContent;
