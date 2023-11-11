// import { Formik, Form, Field, FieldArray } from 'formik';
// import * as Yup from 'yup';

// const CustomForm = (
//     {
//         initialValues,
//         validationSchema,
//         onSubmit,
//     }
// ) => {

//     return (
//     <Formik
//        initialValues={{ friends: ['jared', 'ian', 'brent'] }}
//        onSubmit={values =>
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//          }, 500)
//        }
//        render={({ values }) => (
//          <Form>
//            <FieldArray
//              name="friends"
//              render={arrayHelpers => (
//                <div>
//                  {values.friends && values.friends.length > 0 ? (
//                    values.friends.map((friend, index) => (
//                      <div key={index}>
//                        <Field name={`friends.${index}`} />
//                        <button
//                          type="button"
//                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
//                        >
//                          -
//                        </button>
//                        <button
//                          type="button"
//                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
//                        >
//                          +
//                        </button>
//                      </div>
//                    ))
//                  ) : (
//                    <button type="button" onClick={() => arrayHelpers.push('')}>
//                      {/* show this when user has removed all friends from the list */}
//                      Add a friend
//                    </button>
//                  )}
//                  <div>
//                    <button type="submit">Submit</button>
//                  </div>
//                </div>
//              )}
//            />
//          </Form>
//        )}
//      />
//     )
// }

// export { CustomForm }
