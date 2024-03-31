import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import InputFieldComponent from "./Fields/InputFieldComponent";
import { Formik } from "formik";
import SubmitButton from "./Fields/SubmitButton";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  HouseNo: Yup.number().required().min(1).max(10).label("House Number"),
  NumberOfRooms: Yup.number().required().min(1).max(20).label("Number of Rooms")
})

export default function PropertyForm() {
  return (
    <View className="w-[90%]">
      <Text className="text-lg font-extrabold my-2">REGISTER YOUR HOUSE</Text>
      <Formik
        initialValues={{ HouseNo: "", NumberOfRooms: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <InputFieldComponent
              icon="house"
              keyboardType="numeric"
              placeholder="Enter House Number (1 - 10)"
              onChangeText={handleChange("HouseNo")}
              onBlur={() => setFieldTouched("HouseNo")}
              error={errors.HouseNo}
              visible={touched.HouseNo}
            />
            <InputFieldComponent
              icon="meeting-room"
              keyboardType="numeric"
              placeholder="Enter Number Of Rooms (1 - 20)"
              onChangeText={handleChange("NumberOfRooms")}
              onBlur={() => setFieldTouched("NumberOfRooms")}
              error={errors.NumberOfRooms}
              visible={touched.NumberOfRooms}
            />
            <SubmitButton title={"Submit"} onpress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}
