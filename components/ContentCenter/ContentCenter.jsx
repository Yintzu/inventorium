export default function ContentCenter({ selectedLocation }) {
  return (
    <div className="content-center">
      <p className="content-center-title">{selectedLocation}</p>
      <div className="content-center-container">
        <p className="content-center-container-title">På väg till</p>
        <div className="content-center-ontheway-card">

        </div>
      </div>
    </div>
  )
}
