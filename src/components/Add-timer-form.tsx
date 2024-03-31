import React, { useId } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export interface AddTimerInputValues {
  name: string;
  timer: string;
  style: string;
}

const initialValues = {
  name: '',
  timer: '00:00:00',
  style: 'Green',
};

interface FormErrorProps {
  name: string;
}

const FormError = ({ name }: FormErrorProps) => {
  return <ErrorMessage name={name} render={message => <p className="text-red-500">{message}</p>} />;
};

export interface AddTimerFormProps {
  onSubmit: (values: AddTimerInputValues) => void | Promise<void>;
}

export default function AddTimerForm({ onSubmit }: AddTimerFormProps) {
  const labelNameId = useId();
  const labelTimerId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off" className="flex flex-col gap-5">
          <p className="m-auto text-xl ">Add new timer</p>
          <div className="mt-3">
            <label htmlFor={labelNameId}>Name of timer:</label>
            <Field
              type="text"
              name="name"
              className="mt-1 w-full py-1 px-2 border-2 rounded-lg border-gray-600"
              title="Name may contain only letters, apostrophe, dash and spaces."
              placeholder="Name"
              id={labelNameId}
              required
            />
            <FormError name="name" />
          </div>

          <div>
            <label htmlFor={labelTimerId}>Timer:</label>
            <Field
              className="m-auto text-3xl mb-3"
              id={labelTimerId}
              type="time"
              name="timer"
              step="1"
            />
          </div>

          <div
            className="flex items-center gap-3 m-auto"
            role="group"
            aria-labelledby="style-radio-group"
          >
            <div className="w-[100px] inline-flex items-center px-3.5 py-1 rounded-full text-sm bg-green-100 text-green-700">
              <Field className="mr-2" type="radio" name="style" value="Green" />
              Green
            </div>
            <div className="w-[100px] inline-flex items-center px-3.5 py-1 rounded-full text-sm bg-red-100 text-red-700">
              <Field className="mr-2" type="radio" name="style" value="Red" />
              Red
            </div>
            <div className="w-[100px] inline-flex items-center px-3.5 py-1 rounded-full text-sm bg-orange-100 text-orange-700">
              <Field className="mr-2" type="radio" name="style" value="Orange" />
              Orange
            </div>
            <div className="w-[100px] inline-flex items-center px-3.5 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
              <Field className="mr-2" type="radio" name="style" value="Blue" />
              Blue
            </div>
          </div>

          <button
            className="w-[100px] m-auto px-2 py-1 border-2 rounded-xl border-gray-600 transition duration-250 eease-in hover:scale-105"
            type="submit"
            disabled={isSubmitting}
          >
            Add timer
          </button>
        </Form>
      )}
    </Formik>
  );
}
