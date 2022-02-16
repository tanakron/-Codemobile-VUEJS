<template>
  <div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <form v-on:submit.prevent="submit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >first name</label
            >
            <input
              type="text"
              name="first_name"
              v-model.trim="register.frist_name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <!-- .trim  คือการ กันใส่ ช่องว่าง หรือ สเปคบาร์-->
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >lastname</label
            >
            <input
              type="text"
              name="last_name"
              v-model.trim="register.last_name"
              class="form-control"
              id="exampleInputPassword1"
            />
            <!-- lazy คือการพิม แบบ ต้องกด summit ถึงจะแสดง -->
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              name="remember"
              value=""
              v-model="register.remember"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">Remeber </label>
          </div>
          <div class="mb-3">
            <input
              type="number"
              v-model.number="register.age"
              class="form-control"
            />
            <!-- .number แปลงเป็นตัวเลข -->
            <label class="form-check-label">Number</label>
          </div>
          <button type="button" @click="clear">clear</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        {{ JSON.stringify(register) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        frist_name: "",
        last_name: "",
        remember: "0",
        age: "",
      },
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.register));
    },
    clear() {
      this.register = {
        frist_name: "",
        last_name: "",
        remember: "0",
        age: "",
      };
    },
  },
};
</script>

<style></style>
