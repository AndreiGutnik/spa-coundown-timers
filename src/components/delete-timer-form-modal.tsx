import React from 'react';
import DeleteTimerForm, { DeleteTimerFormProps } from './Delete-timer-form';
import Modal, { ModalProps } from './Modal';
export interface DeleteTimerFormModalProps extends ModalProps {
  onDelete: DeleteTimerFormProps['onDelete'];
  handleClose: DeleteTimerFormProps['handleClose'];
}
export default function DeleteTimerFormModal({
  onDelete,
  handleClose,
  ...rest
}: DeleteTimerFormModalProps) {
  return (
    <Modal {...rest}>
      <DeleteTimerForm onDelete={onDelete} handleClose={handleClose} />
    </Modal>
  );
}
