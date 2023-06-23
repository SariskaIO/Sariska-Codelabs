var fieldData;
var formData;

function appendCss(cssprop) {
  var css = cssprop,
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);
  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

async function onLoad() {
  var maindiv = document.createElement("div");

  /**
   * Book appointment button
   */
  var buttonBookAppointment = document.createElement("button");
  buttonBookAppointment.setAttribute(
    "style",
    "background-color:#2C7BE5; border:none; color:white; padding:10px; border-radius:5px; tex-align:center; text-decoration:none; display:inline-block; font-size:16px; margin:4px 2px; cursor:pointer; position:absolute; bottom:22px; right:50px; box-shadow: rgba(0,0,0,0.09) 0px 3px 12px;"
  );
  buttonBookAppointment.setAttribute("id", "book-leadrouter");
  buttonBookAppointment.innerHTML += "Book Appointment";

  /**
   * Popup Modal
   */
  var modalPopup = document.createElement("div");
  modalPopup.setAttribute("class", "modal-leadrouter");
  modalPopup.setAttribute("id", "modal-leadrouter");
  modalPopup.innerHTML = `
    <div class="modal-content-leadrouter">
         <span class="close-button-leadrouter">×</span>
         <div id="content-leadrouter"></div>
    </div>
  `;
  //Append modal popup
  maindiv.append(modalPopup);

  //Append book appointment button
  //maindiv.append(buttonBookAppointment);

  var css = `
      .modal-leadrouter {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
        overflow-x: hidden;
        overflow-y: auto; 
        z-index: 99999;
      }

      .modal-content-leadrouter {
        position: absolute;
        top: 0;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        background-color: white;
        padding: 1rem 1.5rem;
        width: 80%;
        border-radius: 0.5rem;
        overflow: hidden;
        // height: 300px;
        margin: 1.75rem auto;
        position: absolute;
    }

      .close-button-leadrouter{
        float: right;
        width: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 0.25rem;
        background-color: lightgray;
      }

      .close-button:hover{
        background-color:darkgray;
      }

      .show-modal{
        opacity:1; 
        visibility:visible; 
        transform:scale(1.0); 
        transition: visibility 0s linear 0s , opacity 0.25s 0s, tranform 0.25s;
      }  
  `;
  appendCss(css);

  window.document.body && window.document.body.appendChild(maindiv);

  var formid = window.document
    .getElementById("formscript")
    .getAttribute("src")
    .split("?")[1]
    .split("=")[1];

  const response = await fetch(
    `https://apis.leadrouter.io/lead_router/v1/booking/bookingDetail/router/${formid}/${new Date()})`
  ).then((response) => response.json());

  console.log("Response", response);

  if (response && response.data.formType.form_type === "Mapped") {
    const buttonFilter = response.data.formType.fields.filter((data) => {
      return data.type == "button";
    });
    fieldData = response.data.formType.fields.filter((data) => {
      return data.type != "button";
    });
    console.log("button filter", buttonFilter);
    onClickDefine(buttonFilter[0]["name"], fieldData);
  } else {
    formData = response.data.formType.data;
  }
}

function makeAppointment() {
  window.document.body.classList.add('modal-app-open');
  console.log("Button clicked");
  console.log("Field Data", fieldData);
  if (fieldData) {
    const allData = {};
    fieldData.forEach((data) => {
      if (
        document.querySelector(`[name=${data.name}]`) &&
        data.name === "email"
      ) {
        allData["Email"] = document.querySelector(`[name=${data.name}]`).value;
      } else if (document.querySelector(`[name=${data.name}]`)) {
        allData[data.name] = document.querySelector(
          `[name=${data.name}]`
        ).value;
      } else {
        allData[data.name] = "";
      }
    });

    var formid = document
      .getElementById("formscript")
      .getAttribute("src")
      .split("?")[1]
      .split("=")[1];

    const modal = document.querySelector(".modal-leadrouter");

    const closeButton = document.querySelector(".close-button-leadrouter");

    modal.classList.toggle("show-modal");

    closeButton.addEventListener("click", function () {
      //window.document.body.classList.remove('modal-app-open');
      modal.classList.remove("show-modal");
    });
    var embedDiv = document.getElementById("content-leadrouter");
    embedDiv.innerHTML = `<embed title=${formid} id="embedformscript" type="text/html" src="https://leadrouter.io/book/router/${formid}?formData=${window.btoa(JSON.stringify(allData))}" style="overflow:hidden;" width="100%" height="530">`;
  }

  if (formData) {
    var formid = document
      .getElementById("formscript")
      .getAttribute("src")
      .split("?")[1]
      .split("=")[1];

      console.log("Form id", formid);

    const modal = document.querySelector(".modal-leadrouter");

    const closeButton = document.querySelector(".close-button-leadrouter");

    modal.classList.toggle("show-modal");

    closeButton.addEventListener("click", function () {
      window.document.body.classList.remove('modal-app-open');
      modal.classList.remove("show-modal");
    });
    var embedDiv = document.getElementById("content-leadrouter");
    embedDiv.innerHTML = `
         <embed title=${formid} id="embedformscript" type="text/html" src="https://leadrouter.io/book/router/${formid}" style="overflow:hidden;" width="100%" height="530">
    `;
  }
}

function onClickDefine(btn, fields) {
  console.log("Button Detail", document.getElementsByClassName(btn));

  if (
    document.getElementsByClassName(btn) &&
    document.getElementsByClassName(btn)[0]
  ) {
    document.getElementsByClassName(btn)[0].onclick = async function (e) {
      e.preventDefault();
      const allData = {};
      fields.forEach((data) => {
        if (
          document.querySelector(`[name=${data.name}]`) &&
          data.name === "email"
        ) {
          allData["Email"] = document.querySelector(
            `[name=${data.name}]`
          ).value;
        } else if (document.querySelector(`[name=${data.name}]`)) {
          allData[data.name] = document.querySelector(
            `[name=${data.name}]`
          ).value;
        } else {
          allData[data.name] = "";
        }
      });
      var formid = document
        .getElementById("formscript")
        .getAttribute("src")
        .split("?")[1]
        .split("=")[1];

      const modal = document.querySelector(".modal-leadrouter");

      const closeButton = document.querySelector(".close-button-leadrouter");

      modal.classList.toggle("show-modal");

      closeButton.addEventListener("click", function () {
        modal.classList.remove("show-modal");
      });
      var embedDiv = document.getElementById("content-leadrouter");
      embedDiv.innerHTML = `
           <embed title=${formid} id="embedformscript" type="text/html" src="https://leadrouter.io/book/router/${formid}?formData=${window.btoa(JSON.stringify(allData))}" style="overflow:hidden;" width="100%" height="530">
      `;
    };
  }
}

window.onload = function () {
  onLoad();
};
