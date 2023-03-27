import InfoAlert from "../elements/InfoAlert";
import AlertItem from "../elements/AlertItem";

const Works = () => {
  return (
    <div className="col-12">
      <InfoAlert title="How This Application Works :" isToggled>
        <AlertItem>
          GET (Gene, Epilepsy, Treatment) is an application to facilitate the
          decision making process for the treating physician .
        </AlertItem>
        <AlertItem>
          When a genetic diagnosis is made and a specific gene is identified,
          the physician enters the gene name into the search box and the App
          shows whether this genetic epilepsy has a specific treatment .
        </AlertItem>
        <AlertItem>
          To ascertain that the clinical diagnosis of the patient matches the
          genetic diagnosis, phenotype(s) that is associated with the identified
          gene is also presented .
        </AlertItem>
        <AlertItem>
          Many treatment strategies may need consultations with other experts
          (endocrinologists, dieticians, etc.) .
        </AlertItem>
        <AlertItem>
          One should remember that there are hundreds of genes that are
          associated with different epilepsy syndromes, but they may not affect
          the treatment plan beyond the typical treatments for that syndrome;
          these genes are not included in the current database and application .
        </AlertItem>
      </InfoAlert>
    </div>
  );
};

export default Works;
