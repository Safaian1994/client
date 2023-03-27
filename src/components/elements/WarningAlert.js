import Alert from "./Alert";
import Colors from "../../constants/Colors";

const WarningAlert = ({ children, title,isToggled }) => {
  return (
    <Alert type="warning" isToggled={isToggled} title={title} bgcolor={Colors._Yellow[50]}>
      {children}
    </Alert>
  )
}

export default WarningAlert
