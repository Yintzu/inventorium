import style from "./AddItem.module.css"

export default function AddItem({ setShowAddModal }) {
  return (
    <div className={style["overlay"]}>
      <div className={style["add-box"]}>
        <div className={style["add-container"]}>
          <p className={style["title"]}>Lägg till</p>
          <input type="text" className={style["input"]} />
          
          <div className={style["btn-wrapper"]}>
            <button
              className={style["cancel"]}
              onClick={() => setShowAddModal(false)}
            >
              Avbryt
            </button>
            <button className={style["confirm"]}>Lägg till</button>
          </div>
        </div>
      </div>
    </div>
  )
}
