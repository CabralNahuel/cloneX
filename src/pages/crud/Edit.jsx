import { useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { getDoc,updateDoc,doc } from "firebase/firestore"
import {db} from "../../firebase/Conexion.js"



export const Edit=()=>{
    const [autor,setAutor]= useState("Aca va el autor")
    const [titulo,setTitulo]= useState("Aca va el titulo")
    const [stock,setStock]= useState(0)
    const navigate = useNavigate()

    const {id}=useParams()

    const update= async(e)=>{
        e.preventDefault();

        const productDoc = doc(db, "products",id)

        const data={
            autor:autor,
            titulo:titulo,
            stock:stock,
        };

        await updateDoc(productDoc,data);


        navigate("/show");
    }

    const getProductbyId = async (id)=>{

        const productDoc = await getDoc(doc(db,"products",id))

        if(productDoc.exists()){
            setAutor(productDoc.data().autor)
            setTitulo((await productDoc).data().titulo)
            setStock(productDoc.data().stock)
        }else {
            
            return(
                <>
                <div>
                <h1> NO existe el libro </h1>
                </div>
                
               { console.log("NO exite el libro")}
                </>  
            )           
        }
    }

    useEffect(()=>{
        getProductbyId(id)
    },[])

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                <h1>  Edit Book </h1>
                <form onSubmit={update}>
                    <div className="m-3">
                        <label className="form-label"> Autor </label>
                        <input
                        value={autor}
                        onChange={(e)=>setAutor(e.target.value)}
                        type="text"
                        className="form-control" />
                    </div>
                    <div className="m-3">
                    <label className="form-label"> Titulo </label>
                        <input
                        value={titulo}
                        onChange={(e)=>setTitulo(e.target.value)}
                        type="text"
                        className="form-control" />
                    </div>
                    <div className="m-3">
                    <label className="form-label"> Stock </label>
                        <input
                        value={stock}
                        onChange={(e)=>setStock(e.target.value)}
                        type="number"
                        className="form-control" />
                    </div>
                <button type="submit" className="btn btn-primary">UPDATE</button>
                </form>

                </div>
            </div>
        </div>

        </>
        
    )

}