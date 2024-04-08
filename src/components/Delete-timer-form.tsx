import React from 'react';

export interface DeleteTimerFormProps {
  onDelete: () => void;
  handleClose: () => void;
}

export default function DeleteTimerForm({ onDelete, handleClose }: DeleteTimerFormProps) {
  return (
    <div className="flex items-center justify-center gap-5">
      <button
        onClick={handleClose}
        className="px-5 py-1 border-2 rounded-full border-gray-600 transition duration-250 eease-in hover:scale-105"
        type="button"
      >
        Cancel
      </button>
      <button
        onClick={onDelete}
        className="px-5 py-1 text-sm font-medium text-slate-50 border-2 rounded-full border-transparent bg-red-500 transition duration-250 eease-in hover:scale-105"
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
