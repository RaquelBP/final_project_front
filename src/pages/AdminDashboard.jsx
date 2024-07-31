// AdminDashboard.jsx
import React from 'react';
import { useAdminOrders } from '../hooks/useAdmin';

const AdminDashboard = () => {
  const { orders, loading, error } = useAdminOrders();

  if (loading) return <div>Cargando pedidos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='dashboard page'>
      <h1>Admin Dashboard</h1>
      <table>
        <caption><strong>Pedidos</strong></caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Minutos</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{new Date(order.created_at).toLocaleString()}</td>
              <td>{order.total_minutes}</td>
              <td>{order.total_price}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
