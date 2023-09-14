// import { useLocation } from "react-router-dom";
import ReactFamilyTree from 'react-family-tree';
import FamilyNode from './Familynode';

const Description = () =>{
    // const location = useLocation();
    // const params = new URLSearchParams(location.search);

    // const photo = params.get('parametre1');
    // const nom = params.get('parametre2');
    // const description = params.get('parametre3')


    const WIDTH = 100;
    const HEIGHT = 120;
    
    const nodes = [
      { id: 1, name: 'John', left: 0, top: 0 },
      { id: 2, name: 'Alice', left: -1, top: 1 },
      { id: 3, name: 'Bob', left: 1, top: 1 },
      { id: 4, name: 'Eva', left: -2, top: 2 },
      { id: 5, name: 'David', left: 0, top: 2 },
      { id: 6, name: 'Grace', left: 2, top: 2 },
    ];
    
    const rootId = 1; // Root node ID (John in this case)

    return(
        <div>
      <ReactFamilyTree
        nodes={nodes}
        rootId={rootId}
        width={WIDTH}
        height={HEIGHT}
        renderNode={(node) => <FamilyNode key={node.id} node={node} WIDTH={WIDTH} HEIGHT={HEIGHT} />}
      />
    </div>
    )
}

export default Description;