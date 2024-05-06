export default function GoogleMap() {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "right",
        width: "100%",
        height: "400px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          background: "none!important",
          width: "100%",
          height: "400px",
        }}
      >
        <iframe
          style={{ height: "400px!important" }}
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=igbesa lusada ogun state&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://connectionsgame.org/">Connections Game</a>
      </div>
    </div>
  );
}
