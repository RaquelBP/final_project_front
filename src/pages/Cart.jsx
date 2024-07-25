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
            setEmail("");
        }
    }

    const sendForm = (e) => {
        if (emailChecked && email === "") {
            e.preventDefault()
            alert("Por favor, introduce tu email.")
        }
    }

    const calcularPrecioTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const pedido = {
        products: items,
        userE0mail: email,
        totalPrice: calcularPrecioTotal()
    }

    console.log(pedido)

    

    console.log(items)

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
                <button type="submit">Pagar</button>
            </form>
        </div>
    );
};

export default Cart;
