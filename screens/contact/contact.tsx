"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme, setTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    city: "",
    state: "",
  });

  const { name, email, message, number, city, state } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Check if all fields are filled
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === "" ||
      number.trim() === "" ||
      city.trim() === "" ||
      state.trim() === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const data = {
      ...formData,
      access_key: "e153fc2c-8be1-4bd3-83a4-061a6ab36217",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message, {
          duration: 2500,
          ...(theme === "dark" && {
            style: {
              border: "1px solid #854DBE",
              color: "#ffffff",
              backgroundColor: "#000000",
            },
            iconTheme: {
              primary: "#854DBE",
              secondary: "#FFFAEE",
            },
          }),
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          number: "",
          city: "",
          state: "",
        });
      } else {
        toast.error("Email not sent");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full grid gap-3 mx-auto md:max-w-[500px]"
      >
        <Input
          type="text"
          label="Full Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          label="Phone Number *"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          label="City"
          name="city"
          value={city}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          label="State"
          name="state"
          value={state}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="w-full"
          name="message"
          value={message}
          onChange={handleChange}
          required
        />
        <Button
          color="secondary"
          className="disabled:bg-secondary-200 disabled:cursor-not-allowed text-white"
          type="submit"
          disabled={!name || !email || !message || !number}
        >
          Submit Form
        </Button>
      </form>
    </>
  );
}
