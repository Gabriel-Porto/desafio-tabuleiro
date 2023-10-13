import "./styles.css"
import "../Square"

export default function Square(props: any) {
  return (
    <div
      className="square"
      style={{
        backgroundColor: props.black ? "black" : "white",
      }}
    ></div>
  )
}
