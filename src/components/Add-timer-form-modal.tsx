import React from 'react';
import AddTimerForm, { AddTimerFormProps } from './Add-timer-form';
import Modal, { ModalProps } from './Modal';

export interface AddTimerFormModalProps extends ModalProps {
  onSubmit: AddTimerFormProps['onSubmit'];
}

export default function AddTimerFormModal({ onSubmit, ...rest }: AddTimerFormModalProps) {
  return (
    <Modal {...rest}>
      <AddTimerForm onSubmit={onSubmit} />
    </Modal>
  );
}
