import { useState } from "react"
import { useGlobalState } from "../../../state/GlobalStateContext"
import style from "./Location.module.css"

export default function Location({ location }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { setSelectedLocation, setShowSidebarMobile } = useGlobalState()

  const handleClick = () => {
    setSelectedLocation(location)
    setShowSidebarMobile(false)
  }

  const handleExpand = e => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={style["location"]} onClick={handleClick}>
      <div className={style["location-title-wrapper"]}>
        <span
          className={style["expand-button"]}
          onClick={handleExpand}
        >
          {isExpanded ? "-" : "+"}
        </span>
        <p className={style["location-title"]}>{location}</p>
      </div>
      {isExpanded ? (
        <div className={style["expanded-categories-wrapper"]}>
          <p className={style["expanded-categories"]}>
            På väg till
          </p>
          <p className={style["expanded-categories"]}>
            På väg från
          </p>
          <p className={style["expanded-categories"]}>Lager</p>
          <p className={style["expanded-categories"]}>I drift</p>
        </div>
      ) : null}
    </div>
  )
}
