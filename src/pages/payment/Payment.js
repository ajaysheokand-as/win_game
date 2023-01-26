import React, { useState } from "react";
import "./payment.scss";
import img from "../../img/tr1.png";
import swal from "sweetalert";

export const Payment = () => {
  const [image, setImage] = useState();

  const handleImageSelect = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  const uploadImage = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("image", image);

    const headers = new Headers();
    headers.append("Content-Type", `multipart/form-data;`);

    const options = {
      method: "POST",
      body: formData,
    };

    await fetch(
      "http://localhost/Backend/api_win_game/img/HandleImage.php",
      options
    )
      .then((response) =>
        response.json().then((res) => {
          if (!res?.success) {
            swal({
              title: "Error",
              text: res.error.message,
              icon: "warning",
              button: "OK",
            });
          } else {
            swal({
              title: "Image Uploaded",
              text: res.message,
              icon: "success",
              button: "OK",
            });
          }
          console.log("This is response", res);
        })
      )
      .catch((err) => {
        swal({
          title: "Error",
          icon: "warning",
          button: "OK",
        });
      });
  };
  const Serial_no = Date.now();
  return (
    <>
      <div className="payment container">
        <div className="header">
          <div className="header__main-heading">UPI Pay</div>
          <div className="header__description">Help Mail:abc@gmail.com</div>
        </div>
        <div className="amount">
          <div className="amount__title">Click the amount to copy</div>
          <div className="amount__value"> ₹ 500.00</div>
          <div className="amount__serial-no">
            <span className="amount__title">Serial No.: </span> {Serial_no}
          </div>
        </div>
        <div className="steps">
          <span>Step 1:</span>&nbsp;
          <span className="steps__content">
            Transfer ₹ 500.00 to the following upi
          </span>
        </div>
        <div className="upi m-3">
          asdfghjkl@okaxis
          {/* <a className='btn btn-sm btn-secondary' href="#">Copy</a> */}
        </div>

        <div className="instruction">
          <p>
            Open your UPI wallet and complete the transfer.<br></br>
            Record your reference No.(Ref No.) after payment.
          </p>
        </div>
        <div className="steps ref">
          Step 2: Submit Screeshot of Successful Transaction<br></br>
          <div className="ref__inputbox mt-2">
            {/* <label className="ref__label mb-2">Upload Screeshot</label> */}
            <form onSubmit={uploadImage}>
              <input className="choose_file" type="file" onChange={handleImageSelect} name="image" />
              <input
                className="mt-5 mb-2 btn btn-success w-100"
                type="submit"
                value="Upload Screenshot"
              />
            </form>
            {/* <div className="btn btn-success w-100" href="#">
              Submit
            </div> */}
          </div>
        </div>
        <div>
          <img className="ref__demo-img" src={img} alt="Ref No Demo"></img>
        </div>
      </div>
    </>
  );
};
