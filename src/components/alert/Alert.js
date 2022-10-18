import { toast } from 'react-toastify';

export const Alert = (props) => {
    const alertType = props.type || "success";
    const title = props.title || "Success";
   
    return  (toast.alertType(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }))
}
