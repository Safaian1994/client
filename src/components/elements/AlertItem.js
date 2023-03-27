const AlertItem = ({children}) => {
  return (
    <div className="body-item">
      <p>
        <span className="circle-symbol">●</span>
        {children}
      </p>
    </div>
  );
};

export default AlertItem;
