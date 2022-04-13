import React from "react";
import { Formik, Form, Field } from "formik";

function FormUsingReact() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          password: "",
          gender: "",
          date: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>Name :</label>
          <Field name="name" type="text" />
          <br />
          <br />
          <label>Phone :</label>
          <Field name="phone" type="number" />
          <br />
          <br />
          <label>Passwork :</label>
          <Field name="password" type="password" />
          <br />
          <br />
          <label>Gender :</label>
          <br />
          <br />
          <label>Male</label>
          <Field name="gender" value="male" type="radio" />
          <label>Female</label>
          <Field name="gender" value="Female" type="radio" />
          <br />
          <br />
          <label>Date :</label>
          <Field name="date" type="date" />
          <br />
          <br />
          <button className="btn btn-dark">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormUsingReact;
