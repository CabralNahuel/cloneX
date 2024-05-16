import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import {collection,getDocs , deleteDoc ,doc} from "firebase/firestore"
import {db} from "../../firebase/Conexion.js"
/* import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content" */


//const mySwa1 = withReactContent(Swal)

export const Show =()=>{ 
    //1 configurar los hooks
    const [books,setBooks]=useState([])
    //2 referenciamos a la base de firebase
    const booksCollection = collection(db,"products")
    //3 funcion para mostrar todos los docs
    const getBooks = async ()=>{
        const data = await getDocs(booksCollection)
        /* console.log(" Estamos por aca") */
         /* console.log(data.docs); */ 
        setBooks(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            
        )
        /* console.log(books)  */
    }
    getBooks()
    /* console.log(books) */
    //4 funcion para eliminar un doc
    const deleteBook = async (id)=>{
        const bookDoc = doc(db,"products" , id)
        await deleteDoc(bookDoc)
         getBooks()
    }
    //5 funcion para la confirmacion de los sweetalerts
/*     const confirmarDelete = (id)=>{
        Swal.fire({
            title: "Sabes lo que estas por hacer?",
            text: "Lo lamentaras mas tarde!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteBook(id)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    } */
    //6 useEffect
        useEffect(()=>{
            getBooks()
             console.log(books)  
            
        },[])
    //7 mostrar todo en pantalla



    return(
<>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link to="/create" className="btn btn-primary mt-2 mb-4"> CREAR</Link>
                    </div> 
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Autor</th>
                                <th>Titulo</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {books.map((book)=>(
                                <>
                                 <tr key={book.id}>
                                    <td>{book.autor}</td>
                                    <td>{book.titulo}</td>
                                    <td>{book.stock}</td>
                                    <td>
                                        <Link to={`/edit/${book.id}`} className="btn btn-warning"> <i className="fa-solid fa-pencil"></i></Link>
                                       {/*  <Link to={`/delete/${book.id}`} className="btn btn-danger"><i className="fa-solid fa-trash"></i></Link>
                                         */}
                                         <button onClick={()=>{confirmarDelete(book.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>  
                                        {/*<button className="btn btn-warning">Editar</button> */}
                                    </td>
                                </tr>
                               
                                </>
                               
                            )

                            )}
                           {/*  <tr>
                                <td>Cortazar</td>
                                <td>Rayuela</td>
                                <td>1000</td>
                                <td>
                                    <button className="btn btn-danger">Eliminar</button>
                                    <button className="btn btn-warning">Editar</button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>              
                </div>
            </div>
        </div>
</>



    )
}
