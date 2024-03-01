const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

/* method GET */
app.get('/', async (req, res) => {
  res.send('Hello World!!!');
})

app.get('/customers/:customerId/orders', async (req, res) => {
  try {
    const id = parseInt(req.params.customerId);
    const orders = await prisma.orders.findMany({ where: {customer_id: id}});
    res.json(orders);
  }  
  catch(error) {
    res.json(error);
  }
})

/* method PATCH */
app.patch('/employees/:employeeId', async (req, res) => {
  const employeeid = parseInt(req.params.employeeId);
  try {
    const UpdateEmployee = req.body
    await prisma.employees.update({
      where: {
        id: employeeid
      },
      data: UpdateEmployee
      })
      console.log(UpdateEmployee)
      res.json(UpdateEmployee);
    }
  catch(error) {
    res.json(error);
  }
})

/* method POST */
app.get('/products', async (req, res) => {
  res.send('products');
})
app.post('/products', async (req, res) => {
  try {
    const NewProduct = req.body
    await prisma.products.create({
    data: NewProduct
    })
    res.json(NewProduct);
  }
  catch(error) {
    res.json(error);
  }
})

/* method DELETE */
app.delete('/orders/:orderId', async (req, res) => {
  const orderId = parseInt(req.params.orderId)
  try {
    await prisma.products_Orders.deleteMany({
      where: {
        order_id: orderId
      }
    })
    await prisma.orders.delete({
      where: {
        id: orderId
      }
    })
    res.json('The Order was deleted successfully');
  }
  catch(error) {
    res.json(error);
  }
})


app.listen(port, () => {
    console.log('Server started')
})

// test