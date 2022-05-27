export default function OnTheWay() {
  return (
    <div className="content-center-container">
      <p className="content-center-container-title">På väg till</p>
      <div className="content-center-ontheway-grid">
        <div className="content-center-ontheway-card">
          <p>Cisco 48p</p>
          <p>Tracking: 989789986</p>
          <p>Sent from: WG1</p>
          <button className="content-center-ontheway-hasarrived-btn">
            Har ankommit
          </button>
        </div>
      </div>
    </div>
  )
}
