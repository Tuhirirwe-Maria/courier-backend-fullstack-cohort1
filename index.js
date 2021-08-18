const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require('constants');
const express = require('express');

const app = express();

app.use(express.json())

//delivery  order data
const deliveryorderArray = [{
    itemname:'clothes',
    sendersname:'Abubaker Yusuf',
    senderscontact:'0897464536',
    senderslocation:'Kampala',
    receiversname:'Umar Lut',
    receiverscontact:'0836654749',
    receiverslocation:'Adjumani'

}]


app.post('/deliveryorder',(req,res)=>{
    const newdeliveryorder = req.body;
    deliveryorderArray.push(newdeliveryorder);

    res.send('Parcel Delivery Order Successfully Created !!!!!!')
})

app.delete('/deliveryorder/:id', (req, res)=>{
    const newdeliveryorder = deliveryorderArray.find((newdeliveryorder)=>{return newdeliveryorder.id === parseInt(req.params.id)});
    if(!newdeliveryorder){
        res.send('Parcel Delivery Order not Found')
    }else{
        let index = deliveryorderArray.indexOf(newdeliveryorder);
        deliveryorderArray.splice(index,1);
        res.send('Parcel Delivery Order successfully deleted')
    }
})

app.listen(6000,()=>{
    console.log('server is listening on port 6000 ....')
})