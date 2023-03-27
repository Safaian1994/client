import Colors from "../../constants/Colors";
import Alert from "./Alert";

const InfoAlert = ({ children, title,isToggled }) => {
  return (
    <Alert type="primary" isToggled={isToggled} title={title}   bgcolor={Colors._Blue[50]}>
      {children}
    </Alert>
  );
};

export default InfoAlert;
