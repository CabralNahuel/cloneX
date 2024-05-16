import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection,addDoc, getDocs } from "firebase/firestore"
import {db} from "../../firebase/Conexion.js"


export const Create=()=>{

    const [autor,setAutor]= useState("Aca va el autor")
    const [titulo,setTitulo]= useState("Aca va el autor")
    const [stock,setStock]= useState("Aca va el autor")
    const navigate = useNavigate()
    const booksCollection = collection(db,"products")

    const createBook = async (e)=>{
        e.preventDefault()
        await addDoc(booksCollection,{
            autor:autor,
            titulo:titulo,
            stock:stock
        })
        navigate("/show")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                        <h1> Create Product</h1>
                        <form onSubmit={createBook} method="get">
                            <div className="mb-3">
                                <label className="form-label"> Autor </label>
                                <input
                                value={autor}
                                onChange={(e)=>setAutor(e.target.value)}
                                className="form-control"
                                type="text"  />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label"> Titulo </label>
                                <input
                                value={titulo}
                                onChange={(e)=>setTitulo(e.target.value)}
                                className="form-control"
                                type="text"  />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Stock </label>
                                <input
                                value={stock}
                                onChange={(e)=>setStock(e.target.value)}
                                className="form-control"
                                type="number"  />
                            </div>

<button className="btn btn-primary" type="submit"> CREATE BOOK</button>
                        </form>
                </div>
            </div>
        </div>
    )

}


