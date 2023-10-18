<script setup>
import { useField } from "vee-validate";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
});
const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div>
    <v-text-field
      v-model="value"
      class="me-10 mb-2"
      style="width: 100%;"
      :label="props.label"
      :type="props.type"
      :error-messages="errorMessage"
    />
  </div>
</template>
