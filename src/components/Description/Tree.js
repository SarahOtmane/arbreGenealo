
const Tree = ({ node, children }) =>{
    return(
        <div>
      <p>{node.value}</p>
      {children}
    </div>
    )
}

export default Tree