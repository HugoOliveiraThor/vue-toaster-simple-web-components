const warning = "#FDB771";
const success = "#04A26C";
const error = "#F73952";
export default {
  name: "toaster",
  props: {
    params: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    whatColor() {
      console.log(this.$props.params.type)
      switch (this.$props.params.type) {
        case "success":
          return success;
        case "warning":
          return warning;
        case "error":
          return error;
        default:
          return success;
      }
    }
  },
  data() {
    return {
      open: false
    };
  },
  watch: {
    "params.text": {
      handler(val) {
        console.log('val', val)
        this.open = true;
        if (val) {
          setTimeout(() => {
            this.open = false;
          }, 3000);
        }
      },
      deep:true,
      immediate:true
    }
  }
};
