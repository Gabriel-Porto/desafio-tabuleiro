import Square from "../Square"
import "./styles.css"

export default function Row(props) {
  return (
    <div className="row">
      <Square black={props.odd} />
      <Square black={!props.odd} />
      <Square black={props.odd} />
      <Square black={!props.odd} />
      <Square black={props.odd} />
      <Square black={!props.odd} />
      <Square black={props.odd} />
      <Square black={!props.odd} />
    </div>
  )
}
