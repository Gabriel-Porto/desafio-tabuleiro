import Row from "../Row"
import "./styles.css"

export default function Board() {
  return (
    <div className="board">
      <Row />
      <Row odd />
      <Row />
      <Row odd />
      <Row />
      <Row odd />
      <Row />
      <Row odd />
    </div>
  )
}
