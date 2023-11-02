import { setLocale } from "yup";
import * as yup from "yup";
import { en, ru } from "~/locales/yup";

interface Locales {
  ru: typeof ru;
  en: typeof en;
}

export const useValidation = (): typeof yup => {
  const { locale } = useI18n();

  const locales: Locales = { ru, en };
  setLocale(locales[locale.value as keyof Locales]);

  return yup;
};
