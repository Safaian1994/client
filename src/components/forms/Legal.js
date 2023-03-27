import WarningAlert from "../elements/WarningAlert";
import AlertItem from "../elements/AlertItem";

const Legal = () => {
  return (
    <div className="col-12">
      <WarningAlert title="LEGAL DISCLAIMER :" isToggled>
        <AlertItem>
          This application is designed for healthcare professionals. The app is
          based on available evidence. This app is not an official guideline and
          the recommendations do not replace standard health care practice.
          Interpretation of the content and the data presented are the
          responsibility of the user. This app is designed to aid the
          prescriber, but does not substitute for that person's clinical
          judgment. The final decision regarding prescription of medication is
          the responsibility of the user. Users should have knowledge about any
          drug or course of action they prescribe. The user understands that
          this app is not a medical device .
        </AlertItem>
        <AlertItem>
          Data entry in the app will be saved anonymously so that the app
          performance can be analyzed and improved. The author may choose to
          publish about the use of the app, and no users will be identified in
          any way .
        </AlertItem>
      </WarningAlert>
    </div>
  );
};

export default Legal;
