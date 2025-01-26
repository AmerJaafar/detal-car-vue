<template>
  <section class="make-appointment" id="contact">
    <h1>Make Appointment</h1>

    <form @submit.prevent="handleSubmit" class="">
      <p v-if="successMessage" class="message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input
          type="text"
          v-model="formData.name"
          id="name"
          class="box"
          autocomplete="off"
          placeholder="Enter your name"
          required
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">Your Email:</label>
        <input
          type="email"
          v-model="formData.email"
          id="email"
          class="box"
          autocomplete="off"
          placeholder="Enter your email"
          required
        />
        <span v-if="errors.email" class="error-message">{{
          errors.email
        }}</span>
      </div>

      <div class="form-group">
        <label for="number">Your Number:</label>
        <input
          type="number"
          v-model="formData.number"
          id="number"
          class="box"
          autocomplete="off"
          placeholder="Enter your number"
          required
        />
        <span v-if="errors.number" class="error-message">{{
          errors.number
        }}</span>
      </div>

      <div class="form-group">
        <label for="date">Appointment Date:</label>
        <input
          type="datetime-local"
          v-model="formData.date"
          id="date"
          class="box"
          autocomplete="off"
          required
        />
        <span v-if="errors.date" class="error-message">{{ errors.date }}</span>
      </div>

      <input type="submit" class="btn" value="Make Appointment" />
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "makeAppointment",
  data() {
    return {
      successMessage: "",
      errorMessage: "",
      errors: {},
      formData: {
        name: "",
        email: "",
        number: "",
        date: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.clearMessages();

      if (!this.formData.name) {
        this.errors.name = "Name is required.";
      }
      if (!this.formData.email) {
        this.errors.email = "Email is required.";
      } else if (!this.validateEmail(this.formData.email)) {
        this.errors.email = "Invalid email format.";
      }
      if (!this.formData.number) {
        this.errors.number = "Number is required.";
      }
      if (!this.formData.date) {
        this.errors.date = "Date is required.";
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }
      try {
        const response = await axios.post(
          "https://your-api-endpoint.com/appointments",
          this.formData
        );
        if (response.status === 201 || response.status === 200) {
          this.successMessage = "Appointment successfully submitted!";
          this.resetForm();
        }
      } catch (error) {
        this.errorMessage =
          "Failed to submit the appointment. Please try again later.";
        console.error("API Error:", error);
      }
    },
    validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    clearMessages() {
      this.successMessage = "";
      this.errorMessage = "";
      this.errors = {};
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        number: "",
        date: "",
      };
    },
  },
};
</script>

<style scoped>
/* إضافة تنسيقات */
.form-group {
  margin-bottom: 1rem;
}
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
