<template>
  <header>
    <h1>Contact Me</h1>
  </header>
  <main>
    <section>
      <h2>General Inquiries</h2>
      <form @submit.prevent="general">
        <h3>Name</h3>
        <input type="text" name="name" v-model="general_name" required></input>
        <h3>Email</h3>
        <input type="email" name="email" v-model="general_email" required></input>
        <h3>Subject</h3>
        <select name="general_subject" v-model="general_subject" required>
          <option value="" disabled>Please Select</option>
          <option v-for="item in general_select" value="item.value">{{ item.title }}</option>
        </select>
        <div v-if="general_subject == 'other'">
          <h3>If Other, Please Specify</h3>
          <input type="text" name="general_other" v-model="general_other" required>
        </div>
        <h3>Message</h3>
        <textarea name="message" v-model="general_message" required></textarea><br>
        <input type="submit" name="general_submit">
        <input type="reset" name="general_reset">
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      general_name: '',
      general_email: '',
      general_select: [
        {value: "content", title: "Content"},
        {value: "help", title: "Help"},
        {value: "1", title: "1"},
        {value: "2", title: "2"},
        {value: "3", title: "3"},
        {value: "4", title: "4"},
        {value: "5", title: "5"},
        {value: "other", title: "Other"},
      ],
      general_subject: '',
      general_other: '',
      general_message: '',
    };
  },
  methods: {
    general() {

    }
  }
};
</script>

<style>

</style>