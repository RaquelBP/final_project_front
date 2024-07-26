import { useState } from "react"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
import CartTotalPrice from "../components/CartTotalPrice"

const Cart = () => {
    const { items } = useShoppingCartContext()
    const [emailChecked, setEmailChecked] = useState(false)
    const [email, setEmail] = useState("")

    const handleCheckboxChange = (e) => {
        setEmailChecked(e.target.checked)
        if (!e.target.checked) {
            setEmail("")
        }
    }

    const sendForm = (e) => {
        if (emailChecked && email === "") {
            e.preventDefault()
            alert("Por favor, introduce tu email.")
        }
    }

    /*
    const calcularPrecioTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
    };
    */

    /*
    const pedido = {
        products: items,
        userE0mail: email,
        totalPrice: calcularPrecioTotal()
    }
        */

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        //const totalPreparationMinutes = items.reduce((total, item) => total + item.minutes * item.quantity, 0)
        //const totalPrice = calcularPrecioTotal()
      
        const products = items.map(item => ({
          product_id: item.product_id,
          product_name: item.name,
          quantity: item.amount,
          sub_total_price: item.total_price,
          sub_preparation_minutes: item.minutes * item.amount
        }));
      
        try {
          const response = await fetch('http://localhost:3000/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ products, userEmail: email })
          });
      
          if (!response.ok) {
            throw new Error('Failed to create order');
          }
      
          const result = await response.json();
          alert(`Order created successfully with ID: ${result.orderId}`)
          // Limpiar el carrto después de hacer el pedido
          // CAMBIAR: Redirigir o mostrar mensaje de éxito
        } catch (error) {
          console.error('Error:', error);
          alert('There was an error creating the order');
        }
      };
      
    //console.log("CART: ", items)

    return (
        <div className="cart">
            <Link to="/">Volver al listado</Link>
            <div className="cart-items">
                {items.map((item, i) => (
                    <CartItem key={i} item={item} />
                ))}
            </div>
            <CartTotalPrice />
            <form action="/" onSubmit={sendForm}>
                <div>
                    <label htmlFor="emailCheck">Deseo recibir el ticket por email</label>
                    <input type="checkbox" name="emailCheck" id="emailCheck" onChange={handleCheckboxChange} />
                </div>
                {emailChecked && (
                    <div>
                        <label htmlFor="email">Introduce tu email: </label>
                        <input placeholder="demo@demo.com" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required={emailChecked} />
                    </div>
                )}
                <button type="submit" onClick={handleSubmit}>Terminar Pedido</button>
            </form>
        </div>
    )
}

export default Cart;
