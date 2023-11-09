interface ConfirmDialogOptions {
  accept?: (param?: () => void) => void;
  reject?: () => void;
  title?: string;
  text: string;
  acceptText: string;
  rejectText: string;
}

const visible = ref(false);
const options = ref({} as Partial<ConfirmDialogOptions>);
const accept = ref(() => {});

export const useConfirmDialog = (customOptions: Partial<ConfirmDialogOptions> = {}) => {
  const defaultOptions: ConfirmDialogOptions = {
    text: "Are you sure you want to perform this action?",
    acceptText: "Confirm",
    rejectText: "Close",
  };

  const open = (callback?: () => void) => {
    if (callback) {
      accept.value = () => {
        callback();
        close();
      };
    }
    visible.value = true;
  };
  const close = () => {
    visible.value = false;
  };

  const decline = () => {
    close();
  };

  options.value = {
    ...defaultOptions,
    ...customOptions,
  };

  return {
    open,
    close,
    visible,
    options,
    accept,
    decline,
  };
};
