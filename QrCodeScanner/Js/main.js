const wrapper = document.querySelector(".wrapper"),
  form = wrapper.querySelector("form"),
  fileInp = form.querySelector("input"),
  infoText = form.querySelector("p"),
  copyBtn = wrapper.querySelector(".copy"),
  closeBtn = wrapper.querySelector(".close");

const fetchRequest = (formData, file) => {
  infoText.innerText = "Scanning Qr...";
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    method: "POST",
    body: formData
  }).then(res => res.json()).then(result => {
    result = result[0].symbol[0].data;
    infoText.innerText = result ? "Uploade a QR Code to Scan" : "Couldn't Scan QR Code";
    if (!result) return;

    form.querySelector("img").src = URL.createObjectURL(file); //creat string containg URL of passed object and passing as img Src
    console.log(result);
    wrapper.querySelector("textarea").innerText = result;

    wrapper.classList.add("active");
  }).catch(() => {
    infoText.innerText = "Couldn't Scan QR Code";

  })
}

fileInp.addEventListener("change", e => {
  let file = e.target.files[0];//getting user selected Files
  if (!file) {
    return;
  }

  let formData = new FormData(); // creating a new Formdata

  formData.append("file", file);//adding the selected Files to formData

  fetchRequest(formData, file);
});

copyBtn.addEventListener('click', () => {
  let text = wrapper.querySelector("textarea").textContent;
  navigator.clipboard.writeText(text);
})

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove("active");

})

form.addEventListener("click", () => fileInp.click());
