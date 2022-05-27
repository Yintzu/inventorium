import { useState } from "react"

export default function Location({ location, setSelectedLocation }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="content-left-location">
      <div className="content-left-location-title-wrapper">
        <span
          className="content-left-expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "-" : "+"}
        </span>
        <p
          className="content-left-location-title"
          onClick={() => setSelectedLocation(location)}
        >
          {location}
        </p>
      </div>
      {isExpanded ? (
        <div className="content-left-expanded-categories-wrapper">
          <p className="content-left-expanded-categories">På väg till</p>
          <p className="content-left-expanded-categories">På väg från</p>
          <p className="content-left-expanded-categories">Lager</p>
          <p className="content-left-expanded-categories">I drift</p>
        </div>
      ) : null}
    </div>
  )
}
