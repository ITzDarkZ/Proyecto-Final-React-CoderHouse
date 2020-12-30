import React, {useState} from 'react'
import swal from 'sweetalert';

const ItemCount = ({inicial, stock}) => {
    const [contador, setContador] = useState(Number(inicial))
    stock = Number(stock)

    const onAdd = () =>{
        if(stock !== 0){
            swal({
                title: "Estas seguro?",
                text: "estas seguro de que quieres agregar este producto al carrito?",
                icon: "warning",
                buttons: true,
              }).then((agregar) => {
                if (agregar) {
                  swal("Este producto fue agregado al carrito!", {
                    icon: "success",
                  });
                }
              });
        } else {
            swal({
                    title: "No hay stock!",
                    text: "No hay stock disponible para este producto",
                    icon: "error",
                    buttons: false
                });
        }
    }

    return (
        <div className="itemCount">
            <p className="valor">{contador}</p>
            <div className="botones">
                <button onClick={() => {    if(stock !== 0){
                                                if(contador < stock){ 
                                                    setContador(contador + 1)
                                                }
                                            }
                                        }
                                }>+</button>
                <button onClick={ onAdd }>Agregar al Carrito</button>
                <button onClick={ () => { if(contador !== 1){ setContador(contador - 1) } } }>-</button>
            </div>
        </div>
    )
}

export default ItemCount
