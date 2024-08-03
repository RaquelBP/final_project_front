import { useState, useEffect } from "react"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import { Link, useNavigate } from "react-router-dom"
import CartItem from "../components/CartItem"
import CartTotalPrice from "../components/CartTotalPrice"

const Cart = () => {
    const { items, clearCart } = useShoppingCartContext()
    const [emailChecked, setEmailChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [orderSuccess, setOrderSuccess] = useState(false)  //Settear pedido enviado correctamente?
    const [timer, setTimer] = useState(5) //Temporizador inicial en segundos
    const navigate = useNavigate() //Redirigir

    const handleCheckboxChange = (e) => {
        setEmailChecked(e.target.checked)
        if (!e.target.checked) {
            setEmail("")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (emailChecked && email === "") {
            alert("Por favor, introduce tu email.")
            return
        }

        const products = items.map(item => ({
            product_id: item.product_id,
            product_name: item.name,
            quantity: item.amount,
            sub_total_price: item.total_price,
            sub_preparation_minutes: item.minutes * item.amount
        }))

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ products, userEmail: email })
            })

            if (!response.ok) {
                throw new Error('Failed to create order')
            }

            const result = await response.json();
            setOrderSuccess(true)

            //Vaciar el carrito después de la confirmación del pedido (desde el CartContext)
            clearCart()

            //Temporizador y redirge después de 5 segs
            const interval = setInterval(() => {
                setTimer(tiempo => {
                    if (tiempo <= 1) {
                        clearInterval(interval);
                        return 0
                    }
                    return tiempo - 1
                })
            }, 1000)

            setTimeout(() => {
                navigate("/")
            }, 5000)

        } catch (error) {
            console.error('Error:', error)
            alert('There was an error creating the order')
        }
    }

    return (
        <div className="cart page">
            {orderSuccess ? (
                <div>
                    <p>¡Gracias por tu compra!</p>
                    <p>Redirigiendo a la tienda en {timer} segundos...</p>
                </div>
            ) : items.length === 0 ? (
                <div>
                    <Link to="/" className="backLink"><p className="backP">Volver al listado</p></Link>
                    <p>Añade artículos para completar el pedido</p>
                </div>
            ) : (
                <div className="carrito">
                    <Link to="/" className="backLink"><p className="backP">Volver al listado</p></Link>
                    <div className="cart-items">
                        {items.map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </div>
                    <CartTotalPrice />
                    
                    <form action="/" onSubmit={handleSubmit}>
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
                        <button type="submit">Terminar Pedido</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Cart
