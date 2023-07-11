import { ElMessage } from "element-plus";

const copy = {
  mounted(el, bind) {
    el.value = bind.value;
    el.addEventListener("click", handleCopy);
  },
  updated(el, bind) {
    el.value = bind.value;
  },
  beforeUnmount(el) {
    el.removeEventListener("click", handleCopy);
  },
};

function handleCopy() {
  const copyValue = this.value.toString();

  const input = document.createElement("input");
  input.value = copyValue;
  document.body.appendChild(input);

  input.select();
  const copyState = document.execCommand("Copy");
  document.body.removeChild(input);

  ElMessage({
    type: copyState ? "success" : "warning",
    message: copyState ? "复制成功" : "复制失败",
  });
}

export default copy;
