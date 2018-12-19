import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { reduxForm, formValues, Field, submit, isPristine } from "redux-form";

import TextInput from "../component/TextInput";

const required = value => (value ? undefined : "Required");
const validateEmail = value =>
  value &&
  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? "email address is not valid"
    : undefined;

const Section = styled.View`
  width: 100%;
  flex: 1;
  padding: 16px;
`;

class UserForm extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "User Detail"
    };
  };

  _onSubmit = async values => {
    console.log("Submitting form with: ", values);

  };

  render() {
    return (
      <Section>
        <View>
          <Text>Full Name</Text>
          <Field
            placeholder="Full Name"
            isRequired={true}
            component={TextInput}
            name="fullName"
          />
        </View>

        <View>
          <Text>Address</Text>
          <Field
            placeholder="Address"
            isRequired={true}
            component={TextInput}
            name="Address"
          />
        </View>

        <View>
          <Text>Email</Text>
          <Field
            name="email"
            component={TextInput}
            validate={[required, validateEmail]}
          />
        </View>

        <View>
          <Text>Password</Text>
          <Field
            placeholder="Password"
            isRequired={true}
            component={TextInput}
            name="Password"
            password={true}
          />
        </View>

        <View>
          <Text>Confirm Password</Text>
          <Field
            placeholder="Confirm Password"
            isRequired={true}
            component={TextInput}
            name="ConfPassword"
            password={true}
          />
        </View>
        <Button title={"Submit"} onPress={() => this._onSubmit()} />
      </Section>
    );
  }
}

export default reduxForm({
  form: "user"
})(UserForm);
