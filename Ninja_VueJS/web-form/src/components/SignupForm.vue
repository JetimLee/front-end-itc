<template>
  <div class="master-container">
    <form @submit.prevent="handleSubmission">
      <label>Email:</label><input type="email" v-model="email" required />
      <label>Password:</label
      ><input type="password" v-model="password" required />
      <label>Role</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Graphic Designer</option>
        <option value="cybersecurity">Cyber Security</option>
      </select>
      <label>Skills</label>
      <div class="skill-container">
        <div
          @click="removeSkill(skill)"
          class="pill"
          v-for="skill in skills"
          :key="skill"
        >
          {{ skill }}
        </div>
      </div>

      <input type="text" v-model="tempSkill" @keyup="addSkill" />
      <div class="terms">
        <input type="checkbox" v-model="terms" required />
        <label>Accept Terms & Conditions</label>
      </div>
      <div class="submit">
        <button type="submit">Create an account!</button>
      </div>
    </form>
    <div v-if="email && password && role">
      <p>Inputted email: {{ email }}</p>
      <p>Inputted password: {{ password }}</p>
      <p>Selected role: {{ role }}</p>
      <p>Has accepted terms and conditions: {{ terms }}</p>
      <p v-for="name in names" :key="name">{{ name }}</p>
    </div>

    <div class="name-container">
      <input type="checkbox" value="Gavin" v-model="names" />
      <label>Gavin</label>
    </div>
    <div class="name-container">
      <input type="checkbox" value="Sapir" v-model="names" />
      <label>Sapir</label>
    </div>
    <div class="name-container">
      <input type="checkbox" value="Yoram" v-model="names" />
      <label>Yoram</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      names: [],
      skills: [],
      tempSkill: "",
    };
  },
  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "," && this.tempSkill) {
        const skill = e.target.value.split(",")[0];
        if (this.skills.includes(skill)) {
          console.log("this skill is already here!");
        } else {
          this.skills.push(skill);
          console.log(`just pushed ${skill} to the skills array!`);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(e) {
      console.log(e);
      this.skills = this.skills.filter((el) => {
        return el !== e;
      });
    },
    handleSubmission() {
      //would handle any validation here

      console.log(
        this.password,
        this.skills,
        this.names,
        this.terms,
        this.role,
        this.email
      );
      // console.log(e);
      // console.log("form submitted!");
    },
  },
};
</script>

<style scoped>
.name-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.name-container > label {
  margin: 0.5rem 0;
}
.terms {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
input[type="checkbox"] {
  margin-right: 0.2rem;
  width: 1rem;
}
.master-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  min-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  max-width: 420px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
p {
  color: #555;
  font-size: 1em;
  text-transform: uppercase;
  line-height: 1.7;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;

  min-width: 30px;
  background: #eee;
  text-align: center;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.skill-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px;
  border-radius: 60px;
  margin-top: 20px;
  color: white;
}
</style>