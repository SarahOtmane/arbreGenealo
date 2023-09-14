const FamilyNode = ({ node, HEIGHT, WIDTH }) =>{
    return(
        <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        border: '1px solid #000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {node.name}
    </div>

    )
}

export default FamilyNode