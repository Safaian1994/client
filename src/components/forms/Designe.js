import InfoAlert from "../elements/InfoAlert";
import AlertItem from "../elements/AlertItem";

const Designe = () => {
  return (
    <>
      <div className="col-12">
        <InfoAlert title="Designed & Developed by :">
          <AlertItem>
            Ali A. Asadi-Pooya, M.D., Professor of Epileptology
          </AlertItem>
          <AlertItem>
            Shiraz University of Medical Sciences, Shiraz, Iran
          </AlertItem>
          <AlertItem>
            Thomas Jefferson University, Philadelphia, PA, USA
          </AlertItem>
          <AlertItem>
            <a
              href="mailto:aliasadipooya@yahoo.com"
              rel="noreferrer"
              target="_blank"
            >
              AliAsadiPooya@yahoo.com
            </a>
          </AlertItem>
        </InfoAlert>
      </div>
    </>
  );
};
export default Designe;
