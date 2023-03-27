import InfoAlert from "../elements/InfoAlert";
import AlertItem from "../elements/AlertItem";

const Declarations = () => {
  return (
    <div className="col-12">
      <InfoAlert title="Declarations :" isToggled>
        <AlertItem>
          Conflicts of interest : <b>None</b>
        </AlertItem>
        <AlertItem>
          Funding : <b>None</b>
        </AlertItem>
        <AlertItem>
          Acknowledgement :{" "}
          <b> I thank Mr. Alireza Safaeian for software development</b>
        </AlertItem>
      </InfoAlert>
    </div>
  );
};

export default Declarations;
