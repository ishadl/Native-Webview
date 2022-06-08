declare const window: any;

export const sendToNative = (jsonObject) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify(jsonObject));
  }
};

export const readFromNative = (setvalue) => {
  document.addEventListener("message", (message: any) => {
    const result = JSON.stringify(message.data);
    setvalue(result);
  });
};
