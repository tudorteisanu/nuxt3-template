import { configure, defineRule } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import { required, min, max, email, min_value as minValue } from "@vee-validate/rules";
import { en, ru } from "~/locales/validation";

export default defineNuxtPlugin(() => {
  defineRule("email", email);
  defineRule("required", required);
  defineRule("min", min);
  defineRule("max", max);
  defineRule("minValue", minValue);

  configure({
    generateMessage: localize({
      en,
      ru,
    }),
  });
});
