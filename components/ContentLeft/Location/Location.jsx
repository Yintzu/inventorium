import { useState } from "react"
import style from "./Location.module.css"

export default function Location({
  location,
  setSelectedLocation,
  setShowLocationsMobile,
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setSelectedLocation(location)
    setShowLocationsMobile(false)
  }

  const handleExpand = e => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={style["content-left-location"]} onClick={handleClick}>
      <div className={style["content-left-location-title-wrapper"]}>
        <span
          className={style["content-left-expand-button"]}
          onClick={handleExpand}
        >
          {isExpanded ? "-" : "+"}
        </span>
        <p className={style["content-left-location-title"]}>{location}</p>
      </div>
      {isExpanded ? (
        <div className={style["content-left-expanded-categories-wrapper"]}>
          <p className={style["content-left-expanded-categories"]}>
            På väg till
          </p>
          <p className={style["content-left-expanded-categories"]}>
            På väg från
          </p>
          <p className={style["content-left-expanded-categories"]}>Lager</p>
          <p className={style["content-left-expanded-categories"]}>I drift</p>
        </div>
      ) : null}
    </div>
  )
}
